
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

        {/* Testimonial Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12 reveal">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-jrv-navy rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                    alt="Cliente Satisfeito" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-jrv-red text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  5★
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-12">
              <svg className="w-12 h-12 text-jrv-navy opacity-20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <blockquote className="text-lg md:text-xl text-jrv-navy italic mb-6">
                "A equipe da JRVSTEEL superou todas as nossas expectativas. O projeto foi entregue no prazo, com acabamento impecável e atenção aos detalhes que fizeram toda a diferença para nossa indústria."
              </blockquote>
              
              <div>
                <h4 className="font-bold text-jrv-navy">Carlos Mendes</h4>
                <p className="text-jrv-gray">Diretor Industrial - Metalúrgica MTX</p>
              </div>
            </div>
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
          <a
            href="#quote"
            className="cta-button inline-block text-lg px-10 py-4 animate-pulse-slow"
          >
            SOLICITAR ORÇAMENTO AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
