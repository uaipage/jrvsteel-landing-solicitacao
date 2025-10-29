import { useState } from "react";

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
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Número do WhatsApp de destino no formato internacional (Brasil: 55)
      const businessPhoneE164 = "5511937297423"; // (11) 93729-7423

      // Montar a mensagem com os dados do formulário
      const lines = [
        "Olá, gostaria de solicitar um orçamento.",
        `Nome: ${formData.name}`,
        `E-mail: ${formData.email}`,
        `WhatsApp: ${formData.whatsapp}`,
        formData.message ? `Mensagem: ${formData.message}` : undefined
      ].filter(Boolean) as string[];

      const text = encodeURIComponent(lines.join("\n"));
      const waUrl = `https://wa.me/${businessPhoneE164}?text=${text}`;

      // Abrir o WhatsApp com a mensagem pré-preenchida
      window.open(waUrl, "_blank");

      // Opcional: resetar o formulário imediatamente
      resetForm();
    } catch (err) {
      console.error("Erro ao abrir WhatsApp:", err);
      setError("Não foi possível abrir o WhatsApp. Tente novamente.");
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
