
import React from 'react';
import { Shield, Construction, Factory, Settings, Check } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="service-card group reveal">
      <div className="p-3 bg-jrv-navy bg-opacity-5 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-jrv-navy group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-jrv-red transition-colors duration-300">{title}</h3>
      <p className="text-jrv-gray">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Construction size={28} className="text-jrv-navy group-hover:text-white transition-colors duration-300" />,
      title: "Fabricação e instalação de Telha Zipada",
      description: "Vedação total e alta durabilidade para sua estrutura, garantindo proteção contra intempéries e resistência ao longo do tempo."
    },
    {
      icon: <Shield size={28} className="text-jrv-navy group-hover:text-white transition-colors duration-300" />,
      title: "Telha Sanduíche Galvalume",
      description: "Solução com isolamento térmico e acústico superior, ideal para ambientes que necessitam de conforto e controle de temperatura."
    },
    {
      icon: <Factory size={28} className="text-jrv-navy group-hover:text-white transition-colors duration-300" />,
      title: "Estruturas Metálicas Sob Medida",
      description: "Projetos personalizados para máxima resistência e segurança, adaptados às necessidades específicas do seu empreendimento."
    },
    {
      icon: <Construction size={28} className="text-jrv-navy group-hover:text-white transition-colors duration-300" />,
      title: "Montagem de telhados Galvalume",
      description: "Solução econômica e resistente para coberturas industriais e comerciais, aliando custo-benefício e durabilidade."
    },
    {
      icon: <Shield size={28} className="text-jrv-navy group-hover:text-white transition-colors duration-300" />,
      title: "Telha metálica com pintura eletrostática",
      description: "Maior proteção contra corrosão e intempéries, prolongando a vida útil da estrutura com acabamento de qualidade superior."
    },
    {
      icon: <Settings size={28} className="text-jrv-navy group-hover:text-white transition-colors duration-300" />,
      title: "Telha forro com Poliuretano Expandido",
      description: "Conforto térmico avançado para seu ambiente, garantindo eficiência energética e bem-estar para colaboradores e clientes."
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20 md:py-28">
      <div className="container-section">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Oferecemos soluções completas em estruturas metálicas e coberturas para indústrias, comércios e residências.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <a
            href="#quote"
            className="cta-button inline-block"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      {/* Additional Features */}
      <div className="container mx-auto px-6 md:px-12 py-12 mt-16">
        <div className="bg-jrv-navy rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 reveal">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Por que escolher nossas estruturas metálicas?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-jrv-red" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">
                      <span className="font-bold">Rapidez na montagem</span> - Redução significativa no tempo de construção
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-jrv-red" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">
                      <span className="font-bold">Alta resistência</span> - Materiais de primeira linha para máxima durabilidade
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-jrv-red" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">
                      <span className="font-bold">Versatilidade</span> - Adaptável a diversos projetos e necessidades
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-jrv-red" />
                  </div>
                  <div className="ml-4">
                    <p className="text-white">
                      <span className="font-bold">Custo-benefício</span> - Economia em manutenção e vida útil prolongada
                    </p>
                  </div>
                </div>
              </div>
              
              <a
                href="#quote"
                className="mt-8 inline-block bg-white text-jrv-navy font-bold py-3 px-8 rounded-md 
                         transition-all duration-300 transform hover:scale-[1.02] hover:bg-jrv-red hover:text-white"
              >
                Fale com um especialista
              </a>
            </div>
            
            <div className="md:w-1/2 relative">
              <div 
                className="h-full min-h-[300px] bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
