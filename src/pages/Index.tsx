import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Why from '../components/Why';
import LogoSection from '../components/LogoSection';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Why />
        <LogoSection />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
