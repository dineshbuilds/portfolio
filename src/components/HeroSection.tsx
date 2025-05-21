
import { Github, Linkedin, FileText, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-[#f8f9fa] to-[#ffffff]">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side with animation */}
        <div className="w-full md:w-1/2 flex justify-center animate-float">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 animate-pulse-slow"></div>
            <div className="absolute inset-[10px] rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600" 
                alt="Coding illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Right side with text and buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat mb-4 text-primary">
            Hi, I'm <span className="text-secondary">Dinesh Raja</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg">
            A passionate developer focused on creating beautiful, functional digital experiences.
          </p>
          
          {/* Social buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <SocialButton 
              href="https://github.com" 
              className="bg-github"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 mr-2" />
              <span>GitHub</span>
            </SocialButton>
            
            <SocialButton 
              href="https://linkedin.com" 
              className="bg-linkedin"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <span>LinkedIn</span>
            </SocialButton>
            
            <SocialButton 
              href="#" 
              className="bg-cv"
              aria-label="Download CV"
            >
              <Download className="w-5 h-5 mr-2" />
              <span>Download CV</span>
            </SocialButton>
            
            <SocialButton 
              href="#projects" 
              className="bg-projects"
              aria-label="View Projects"
            >
              <FileText className="w-5 h-5 mr-2" />
              <span>View Projects</span>
            </SocialButton>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SocialButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  'aria-label': string;
}

const SocialButton = ({ href, className, children, ...props }: SocialButtonProps) => {
  return (
    <a 
      href={href} 
      className={cn(
        "px-5 py-2.5 rounded-full flex items-center justify-center text-white font-medium",
        "transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default HeroSection;
