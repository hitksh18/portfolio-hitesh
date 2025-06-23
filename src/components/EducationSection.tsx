
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech – Computer Science",
      institution: "Malla Reddy University, Hyderabad",
      duration: "2022–2026",
      cgpa: "9.6 CGPA",
      
    },
    {
      degree: "Intermediate – MPC",
      institution: "Trividyaa Junior College, Hyderabad", 
      duration: "2021–2022",
      cgpa: "8 CGPA"
      
    },
    {
      degree: "Schooling – CBSE",
      institution: "Foster Billabong High International School, Hyderabad", 
      duration: "2020",
      cgpa: "8.2 CGPA"
      
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-900/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-orange-500 relative">
              Education
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 animate-fade-in hover:shadow-xl hover:shadow-orange-500/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                    <GraduationCap className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-300 mb-2">{edu.institution}</p>
                    <p className="text-orange-400 font-medium">{edu.grade}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
