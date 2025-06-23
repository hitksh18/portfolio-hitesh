import { Award, BarChart3, Brain, Shield } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Google Foundations of Cybersecurity",
      provider: "Coursera",
      icon: Shield,
      link: "https://drive.google.com/file/d/1OzK45c671YWS_0tBgqe07alnTL6CeDLZ/view?usp=drive_link"
    },
    {
      title: "Data Analytics",
      provider: "Infosys Springboard",
      icon: BarChart3,
      link: "https://drive.google.com/file/d/1COrlHkI5lwoZuQ6RbQNrTFEIV-_0EZJf/view?usp=drive_link"
    },
    {
      title: "ML & Data Analytics",
      provider: "DevElet",
      icon: Brain,
      link: "https://drive.google.com/file/d/13urDzgGOyuFdqNoLKUOp0DvmQzsUMKEl/view?usp=drive_link"
    },
    {
      title: "Cybersecurity Training",
      provider: "TEACHNOOK",
      icon: Shield,
      link: "https://drive.google.com/file/d/1PHn1KvJ7LTVLvAKpfShUIPs8NZygcP3e/view?usp=drive_link"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-orange-500 relative">
              Certifications
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 glow-on-hover animate-fade-in block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                  <cert.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                  <p className="text-orange-400 font-medium">{cert.provider}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
