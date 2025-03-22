import React from "react";
import aboutUsImage from "../utils/images/aboutUs.jpg";

interface MetricProps {
  value: string;
  label: string;
}

const Metric: React.FC<MetricProps> = ({ value, label }) => {
  return (
    <div className="text-center px-4 py-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg reveal">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {value}
      </div>
      <div className="text-gray-300 font-medium">{label}</div>
    </div>
  );
};

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-jrv-navy text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-white"
          style={{
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            maskSize: "24px",
            maskRepeat: "repeat"
          }}
        ></div>
      </div>

      <div className="container-section relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="lg:w-1/2 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Fornecendo soluções completas de cobertura
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Com vasta experiência no setor, nossa equipe altamente qualificada
              oferece serviços de montagem e manutenção de telhados industriais
              com precisão e qualidade. Garantimos a satisfação dos clientes e a
              durabilidade dos projetos.
            </p>
            <p className="text-gray-300 mb-8">
              Na JRVSTEEL, acreditamos que a qualidade não é apenas um objetivo,
              mas um padrão. Cada projeto é executado com materiais premium e
              técnicas avançadas, garantindo soluções duradouras que atendem às
              expectativas mais exigentes do mercado.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-block bg-jrv-red hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-md 
                      transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
            >
              Conheça Nosso Trabalho
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 relative reveal">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={aboutUsImage}
                alt="Equipe JRVSTEEL trabalhando em estrutura metálica"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-jrv-navy bg-opacity-20"></div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-6 grid grid-cols-2 gap-4">
              <Metric value="7+" label="Anos de Experiência" />
              <Metric value="300K+" label="M² Construídos" />
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Metric value="7+" label="Anos de Experiência" />
          <Metric value="300K+" label="M² Construídos" />
          <Metric value="100%" label="Equipe Qualificada" />
          <Metric value="5★" label="Serviços Certificados" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
