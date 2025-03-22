
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Inicializar o cliente Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  message: string;
}

export const useQuoteForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      message: ''
    });
    setIsSubmitted(false);
    setError(null);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Enviar dados para o Supabase
      const { error } = await supabase
        .from('orcamentos')
        .insert([
          { 
            nome: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            mensagem: formData.message,
            data_solicitacao: new Date().toISOString()
          }
        ]);
      
      if (error) throw error;
      
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        resetForm();
      }, 5000);
    } catch (err) {
      console.error('Erro ao enviar dados:', err);
      setError('Não foi possível enviar o formulário. Por favor, tente novamente.');
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
