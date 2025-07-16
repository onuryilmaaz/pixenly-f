import { Sparkles, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Mutlu Müşteri" },
    { icon: Award, number: "100+", label: "Tamamlanan Proje" },
    { icon: Coffee, number: "1000+", label: "Kahve Molası" },
    { icon: Sparkles, number: "5+", label: "Yıllık Deneyim" }
  ];

  return (
    <section id="about" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape w-56 h-56 top-16 right-20 floating"></div>
        <div className="bg-shape w-72 h-72 bottom-32 -left-24 floating-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="reveal-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">Hakkımızda</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-accent font-semibold">Pixenly</span>, Kocaeli merkezli bir web tasarım stüdyosudur. 
                Hayal gücünüzü dijital dünyada gerçeğe dönüştüren, yenilikçi ve estetik çözümler üretiyoruz.
              </p>
              
              <p>
                Modern teknolojiler ve yaratıcı yaklaşımlarımızla, markanızın dijital varlığını en üst seviyeye taşıyoruz. 
                Her projeye özgün bir bakış açısıyla yaklaşır, müşterilerimizin hedeflerine ulaşması için çalışırız.
              </p>
              
              <p>
                Amacımız, sadece web sitesi yapmak değil, markanızın dijital kimliğini oluşturmak ve 
                rekabette öne çıkmanızı sağlamaktır.
              </p>
            </div>

            <button className="btn-secondary mt-8">
              Daha Fazla Bilgi
            </button>
          </div>

          {/* Right Stats */}
          <div className="reveal-right">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center glass p-8 rounded-2xl card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 glow-primary">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;