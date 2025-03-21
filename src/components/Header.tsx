
import { useEffect, useState } from 'react';
import { MenuIcon, X } from 'lucide-react';
import QuoteForm from './QuoteForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-jrv-navy overflow-hidden h-screen">
        <div 
          className="w-full h-full bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=3857&q=80')" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jrv-navy/60 via-jrv-navy/80 to-jrv-navy" />
      </div>

      {/* Navigation */}
      <nav
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 py-4 flex items-center justify-between">
          <a href="#hero" className="relative z-10 flex items-center">
            <div className="text-white font-heading font-bold text-xl sm:text-2xl md:text-3xl tracking-tight">
              <span className="text-white">JRV</span>
              <span className="text-jrv-red">STEEL</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`navbar-link ${activeSection === 'services' ? 'active' : ''}`}>Serviços</a>
            <a href="#about" className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}>Sobre Nós</a>
            <a href="#benefits" className={`navbar-link ${activeSection === 'benefits' ? 'active' : ''}`}>Benefícios</a>
            <a href="#contact" className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}>Contato</a>
            <a 
              href="#quote" 
              className="bg-jrv-red hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded-md 
                      transition-all duration-300 transform hover:scale-[1.02] shadow-md"
            >
              Orçamento
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-10 md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-jrv-navy z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-xl">
            <a 
              href="#services" 
              className="hover:text-jrv-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#about" 
              className="hover:text-jrv-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a 
              href="#benefits" 
              className="hover:text-jrv-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#contact" 
              className="hover:text-jrv-red transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <a 
              href="#quote" 
              className="bg-jrv-red hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md 
                        transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Orçamento
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10">
          {/* Hero Text */}
          <div className="md:w-1/2 text-center md:text-left reveal">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Soluções completas em estruturas metálicas e coberturas industriais!
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Montagem de telhados e estruturas metálicas com segurança, qualidade e eficiência.
            </p>
            <div className="hidden md:flex flex-col sm:flex-row justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a
                href="#services"
                className="bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 text-white font-bold py-3 px-8 rounded-md 
                transition-all duration-300 transform hover:scale-[1.02] shadow-lg uppercase tracking-wide"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
          
          {/* Quote Form */}
          <div className="w-full md:w-5/12 reveal">
            <QuoteForm compact={true} />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
