import { ExternalLink, Eye, Star, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Dumanlar İnşaat",
      url: "https://dumanlarinsaatyapi.com",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern inşaat firması web sitesi",
      tags: ["React", "Modern Design", "Responsive"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Dumanlar Şap",
      url: "https://dumanlarsap.com",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Şap ve zemin kaplama hizmetleri",
      tags: ["Vue.js", "Animation", "UI/UX"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Yuvam Yapı İnşaat",
      url: "https://www.yuvamyapiinsaat.com",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Kurumsal yapı ve inşaat çözümleri",
      tags: ["Next.js", "Corporate", "SEO"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Zekioğulları İnşaat",
      url: "https://zekiogullariinsaat.com",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Güvenilir inşaat ve tadilat hizmetleri",
      tags: ["WordPress", "Custom", "Mobile First"],
      color: "from-orange-500 to-red-500"
    }
  ];

  // Akan logolar için marka listesi
  const brands = [
    { name: "YouTube", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/youtube/youtube-original.svg" },
    { name: "Instagram", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/instagram/instagram-original.svg" },
    { name: "Uber", logo: "https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" },
    { name: "Spotify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg" },
    { name: "Google", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg" },
    { name: "Amazon", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Netflix", logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" }
  ];

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-3xl floating transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="border border-accent/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 reveal">
          <div className="inline-flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-accent mr-3 animate-pulse" />
            <span className="text-accent font-semibold text-lg tracking-wider uppercase">Portföy</span>
            <Zap className="w-8 h-8 text-accent ml-3 animate-pulse" />
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-pulse">
              Yaratıcı
            </span>
            <br />
            <span className="gradient-text">Projeler</span>
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Dijital dünyada iz bırakan <span className="text-accent font-semibold">eşsiz deneyimler</span>
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`reveal flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative">
                  {/* Main Image Container */}
                  <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${project.color} p-1 group-hover:scale-105 transition-all duration-700`}>
                    <div className="relative overflow-hidden rounded-3xl bg-background">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-[16/10] object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      {/* Floating Action Button */}
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${project.color} rounded-full shadow-2xl hover:scale-110 transition-all duration-300`}
                        >
                          <ExternalLink className="w-6 h-6 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 animation-delay-200"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center`}>
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-semibold`}
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r ${project.color} text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                  >
                    <Eye className="w-6 h-6 transition-transform group-hover:scale-110" />
                    <span>Projeyi İncele</span>
                    <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-32 reveal">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full blur-xl opacity-50"></div>
            <div className="relative bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-sm rounded-full px-12 py-6 border border-accent/20">
              <p className="text-2xl font-light text-muted-foreground mb-2">
                Daha fazla <span className="text-accent font-bold">şaheser</span> için
              </p>
              <p className="text-lg text-accent font-semibold">
                bizimle iletişime geçin
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Akan Logolar Bölümü */}
      <div className="mt-24 py-16 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        
        {/* Üst Akan Logo Şeridi */}
        <div className="relative mb-8">
          <div className="flex animate-scroll-left whitespace-nowrap">
            {/* İlk set */}
            {brands.map((brand, index) => (
              <div key={`top-1-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 hover:bg-white/20 transition-all duration-300 group">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Tekrar eden set (seamless loop için) */}
            {brands.map((brand, index) => (
              <div key={`top-2-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 hover:bg-white/20 transition-all duration-300 group">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alt Akan Logo Şeridi (Ters Yön) */}
        <div className="relative">
          <div className="flex animate-scroll-right whitespace-nowrap">
            {/* İlk set */}
            {brands.map((brand, index) => (
              <div key={`bottom-1-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center p-3 hover:bg-white/15 transition-all duration-300 group">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
            {/* Tekrar eden set */}
            {brands.map((brand, index) => (
              <div key={`bottom-2-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center p-3 hover:bg-white/15 transition-all duration-300 group">
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="w-full h-full object-contain filter brightness-0 invert opacity-40 group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;