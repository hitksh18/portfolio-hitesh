import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    
    {
      title: "Data Science Intern",
      company: "DevElet Technologies LLPs",
      location: "Remote (Work From Home)",
      duration: "March 16 – April 16, 2025",
      description: "Completed a 1-month Data Science internship as part of DevElet’s Career Development Program. Worked on real-world datasets to apply core data analysis, statistical modeling, and machine learning techniques. Gained hands-on experience in end-to-end data workflows including data cleaning, visualization, model training, and evaluation.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook","Google Colab"]
    },
    {
      title: "Point Of Contact",
      company: "Nodwin Gaming",
      location: "HITEX Exhibition Centre, Hyderabad",
      duration: "Nov 15–17, 2024",
      description: "Served as the official Point of Contact (PoC) for the BYOD (Bring Your Own Device) section at DreamHack Hyderabad 2024, India’s largest digital gaming festival. Managed attendee onboarding, system setup coordination, and real-time technical support. Liaised between participants, technical teams, and event organizers to ensure 24x3 uptime, LAN stability, and a seamless gaming experience for 300+ attendees.",
      technologies: ["LAN Networking", "System Troubleshooting", "Event Coordination", "Windows/Linux", "Discord", "Game Launchers"]
    },
    {
      title: "Cybersecurity Intern",
      company: "Teachnook",
      location: "Remote (Work From Home)",
      duration: "March 2 - June 15, 2023",
      description: "Completed a 3-month internship and training program in Cybersecurity, focusing on foundational concepts, tools, and threat analysis techniques. Gained practical knowledge in areas such as ethical hacking, network security, cryptography, and cyber risk management. Worked on simulations and case studies to understand how to detect, prevent, and respond to cyber threats.",
      technologies: ["Wireshark", "Kali Linux", "Nmap", "Burp Suite", "Metasploit", "OWASP Top 10"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-orange-500 relative">
              Experience
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 animate-fade-in hover:shadow-xl hover:shadow-orange-500/10 transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                    <Briefcase className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-orange-400 font-semibold mb-1">{exp.company}</p>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium backdrop-blur-sm border border-orange-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;