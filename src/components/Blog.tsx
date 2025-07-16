import { Calendar, ArrowRight, Eye } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Kocaeli'nde Web Tasarım Trendleri 2025",
      excerpt: "2025 yılında web tasarım dünyasında öne çıkan trendler ve Kocaeli'deki işletmelerin bu trendleri nasıl kullanabileceği...",
      date: "15 Mart 2025",
      readTime: "5 dk",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SEO ile Yerel İşletmenizi Büyütün",
      excerpt: "Yerel SEO stratejileri ile Kocaeli'deki müşterilerinize daha kolay ulaşın ve online görünürlüğünüzü artırın...",
      date: "12 Mart 2025",
      readTime: "7 dk",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Web Tasarımda Renklerin Gücü",
      excerpt: "Renkler markanızın kimliğini oluşturur ve müşterilerinizin kararlarını etkiler. Doğru renk paletini nasıl seçeceğinizi öğrenin...",
      date: "8 Mart 2025",
      readTime: "4 dk",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="blog" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape w-60 h-60 top-32 -left-16 floating"></div>
        <div className="bg-shape w-44 h-44 bottom-24 right-20 floating-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Web tasarım dünyasından güncel yazılar, ipuçları ve trendler
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="reveal glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Featured Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center text-accent font-medium group-hover:text-primary transition-colors duration-300">
                  <span className="mr-2">Devamını Oku</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-2xl transition-all duration-300"></div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 reveal" style={{ animationDelay: '0.6s' }}>
          <button className="btn-secondary">
            Tüm Yazıları Görüntüle
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;