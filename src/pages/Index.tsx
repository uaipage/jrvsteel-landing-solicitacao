
import { useEffect } from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';
import { setupRevealAnimations, setupSmoothScrolling, setupNavbarScroll } from '../utils/animations';

const Index = () => {
  useEffect(() => {
    // Initialize animations and scroll effects
    setupRevealAnimations();
    setupSmoothScrolling();
    setupNavbarScroll();
    
    // Apply initial animation classes
    const revealElements = document.querySelectorAll('.reveal');
    setTimeout(() => {
      revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('active');
        }
      });
    }, 200);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        <Services />
        <AboutUs />
        <Benefits />
      </main>
      <Footer />
      
      {/* Back to Top Button */}
      <a
        href="#hero"
        className="fixed right-6 bottom-6 z-50 bg-jrv-red text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </a>
    </div>
  );
};

export default Index;
