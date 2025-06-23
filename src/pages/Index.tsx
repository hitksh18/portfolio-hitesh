import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import CertificationsSection from '@/components/CertificationsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Minimal Dark Gradient Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary minimal gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Very subtle animated particles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/2 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-500/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-orange-400/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
        
        {/* Very subtle mesh overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/3 to-transparent transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-red-500/3 to-transparent transform -rotate-12"></div>
        </div>
      </div>
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Index;