
import { useQuoteForm } from '../hooks/useQuoteForm';
import QuoteFormSuccess from './QuoteFormSuccess';

const QuoteFormCompact = () => {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit
  } = useQuoteForm();

  // Classes específicas para o modo compacto
  const containerClasses = "bg-jrv-navy/90 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden shadow-xl";
  const paddingClasses = "p-6";
  const titleClasses = "text-2xl font-bold text-white mb-3";
  const subtitleClasses = "text-gray-300 text-sm mb-5";
  const inputClasses = "w-full px-3 py-2 rounded-md bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jrv-red text-sm";
  const buttonClasses = "w-full bg-jrv-red hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-lg uppercase tracking-wide text-sm disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none";
  const formGapClass = "space-y-4";

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
          <QuoteFormSuccess compact={true} />
        ) : (
          <form onSubmit={handleSubmit} className={formGapClass}>
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-white p-3 rounded-md text-sm">
                {error}
              </div>
            )}
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

export default QuoteFormCompact;
