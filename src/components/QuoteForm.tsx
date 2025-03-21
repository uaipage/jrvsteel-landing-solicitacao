import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface QuoteFormProps {
  compact?: boolean;
}

const QuoteForm = ({ compact = false }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  // Conditional classes based on compact mode
  const containerClasses = compact 
    ? "bg-jrv-navy/90 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden shadow-xl" 
    : "max-w-5xl mx-auto bg-jrv-navy rounded-2xl overflow-hidden shadow-xl";
  
  const paddingClasses = compact ? "p-6" : "p-8 md:p-12";
  
  const titleClasses = compact 
    ? "text-2xl font-bold text-white mb-3" 
    : "text-3xl md:text-4xl font-bold text-white mb-4";
  
  const subtitleClasses = compact 
    ? "text-gray-300 text-sm mb-5" 
    : "text-gray-300 mb-8";

  const inputClasses = compact
    ? "w-full px-3 py-2 rounded-md bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jrv-red text-sm"
    : "w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jrv-red";
  
  const buttonClasses = compact
    ? "w-full bg-jrv-red hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-lg uppercase tracking-wide text-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
    : "w-full bg-jrv-red hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-lg uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none";

  // Use smaller gap between form elements in compact mode
  const formGapClass = compact ? "space-y-4" : "space-y-6";

  // We'll only render the standalone section if not in compact mode
  if (!compact) {
    return (
      <section id="quote" className="bg-white relative py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className={containerClasses}>
            <div className="flex flex-col lg:flex-row">
              {/* Form Content */}
              <div className="lg:w-7/12 p-8 md:p-12 reveal">
                <h2 className={titleClasses}>
                  Solicite um Orçamento Agora!
                </h2>
                <p className={subtitleClasses}>
                  Preencha o formulário e nossa equipe entrará em contato com você rapidamente.
                </p>
                
                {isSubmitted ? (
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center">
                    <CheckCircle className="mx-auto mb-4 text-green-400" size={48} />
                    <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
                    <p className="text-gray-300">
                      Obrigado pelo seu contato. Nossa equipe entrará em contato em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">
                        Nome Completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jrv-red"
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jrv-red"
                        placeholder="Digite seu e-mail"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="whatsapp" className="block text-gray-300 mb-2">
                        WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jrv-red"
                        placeholder="Digite seu número com DDD"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jrv-red resize-none"
                        placeholder="Descreva seu projeto ou necessidade"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-jrv-red hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md 
                              transition-all duration-300 transform hover:scale-[1.02] shadow-lg uppercase tracking-wide
                              disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        "SOLICITAR ORÇAMENTO"
                      )}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Image Side */}
              <div className="hidden lg:block lg:w-5/12 bg-jrv-navy relative overflow-hidden">
                <div 
                  className="h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" 
                  }}
                >
                  <div className="absolute inset-0 bg-jrv-navy bg-opacity-40"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-jrv-navy to-transparent">
                  <blockquote className="italic text-white text-lg">
                    "Transformamos aço em soluções duradouras para seu negócio."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Compact version (for hero section)
  return (
    <div className={containerClasses}>
      <div className={paddingClasses + " reveal"}>
        <h2 className={titleClasses}>
          Solicite um Orçamento Agora!
        </h2>
        <p className={subtitleClasses}>
          Preencha o formulário e nossa equipe entrará em contato rapidamente.
        </p>
        
        {isSubmitted ? (
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <CheckCircle className="mx-auto mb-3 text-green-400" size={36} />
            <h3 className="text-xl font-bold text-white mb-2">Solicitação Enviada!</h3>
            <p className="text-gray-300 text-sm">
              Obrigado pelo seu contato. Nossa equipe entrará em contato em breve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={formGapClass}>
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1 text-sm">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Digite seu nome completo"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1 text-sm">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            
            <div>
              <label htmlFor="whatsapp" className="block text-gray-300 mb-1 text-sm">
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Digite seu número com DDD"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1 text-sm">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className={inputClasses + " resize-none"}
                placeholder="Descreva seu projeto ou necessidade"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={buttonClasses}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                "SOLICITAR ORÇAMENTO"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteForm;
