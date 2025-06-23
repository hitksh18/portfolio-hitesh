import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-red-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In <span className="text-orange-500 relative">
              Touch
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 animate-slide-in-left hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-orange-400" />
                </div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 pl-12 backdrop-blur-sm transition-all duration-300"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 pl-12 backdrop-blur-sm transition-all duration-300"
                />
              </div>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 pointer-events-none">
                  <MessageCircle className="w-5 h-5 text-orange-400" />
                </div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 pl-12 backdrop-blur-sm resize-none transition-all duration-300"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Direct Contact */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Direct Contact</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Mail, href: 'mailto:hiteshksheersagar@gmail.com', label: 'Email' },
                  { icon: Phone, href: 'tel:+918008009027', label: 'Phone' },
                  { icon: Github, href: 'https://github.com/hitksh18', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/hitesh-ksheersagar-b045a9256', label: 'LinkedIn' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-6 border border-gray-600/50 rounded-xl text-gray-400 hover:text-orange-400 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm bg-gray-800/20 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 group"
                  >
                    <Icon size={32} className="mb-2 group-hover:animate-bounce" />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center text-gray-400 backdrop-blur-xl bg-gray-800/20 rounded-2xl p-6 border border-gray-700/30">
              <p className="text-lg">Let's build something amazing together!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;