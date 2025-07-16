import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Dumanlar İnşaat",
      url: "https://dumanlarinsaatyapi.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dumanlar Şap",
      url: "https://dumanlarsap.com",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Yuvam Yapı İnşaat",
      url: "https://www.yuvamyapiinsaat.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Zekioğulları İnşaat",
      url: "https://zekiogullariinsaat.com",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent/30 via-accent to-accent/30"></div>
          
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10 shadow-lg shadow-accent/50"></div>
              
              {/* Project Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 card-hover">
                    {/* Project Image */}
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-accent">
                        <span className="mr-2 text-sm">Siteyi Ziyaret Et</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-all duration-300"></div>
                  </div>
                </a>
              </div>
              
              {/* Empty space for alternating layout */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="block md:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-8 w-0.5 h-full bg-gradient-to-b from-accent/30 via-accent to-accent/30"></div>
          
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="reveal relative mb-12 pl-16"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background z-10 shadow-lg shadow-accent/50"></div>
              
              {/* Project Card */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 card-hover">
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-accent">
                      <span className="mr-2 text-sm">Siteyi Ziyaret Et</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-all duration-300"></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;