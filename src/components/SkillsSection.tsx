import React, { useState, useEffect } from 'react';
import { Shield, Brain, Users, Wrench, MessageCircle, Clock, Handshake, ShieldCheck, Lightbulb, Cloud, Cpu, Target, Zap, Settings, Globe } from 'lucide-react';

const SkillsSection = () => {
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skill data with proficiency levels and icon URLs
  const skillsData = {
    // Languages
    python: { name: 'Python', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    java: { name: 'Java', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    javascript: { name: 'JavaScript', level: 'Intermediate', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    typescript: { name: 'TypeScript', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    c: { name: 'C', level: 'Beginner', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    cpp: { name: 'C++', level: 'Beginner', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    
    // Frameworks
    fastapi: { name: 'FastAPI', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    flask: { name: 'Flask', level: 'Expert', color: 'text-orange-400', icon: 'https://th.bing.com/th/id/OIP.19Aio6uoXRdKgfrk2PR9qgHaHw?rs=1&pid=ImgDetMain' },
    django: { name: 'Django', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    springboot: { name: 'Spring Boot', level: 'Beginner', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    nodejs: { name: 'Node.js', level: 'Intermediate', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    react: { name: 'React', level: 'Intermediate', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    html5: { name: 'HTML5', level: 'Intermediate', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    bootstrap: { name: 'Bootstrap', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    tailwind: { name: 'Tailwind CSS', level: 'Beginner', color: 'text-orange-400', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    
    // Tools & Databases
    mongodb: { name: 'MongoDB', level: 'Intermediate', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    mysql: { name: 'MySQL', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    postgresql: { name: 'Salesforce', level: 'Intermediate', color: 'text-orange-400', icon: 'https://logodownload.org/wp-content/uploads/2020/04/salesforce-logo-1.png' },
    git: { name: 'GitHub', level: 'Intermediate', color: 'text-orange-400', icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    firebase: { name: 'Firebase', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    docker: { name: 'Docker', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    vscode: { name: 'VS Code', level: 'Expert', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    linux: { name: 'Linux', level: 'Intermediate', color: 'text-orange-400', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    kali: { name: 'Kali Linux', level: 'Intermediate', color: 'text-orange-400', icon: 'https://www.kali.org/images/kali-logo.svg' },
    wireshark: { name: 'Wireshark', level: 'Intermediate', color: 'text-yellow-400', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Wireshark_icon_new.png' },
    ollama: { name: 'Ollama', level: 'Expert', color: 'text-orange-400', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.47.0/files/dark/ollama.png' }
  };

  // Row 1: Languages
  const languageSkills = ['python', 'java', 'javascript', 'typescript', 'c', 'cpp'];

  // Row 2: Backend & Frontend Frameworks
  const frameworkSkills = ['fastapi', 'flask', 'django', 'springboot', 'express', 'nodejs', 'react', 'html5', 'bootstrap', 'tailwind'];

  // Row 3: Databases & Tools
  const toolSkills = ['mongodb', 'mysql', 'postgresql', 'git', 'firebase', 'docker', 'vscode', 'linux', 'kali', 'wireshark', 'ollama'];

  const expertiseAreas = [
    {
      title: "System Architecture & Design",
      description: "Strong foundation in how computing systems operate at both hardware and software levels, including processor design, memory architecture, and OS interactions. Skilled in designing modular and scalable software systems, with a constant focus on emerging technologies and architectural trends.",
      skills: ["Processor Architecture", "Memory Management", "System-Level Design", "Microservices", "Cloud-Native", "Emerging Tech Trends"],
      icon: Cpu
    },
    {
      title: "AI Integration & Deployment",
      description: "Experienced in embedding AI into real-world workflows. Integrated NLP, vision, and predictive models into scalable applications using APIs and custom ML pipelines.",
      skills: ["OpenAI", "LangChain", "TensorFlow", "Hugging Face", "NLP", "Model Deployment"],
      icon: Brain
    },
    {
      title: "Prompt Engineering",
      description: "Focused on crafting and refining prompts for large language models to maximize performance and relevance. Built prompt chains for use cases like chatbots, analysis, and automation.",
      skills: ["LLMs", "OpenAI APIs", "Prompt Templates", "Few-shot Learning", "Zero-shot Inference", "Tool Augmentation"],
      icon: MessageCircle
    },
    {
      title: "Team Leadership & Collaboration",
      description: "Led cross-functional teams in agile environments. Focused on communication, mentorship, and delivery of high-impact technical solutions through effective team coordination.",
      skills: ["Leadership", "Scrum", "Mentoring", "Task Prioritization", "Team Dynamics", "Sprint Planning"],
      icon: Users
    },
    {
      title: "Problem Solving & Debugging",
      description: "Known for strong analytical thinking and the ability to identify, trace, and resolve technical issues across the stack. Skilled in debugging complex codebases, optimizing performance, and ensuring system stability.",
      skills: ["Debugging", "Error Analysis", "Performance Tuning", "Logging", "Root Cause Analysis", "Problem Solving"],
      icon: Wrench
    },
    {
      title: "Communication & Collaboration",
      description: "Proficient in articulating complex ideas clearly to technical and non-technical audiences. Skilled in written and verbal communication, active listening, and cross-functional team collaboration.",
      skills: ["Technical Communication", "Public Speaking", "Active Listening", "Team Syncs", "Knowledge Sharing", "Meeting Facilitation"],
      icon: Globe
    },
    {
      title: "Project & Time Management",
      description: "Experienced in planning, prioritizing, and delivering tasks efficiently in both individual and team settings. Focused on time optimization, progress tracking, and meeting deadlines through disciplined workflows.",
      skills: ["Task Prioritization", "Deadline Management", "Time Blocking", "Notion/JIRA", "Scope Handling", "Progress Tracking"],
      icon: Clock
    },
    {
      title: "Client & Stakeholder Engagement",
      description: "Adept at gathering requirements, aligning expectations, and maintaining productive communication with clients and stakeholders. Focused on delivering value, collecting feedback, and building long-term relationships.",
      skills: ["Stakeholder Communication", "Client Demos", "Feedback Loops", "Requirements Gathering", "Presentation Skills", "Expectation Management"],
      icon: Handshake
    },
    {
      title: "Cybersecurity & Secure Development",
      description: "Skilled in encryption, secure coding practices, and threat modeling. Experience in building secure systems, implementing authentication protocols, and conducting security assessments to protect against vulnerabilities.",
      skills: ["Encryption", "Secure Coding", "Threat Modeling", "Authentication", "Security Assessments", "Vulnerability Analysis"],
      icon: ShieldCheck
    },
    {
      title: "Innovation & Problem Solving",
      description: "Creative thinker with proven success in hackathons and real-world challenges. Ability to think outside the box, develop innovative solutions, and adapt quickly to new technologies and methodologies.",
      skills: ["Creative Thinking", "Hackathon Success", "Rapid Prototyping", "Technology Adaptation", "Solution Design", "Innovation Strategy"],
      icon: Lightbulb
    }
  ];

  const closeModal = () => {
    setSelectedExpertise(null);
    // Restore background scrolling
    document.body.style.overflow = 'unset';
  };

  const openModal = (expertise) => {
    setSelectedExpertise(expertise);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  // Close modal on Esc key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedExpertise) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedExpertise]);

  const SkillTooltip = ({ skill, children }) => {
    const skillData = skillsData[skill];
    if (!skillData) return children;

    return (
      <div 
        className="relative group"
        onMouseEnter={() => setHoveredSkill(skill)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        {children}
        {hoveredSkill === skill && (
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl animate-fade-in">
            <div className="text-center">
              <div className={`text-sm font-semibold ${skillData.color}`}>
                {skillData.name}
              </div>
              <div className="text-xs text-gray-300 mt-1">
                {skillData.level}
              </div>
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    );
  };

  const SkillIcon = ({ skillKey }) => {
    const skill = skillsData[skillKey];
    if (!skill) return null;

    return (
      <SkillTooltip skill={skillKey}>
        <div className="flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] cursor-pointer">
          <img 
            src={skill.icon} 
            alt={skill.name}
            className="w-12 h-12 object-contain"
            onError={(e) => {
              // Fallback to a generic icon if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-xs hidden">
            {skill.name.charAt(0)}
          </div>
        </div>
      </SkillTooltip>
    );
  };

  return (
    <section id="skills" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-orange-500 relative">
              Skills & Expertise
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          
          {/* Row 1: Languages */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-orange-400 mb-4 text-center">Programming Languages</h4>
            <div className="flex justify-center items-center gap-12 mb-12 flex-wrap">
              {languageSkills.map((skill, index) => (
                <SkillIcon key={index} skillKey={skill} />
              ))}
            </div>
          </div>

          {/* Row 2: Frameworks */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-orange-400 mb-4 text-center">Frameworks & Libraries</h4>
            <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
              {frameworkSkills.map((skill, index) => (
                <SkillIcon key={index} skillKey={skill} />
              ))}
            </div>
          </div>

          {/* Row 3: Tools & Databases */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-orange-400 mb-4 text-center">Tools & Databases</h4>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {toolSkills.map((skill, index) => (
                <SkillIcon key={index} skillKey={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Areas of Expertise - 5 Cards Per Row */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 animate-fade-in group w-full max-w-sm h-48 flex flex-col justify-center"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
                onClick={() => openModal(area)}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h4 className="text-lg font-bold text-orange-400 mb-2">{area.title}</h4>
                  <div className="text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to learn more
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Modal */}
        {selectedExpertise && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={closeModal}
          >
            <div 
              className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 transform animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                      <selectedExpertise.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-orange-400">
                      {selectedExpertise.title}
                    </h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedExpertise.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-orange-400 mb-4">Key Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExpertise.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium backdrop-blur-sm border border-orange-500/30 hover:bg-orange-500/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
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

export default SkillsSection;