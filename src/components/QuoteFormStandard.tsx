
import { useQuoteForm } from '../hooks/useQuoteForm';
import QuoteFormSuccess from './QuoteFormSuccess';

const QuoteFormStandard = () => {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    handleSubmit
  } = useQuoteForm();

  return (
    <section id="quote" className="bg-white relative py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto bg-jrv-navy rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Form Content */}
            <div className="lg:w-7/12 p-8 md:p-12 reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Solicite um Orçamento Agora!
              </h2>
              <p className="text-gray-300 mb-8">
                Preencha o formulário e nossa equipe entrará em contato com você rapidamente.
              </p>
              
              {isSubmitted ? (
                <QuoteFormSuccess compact={false} />
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/20 border border-red-500 text-white p-3 rounded-md">
                      {error}
                    </div>
                  )}
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
};

export default QuoteFormStandard;
