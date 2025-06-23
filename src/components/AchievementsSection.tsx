import { useState, useEffect } from 'react';
import { Award, Shield, Cloud, Brain, X, ChevronLeft, ChevronRight, Cpu, Gamepad2, Trophy, Users, Clock, Lightbulb } from 'lucide-react';

const AchievementsSection = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const achievements = [
    {
      title: "Multiple Hackathon Wins",
      icon: Trophy,
      detailedDescription: "Won 2 major hackathons for WebLock — a cybersecurity and access management platform focused on real-time authorization and encryption. Delivered production-grade solutions under pressure, showcasing problem-solving, full-stack development, and leadership across competitive environments. The WebLock idea and prototype were also officially recognized on the Yukti Innovation Portal by the Ministry of Education, Government of India.",
      images: [
        "https://media.licdn.com/dms/image/v2/D5622AQEbF84x1K9vOA/feedshare-shrink_1280/B56ZWdytxtHEAk-/0/1742109074715?e=1753315200&v=beta&t=m2qvA6eyl-W6llsoLCxf0pK1ZituD2FG7brt9igNkJk",
        "https://media.licdn.com/dms/image/v2/D5622AQEYfFcipYbUfg/feedshare-shrink_2048_1536/B56ZXmFzOwHoAs-/0/1743322042637?e=1753315200&v=beta&t=m7wCi2ovmBcDatJjCED_GTOgY2vzuZA8Eho-NvOYdeQ",
        "https://media.licdn.com/dms/image/v2/D5622AQHoVaGqQGD94A/feedshare-shrink_2048_1536/B56ZWAZHbJHQAo-/0/1741615827544?e=1753315200&v=beta&t=UhddDoLI3r_BKf0Hze4THMcjHA0QzzYXjgqAxcWvwHM",
      ],
      highlights: [
        "1st Place – MGIT-HackSavvy25 Hyderabad 2025 (Digital Forensics Cyber Threat Intelligence System)",
        "2nd Place - CyberSec Challenge 2023 (Smart AI based Intrusion Detection System)", 
        "Developed 3 production-ready applications in 48 hours",
        "Led cross-functional teams of 4 developers (Team Sentinels)",
        "Solutions deployed and used and verified by the judges"
      ]
    },
    {
      title: "Cloud Computing Expertise",
      icon: Cloud,
      detailedDescription: "Extensive experience with AWS, Azure, and Google Cloud Platform. Designed and implemented scalable cloud architectures for multiple projects, achieving 99.9% uptime and 40% cost reduction. Specialized in serverless computing, containerization, and microservices architecture.",
      highlights: [
        "AWS Solutions Architect Associate Certified",
        "Deployed 15+ production applications on cloud platforms",
        "Optimized cloud costs by 40% through efficient resource management",
        "Achieved 99.9% uptime across all deployed services",
        "Implemented CI/CD pipelines reducing deployment time by 80%",
        "Managed infrastructure serving 100,000+ daily active users"
      ]
    },
    {
      title: "E-Sports Victory",
      icon: Gamepad2,
      detailedDescription: "Achieved first place in a competitive esports tournament for 'The Finals' game, demonstrating exceptional adaptability and team coordination. Despite registering spontaneously without prior experience with the specific game, successfully learned mechanics on-the-fly and coordinated with teammates to secure victory through strategic gameplay and real-time decision-making.",
      images: [
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ],
      highlights: [
        "1st Place – Gamers Guild Esports Tournament (Game: The Finals)",
        "Registered spontaneously and learned the game mechanics on the fly",
        "Collaborated with team members for strategic plays and clutch wins",
        "Demonstrated adaptability, leadership, and real-time decision-making"
      ]
    },
    {
      title: "AI Integration Excellence",
      icon: Brain,
      detailedDescription: "Successfully integrated machine learning models and AI services into production applications. Worked with TensorFlow, PyTorch, and various AI APIs to create intelligent systems. Developed AI-powered features that improved user engagement by 60% and automated complex business processes.",
      highlights: [
        "Integrated 10+ AI models into production systems",
        "Developed intelligent chatbots and recommendation engines",
        "Optimized ML model performance for real-time applications",
        "Improved user engagement by 60% through AI features",
        "Automated 80% of manual data processing tasks",
        "Achieved 95% accuracy in predictive analytics models"
      ]
    },
    {
      title: "Computer Architecture Expertise",
      icon: Cpu,
      detailedDescription: "Comprehensive knowledge of computer architecture including CPU design, memory hierarchies, instruction set architectures, and parallel processing. Applied this expertise to optimize software performance, design efficient algorithms, and understand low-level system interactions for better application development.",
      highlights: [
        "Mastered CPU architecture and instruction pipelines",
        "Expert in memory hierarchy and cache optimization",
        "Optimized applications for multi-core processors",
        "Implemented parallel processing algorithms",
        "Achieved 40% performance improvements through architecture awareness",
        "Applied computer architecture principles in system design"
      ]
    }
  ];

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
    setCurrentImageIndex(0);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedAchievement(null);
    setCurrentImageIndex(0);
    // Restore background scrolling
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedAchievement?.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedAchievement.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAchievement?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAchievement.images.length - 1 : prev - 1
      );
    }
  };

  // Close modal on Esc key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedAchievement) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedAchievement]);

  return (
    <section id="achievements" className="py-20 px-6 bg-gray-900/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-28 h-28 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-36 h-36 bg-red-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-orange-500 relative">
              Achievements
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* 3-2 Layout: 3 cards on top row, 2 cards on second row centered */}
        <div className="space-y-8">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {achievements.slice(0, 3).map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300 glow-on-hover animate-fade-in cursor-pointer transform hover:scale-105 group w-full max-w-sm h-64 flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openModal(achievement)}
              >
                <div className="text-center space-y-4 flex-1 flex flex-col justify-center">
                  <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {achievement.description}
                  </p>
                </div>
                <div className="text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center mt-4">
                  Click to learn more
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {achievements.slice(3, 5).map((achievement, index) => (
                <div
                  key={index + 3}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all duration-300 glow-on-hover animate-fade-in cursor-pointer transform hover:scale-105 group w-full max-w-sm h-64 flex flex-col justify-between"
                  style={{ animationDelay: `${(index + 3) * 0.2}s` }}
                  onClick={() => openModal(achievement)}
                >
                  <div className="text-center space-y-4 flex-1 flex flex-col justify-center">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </div>
                  <div className="text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center mt-4">
                    Click to learn more
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Modal */}
        {selectedAchievement && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeModal}
          >
            <div 
              className="bg-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 transform animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                      <selectedAchievement.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedAchievement.title}
                    </h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Image Carousel */}
                {selectedAchievement.images && (
                  <div className="mb-6">
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={selectedAchievement.images[currentImageIndex]}
                        alt={`${selectedAchievement.title} ${currentImageIndex + 1}`}
                        className="w-full h-64 object-cover transition-opacity duration-500"
                        style={{ objectFit: 'cover' }}
                      />
                      {selectedAchievement.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {selectedAchievement.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                  idx === currentImageIndex ? 'bg-orange-500 scale-125' : 'bg-white/50 hover:bg-white/70'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {selectedAchievement.detailedDescription}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-4">Key Highlights:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedAchievement.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-gray-300 flex items-start space-x-2 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
                        <span className="text-orange-500 mt-1 text-lg">•</span>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AchievementsSection;