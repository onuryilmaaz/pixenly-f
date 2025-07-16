import { Globe, Palette, Smartphone, Server, Shield, Mail } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Sitesi Tasarımı",
      description: "Modern, mobil uyumlu, özgün tasarımlar."
    },
    {
      icon: Palette,
      title: "Logo Tasarımı",
      description: "Akılda kalıcı profesyonel logo tasarımları."
    },
    {
      icon: Smartphone,
      title: "Mobil Uyumlu Site",
      description: "Tüm cihazlarda kusursuz görünüm."
    },
    {
      icon: Server,
      title: "Domain & Hosting",
      description: "Güçlü barındırma ve alan adı hizmeti."
    },
    {
      icon: Shield,
      title: "Ücretsiz SSL",
      description: "Güvenli ve sertifikalı bağlantı."
    },
    {
      icon: Mail,
      title: "Kurumsal Mail",
      description: "Kurumsal e-posta hesapları oluşturun."
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape w-48 h-48 top-20 right-10 floating"></div>
        <div className="bg-shape w-32 h-32 bottom-40 left-20 floating-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Markanızın dijital varlığını güçlendiren kapsamlı çözümlerimizi keşfedin
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="reveal card-hover glass p-8 rounded-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-primary">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;