import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
// Inicializar o cliente Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}

export const useQuoteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      message: ""
    });
    setIsSubmitted(false);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const siteOrigin = window.location.origin;

    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Enviar dados para o Supabase na tabela "emails"
      const { error } = await supabase.from("emails").insert([
        {
          name: formData.name,
          email: formData.email,
          number: formData.whatsapp,
          message: formData.message,
          origin: siteOrigin
        }
      ]);

      if (error) throw error;

      setIsSubmitted(true);

      // Criando a mensagem no formato desejado
      const emailMessage = `
  Novo Lead JRVSteelobras:<br />
  <strong>Nome Completo:</strong> ${formData.name}<br />
  <strong>E-mail:</strong> ${formData.email}<br />
  <strong>Whatsapp:</strong> ${formData.whatsapp}<br />
  <strong>Mensagem:</strong> "${formData.message}"<br />
`;

      // Enviar os dados para a API de envio de e-mails
      const emailData = {
        to: "andreviana.controle@gmail.com", // O e-mail de destino
        subject: `Novo Lead de ${formData.name}`,
        message: emailMessage // Mensagem formatada
      };

      await axios.post(
        "https://email-sender-cz46.onrender.com/send-email", // URL da sua API de envio de e-mail
        emailData
      );

      // Reset form after 5 seconds
      setTimeout(() => {
        resetForm();
      }, 5000);
    } catch (err) {
      console.error("Erro ao enviar dados:", err);
      setError(
        "Não foi possível enviar o formulário. Por favor, tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit,
    resetForm
  };
};
