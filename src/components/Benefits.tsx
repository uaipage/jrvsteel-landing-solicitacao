
import React from 'react';
import { Check } from 'lucide-react';

interface BenefitProps {
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitProps> = ({ title, description }) => {
  return (
    <div className="benefit-item reveal">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-jrv-red bg-opacity-10 flex items-center justify-center">
          <Check size={20} className="text-jrv-red" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-jrv-navy">{title}</h3>
        <p className="text-jrv-gray">{description}</p>
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Altamente Reputável",
      description: "Somos reconhecidos no mercado pela excelência e compromisso com cada projeto executado."
    },
    {
      title: "Serviços de Qualidade",
      description: "Utilizamos materiais de alto padrão e garantimos uma execução precisa em todos os detalhes."
    },
    {
      title: "Serviços Certificados",
      description: "Possuímos todas as certificações necessárias, garantindo segurança e conformidade em cada etapa."
    },
    {
      title: "Atendimento Personalizado",
      description: "Desenvolvemos soluções adaptadas às necessidades específicas de cada cliente e projeto."
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="benefits" className="bg-white py-20 md:py-28">
      <div className="container-section">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Por que escolher a JRVSTEEL?</h2>
          <p className="section-subtitle">
            Comprometidos com a excelência e a satisfação total dos nossos clientes em cada projeto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-jrv-navy mb-6">
            Pronto para construir com qualidade?
          </h2>
          <p className="text-xl text-jrv-gray mb-8 max-w-2xl mx-auto">
            Entre em contato agora e receba um orçamento sem compromisso!
          </p>
          <button
            onClick={scrollToTop}
            className="cta-button inline-block text-lg px-10 py-4 animate-pulse-slow"
          >
            SOLICITAR ORÇAMENTO AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
