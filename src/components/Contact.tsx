import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız gönderildi!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape w-72 h-72 top-16 right-16 floating"></div>
        <div className="bg-shape w-48 h-48 bottom-32 -left-12 floating-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Bize Ulaşın</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projenizi konuşmak için bize ulaşın. Size en kısa sürede dönüş yapacağız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="reveal-left">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center glow-primary">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Adres</h3>
                  <p className="text-muted-foreground text-lg">Kocaeli, Türkiye</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center glow-primary">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Telefon</h3>
                  <p className="text-muted-foreground text-lg">+90 555 555 55 55</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center glow-primary">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">E-posta</h3>
                  <p className="text-muted-foreground text-lg">info@pixenly.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-12 glass rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.09139303928!2d29.86264!3d40.766667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb5c4f1c9e8b6d%3A0x8d9b6e8f8b5c4f1!2sKocaeli%2C%20Turkey!5e0!3m2!1sen!2str!4v1620000000000!5m2!1sen!2str"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="Adınızı girin"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="E-posta adresinizi girin"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                  placeholder="Mesajınızı yazın"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Gönder</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;