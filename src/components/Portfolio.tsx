import { ExternalLink, MousePointer2 } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Dumanlar İnşaat",
      url: "https://dumanlarinsaatyapi.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern inşaat firması web sitesi"
    },
    {
      title: "Dumanlar Şap",
      url: "https://dumanlarsap.com",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Şap ve zemin kaplama hizmetleri"
    },
    {
      title: "Yuvam Yapı İnşaat",
      url: "https://www.yuvamyapiinsaat.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Kurumsal yapı ve inşaat çözümleri"
    },
    {
      title: "Zekioğulları İnşaat",
      url: "https://zekiogullariinsaat.com",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Güvenilir inşaat ve tadilat hizmetleri"
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="bg-shape w-96 h-96 top-20 -left-24 floating opacity-30"></div>
        <div className="bg-shape w-64 h-64 bottom-32 -right-16 floating-delayed opacity-20"></div>
        <div className="bg-shape w-48 h-48 top-1/2 right-1/4 floating opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Portföy</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Yaratıcılığımızın ve uzmanlığımızın yansıdığı projelerimizi inceleyin
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="reveal group cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative bg-card rounded-3xl overflow-hidden border border-border/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/25 card-hover">
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Hover Icon */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <ExternalLink className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center text-accent font-medium">
                      <MousePointer2 className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="text-lg">Projeyi İncele</span>
                    </div>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl border-2 border-accent/30 animate-pulse"></div>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 reveal">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full border border-accent/20">
            <span className="text-lg text-muted-foreground mr-3">Daha fazla proje için</span>
            <span className="text-accent font-semibold">bizimle iletişime geçin</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;