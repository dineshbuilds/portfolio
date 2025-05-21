
import { Github, Linkedin, FileText, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-[#f8f9fa] to-[#ffffff] dark:from-gray-900 dark:to-gray-800">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left side with enhanced blob animation */}
        <div className="w-full md:w-1/2 flex justify-center animate-float relative">
          <div className="blob blob-1 absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] opacity-40 rounded-[40%_60%_60%_40%_/_60%_30%_70%_40%] bg-gradient-to-br from-primary/70 to-secondary/70 dark:from-primary/50 dark:to-secondary/50 animate-blob-slow"></div>
          <div className="blob blob-2 absolute w-[230px] h-[230px] md:w-[330px] md:h-[330px] opacity-40 rounded-[40%_60%_70%_30%_/_50%_60%_40%_60%] bg-gradient-to-br from-secondary/70 to-cv/70 dark:from-secondary/50 dark:to-cv/50 animate-blob-medium"></div>
          <div className="blob blob-3 absolute w-[210px] h-[210px] md:w-[310px] md:h-[310px] opacity-40 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-gradient-to-br from-cv/70 to-projects/70 dark:from-cv/50 dark:to-projects/50 animate-blob-fast"></div>
          
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600" 
              alt="Coding illustration" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        {/* Right side with text and buttons */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat mb-4 text-primary dark:text-white">
            Hi, I'm <span className="text-gradient-primary">Dinesh Raja</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg">
            A passionate developer focused on creating beautiful, functional digital experiences.
          </p>
          
          {/* Social buttons with reduced radius */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <SocialButton 
              href="https://github.com" 
              className="bg-github rounded-md"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 mr-2" />
              <span>GitHub</span>
            </SocialButton>
            
            <SocialButton 
              href="https://linkedin.com" 
              className="bg-linkedin rounded-md"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              <span>LinkedIn</span>
            </SocialButton>
            
            <SocialButton 
              href="#" 
              className="bg-cv rounded-md"
              aria-label="Download CV"
            >
              <Download className="w-5 h-5 mr-2" />
              <span>Download CV</span>
            </SocialButton>
            
            <SocialButton 
              href="#projects" 
              className="bg-projects rounded-md"
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
        "px-5 py-2.5 rounded-md flex items-center justify-center text-white font-medium",
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
