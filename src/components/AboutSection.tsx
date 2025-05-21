
import { Briefcase, Code, LayoutDashboard, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-[#f8f9fa] to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 animate-pulse-slow"></div>
              <div className="absolute inset-[5px] rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500" 
                  alt="Dinesh Raja" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="lg:w-2/3">
            <h2 className="section-title">About Me</h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I'm a passionate developer and designer with expertise in front-end development,
              UI/UX design, and creative problem solving. With a keen eye for detail and a love
              for clean, efficient code, I create beautiful digital experiences that users love.
            </p>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutCards.map((card, index) => (
                <AboutCard 
                  key={index} 
                  title={card.title} 
                  description={card.description} 
                  icon={card.icon} 
                  color={card.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const AboutCard = ({ title, description, icon, color }: AboutCardProps) => {
  return (
    <div className="group glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 transition-colors duration-300 ${color} group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className={`font-montserrat font-bold text-lg mb-2 transition-colors duration-300 group-hover:${color.replace('bg-', 'text-')}`}>
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

const aboutCards = [
  {
    title: "Freelancer",
    description: "I work with clients worldwide to create custom digital solutions that meet their unique needs.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-primary"
  },
  {
    title: "Front End Developer",
    description: "I build responsive, interactive websites and applications with modern frameworks and tools.",
    icon: <Code className="w-6 h-6" />,
    color: "bg-secondary"
  },
  {
    title: "UI/UX Designer",
    description: "I design intuitive user interfaces and experiences that balance form and function.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    color: "bg-cv"
  },
  {
    title: "Real-time Problem Solver",
    description: "I tackle complex challenges with creative thinking and technical expertise.",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-projects"
  }
];

export default AboutSection;
