import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Ticaret Platformu",
      category: "Web Tasarım",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Kurumsal Web Sitesi",
      category: "UI/UX Tasarım",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mobil Uygulama",
      category: "Mobil Tasarım",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Portfolyo Sitesi",
      category: "Kişisel Marka",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Restoran Web Sitesi",
      category: "Yerel İşletme",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SaaS Platformu",
      category: "Web Uygulaması",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape w-64 h-64 top-32 -left-16 floating-delayed"></div>
        <div className="bg-shape w-40 h-40 bottom-20 right-32 floating"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Portföy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Yaratıcılığımızın ve uzmanlığımızın yansıdığı projelerimizi inceleyin
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="reveal group relative overflow-hidden rounded-2xl bg-card cursor-pointer card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-accent text-sm font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-accent">
                    <span className="mr-2">Projeyi Görüntüle</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;