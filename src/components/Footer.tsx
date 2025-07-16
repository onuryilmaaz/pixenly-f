import { Instagram, Linkedin, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/30 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-4">Pixenly</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Kocaeli'nin önde gelen web tasarım stüdyosu. Markanızı dijital dünyada 
              zirveye taşıyan yaratıcı ve modern çözümler üretiyoruz.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 glow-primary"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 glow-primary"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">Kocaeli, Türkiye</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">+90 555 555 55 55</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-foreground mb-6">Hızlı Linkler</h4>
            <div className="space-y-3">
              {['Anasayfa', 'Hizmetler', 'Portföy', 'Hakkımızda', 'İletişim'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Pixenly – Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;