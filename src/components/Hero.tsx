import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape w-72 h-72 top-10 -left-20 floating"></div>
        <div className="bg-shape w-96 h-96 top-1/3 -right-32 floating-delayed"></div>
        <div className="bg-shape w-64 h-64 bottom-20 left-1/4 floating"></div>
        <div className="bg-shape w-80 h-80 bottom-10 -right-20 floating-delayed"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-20">
        {/* Main Headline */}
        <div className="reveal">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Kocaeli'de</span>
            <br />
            <span className="text-foreground">Modern ve</span>
            <br />
            <span className="gradient-text">Yaratıcı</span>
            <br />
            <span className="text-foreground">Web Tasarım</span>
          </h1>
        </div>

        {/* Subtext */}
        <div className="reveal" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Markanızı dijital dünyada zirveye taşıyan şık ve fütüristik tasarımlar.
          </p>
        </div>

        {/* CTA Button */}
        <div className="reveal" style={{ animationDelay: '0.4s' }}>
          <button className="btn-primary text-lg">
            Ücretsiz Teklif Al
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="reveal absolute bottom-10 left-1/2 transform -translate-x-1/2" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-2">Aşağı Kaydır</span>
            <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
          </div>
        </div>
      </div>

      {/* Moving Text Line */}
      <div className="absolute bottom-32 left-0 w-full overflow-hidden">
        <div className="moving-text whitespace-nowrap text-6xl font-bold text-primary/20">
          Web Tasarım • UI/UX • Kocaeli • Yaratıcı Stüdyo • Web Tasarım • UI/UX • Kocaeli • Yaratıcı Stüdyo • 
        </div>
      </div>
    </section>
  );
};

export default Hero;