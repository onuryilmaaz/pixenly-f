import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/905555555555"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Sayfa başına dön"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default FloatingButtons;