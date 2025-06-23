import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "WebLock – Intrusion Detection System",
      description: "Weblock is an AI-powered intrusion detection and cyber forensic system that traps intruders in real-time and generates detailed attack reports.",
      tags: ["Python", "FastAPI", "MongoDB", "Cybersecurity"],
      github: "https://github.com/hitksh18/weblock-p"
    },
    {
      title: "ASTRA – AI Virtual Assistant",
      description: "Offline voice-based Windows assistant using Python, Ollama, and GUI control.",
      tags: ["Python", "LLM", "Ollama", "Voice Assistant"],
      github: "https://github.com/hitksh18/ASTRA-AI-System-for-Ticket-Routing-Assistance"
    },
    {
      title: "SSH-Session-Tracker-Monitor",
      description: "A real-time SSH monitoring tool that tracks active sessions, failed login attempts, and logs intrusion activity with a web-based dashboard.",
      tags: ["Python", "Flask", "psutil", "Cybersecurity","WSL"],
      github: "https://github.com/hitksh18/SSH-Session-Tracker-Monitor.git"
    },
    {
      title: "Schvia – College Admin Portal",
      description: "Full-stack platform for faculty, admin & students with real-time data access.",
      tags: ["React Native", "Node.js", "PostgreSQL", "Admin Panel"],
      github: "https://github.com/schvia-dev/Schvia-main"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="text-orange-500 relative">
              Projects
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/50 overflow-hidden hover:border-orange-500/50 transition-all duration-500 animate-fade-in hover:shadow-2xl hover:shadow-orange-500/10 h-80 flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Default State - Only Title */}
              <div className="absolute inset-0 flex items-center justify-center p-8 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white text-center">
                  {project.title}
                </h3>
              </div>

              {/* Hover State - Full Content with Smooth Animations */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gray-900/95 backdrop-blur-md p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {project.description}
                  </p>

                  {/* Animated Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm border border-orange-500/30"
                        style={{ transitionDelay: `${150 + tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link with External Link Icon */}
                <div className="pt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-300">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white w-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} className="mr-2" />
                    <ExternalLink size={14} className="ml-1" />
                    View on GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;