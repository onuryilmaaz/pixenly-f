import { Target, Clock, TrendingUp, Users } from 'lucide-react';

const Why = () => {
  const reasons = [
    {
      icon: Target,
      title: "Daha geniş kitlelere ulaşın",
      description: "İnternet üzerinden 7/24 müşterilerinize ulaşın ve pazarınızı genişletin."
    },
    {
      icon: Clock,
      title: "7/24 açık dijital vitrin sahibi olun",
      description: "Web siteniz hiç kapanmayan bir mağaza gibi çalışır ve sürekli satış yapar."
    },
    {
      icon: TrendingUp,
      title: "Kurumsal imajınızı güçlendirin",
      description: "Profesyonel web sitenizle markanızın güvenilirliğini artırın."
    },
    {
      icon: Users,
      title: "Satış ve müşteri iletişimini kolaylaştırın",
      description: "Online formlar ve iletişim araçlarıyla müşteri hizmetlerinizi geliştirin."
    }
  ];

  return (
    <section id="why" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape w-80 h-80 top-20 -right-32 floating"></div>
        <div className="bg-shape w-52 h-52 bottom-40 left-16 floating-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Neden Web Siteniz</span>
            <br />
            <span className="text-foreground">Olmalı?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dijital çağda başarılı olmak için web sitenizin olması şart
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="reveal glass p-8 rounded-2xl card-hover group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-primary">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Animated Check Icon */}
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 reveal" style={{ animationDelay: '0.8s' }}>
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-6">
              Hazır mısınız? Dijital dönüşümünüzü başlatalım!
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Web sitenizle markanızı bir üst seviyeye taşıyın
            </p>
            <button className="btn-primary text-lg">
              Hemen Başlayın
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;