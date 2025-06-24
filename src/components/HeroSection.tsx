import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Text Content */}
        <div className="space-y-8 animate-slide-in-left">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg text-gray-400 font-medium">Hello,</h2>
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                I'm <span className="text-orange-500">Hitesh Ksheersagar</span>
              </h1>
              <h3 className="text-2xl lg:text-3xl text-gray-300 font-medium mt-4">
                <span className="inline-block animate-typing">Backend Developer</span> and<br />
                <span className="text-orange-400">Cybersecurity Enthusiast</span>
              </h3>
            </div>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25 border-2 border-transparent hover:border-orange-400/50"
              onClick={() => window.location.href = 'mailto:hiteshksheersagar@gmail.com'}
            >
              Hire Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gradient-to-r from-orange-500 to-red-500 text-gray-300 hover:bg-gradient-to-r hover:from-orange-600/20 hover:to-red-600/20 hover:border-orange-400 px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-gray-800/20 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20"
              onClick={() => window.open('https://drive.google.com/file/d/1kXDZV-9CneQkzrWXQB9G5UeCCU6pP92L/view?usp=drive_link', '_blank')}
            >
              My Resume
            </Button>
          </div>

          {/* Enhanced Social Media Icons */}
          <div className="flex space-x-4 pt-6">
            {[
              { icon: Github, href: 'https://github.com/hitksh18', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/hitesh-ksheersagar-b045a9256/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:hiteshksheersagar@gmail.com', label: 'Email' },
              { icon: Phone, href: 'tel:+91 8008009027', label: 'Phone' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-600 text-gray-400 hover:text-orange-400 hover:border-orange-500 transition-all duration-300 flex items-center justify-center hover:scale-110 backdrop-blur-sm bg-gray-800/20 hover:shadow-lg hover:shadow-orange-500/20 glow-on-hover"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Enhanced Profile Image */}
<div className="flex justify-center lg:justify-end animate-slide-in-right">
  <div className="relative w-80 h-80 lg:w-[26rem] lg:h-[26rem]">
    {/* Animated Blob Background */}
    <div className="absolute inset-0 rounded-full">
      <div className="absolute w-full h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div
        className="absolute w-full h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-15 blur-2xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
    </div>

    {/* Profile Image with Glow and Padding Fix */}
    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500/30 p-2 backdrop-blur-sm bg-gray-800/10 hover:scale-105 transition-transform duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full"></div>
      <img
        src="/Images/Hitesh1.jpg"
        alt="Hitesh Profile"
        className="w-full h-full object-contain rounded-full relative z-10"
      />
      <div className="absolute inset-0 rounded-full border-2 border-orange-500/50 shadow-[0_0_50px_rgba(249,115,22,0.3)] hover:shadow-[0_0_80px_rgba(249,115,22,0.5)] transition-shadow duration-500"></div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
