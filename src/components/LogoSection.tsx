import { Palette, Lightbulb, Star } from 'lucide-react';

const LogoSection = () => {
  return (
    <section className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape w-48 h-48 top-24 left-12 floating"></div>
        <div className="bg-shape w-64 h-64 bottom-16 -right-20 floating-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="reveal-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="gradient-text">Logo Tasarımı</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Logonuz markanızın imzasıdır. Akılda kalıcı, profesyonel bir logo ile 
              markanızı güçlendirin ve fark yaratın. Her detayı özenle tasarlanan 
              logolarımızla markanızın hikayesini anlatın.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center glow-primary">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Özgün Tasarım</h4>
                  <p className="text-muted-foreground">Her marka için özel tasarım</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center glow-primary">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Yaratıcı Konsept</h4>
                  <p className="text-muted-foreground">Markanızın ruhunu yansıtan tasarımlar</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center glow-primary">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Profesyonel Kalite</h4>
                  <p className="text-muted-foreground">Tüm platformlarda mükemmel görünüm</p>
                </div>
              </div>
            </div>

            <button className="btn-secondary mt-8">
              Logo Portfolyösünü İncele
            </button>
          </div>

          {/* Right Visual */}
          <div className="reveal-right">
            <div className="relative">
              {/* Main Card */}
              <div className="glass p-12 rounded-3xl card-hover">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-8 glow-primary">
                    <span className="text-4xl font-bold text-white gradient-text">P</span>
                  </div>
                  <h3 className="text-2xl font-bold gradient-text mb-4">Pixenly</h3>
                  <p className="text-muted-foreground">Yaratıcı Web Tasarım Stüdyosu</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center floating glow-accent">
                <Palette className="w-12 h-12 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center floating-delayed glow-primary">
                <Star className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;