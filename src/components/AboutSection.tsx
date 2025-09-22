
import { Briefcase, Code, LayoutDashboard, Brain } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const AboutSection = () => {
  return (
  <section id="about" className="bg-gradient-to-br from-[#0b1220] to-[#0f172a] py-16 md:py-24">
      <div className="section-container">
        <div className="flex flex-col items-center">
          {/* Content */}
          <div className="w-full max-w-6xl">
            <h2 className="section-title text-white text-center mx-auto">About Me</h2>
            
            <p className="text-lg text-gray-300 mb-12 text-center">
              I'm a passionate developer and designer with expertise in front-end development,
              UI/UX design, and creative problem solving. With a keen eye for detail and a love
              for clean, efficient code, I create beautiful digital experiences that users love.
            </p>
            
            {/* Cards with progress bars (replaces spinning timeline) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {aboutCards.map((c, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${c.color}`}>{c.icon}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{aboutTimelineData[idx]?.date ?? ''}</div>
                  </div>
                  <h3 className="mt-4 font-semibold text-lg text-gray-800 dark:text-white">{c.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{c.description}</p>

                  <div className="mt-4">
                    <ProgressBar value={aboutTimelineData[idx]?.energy ?? 70} />
                  </div>
                </div>
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
      <h3 className={`font-montserrat font-bold text-lg mb-2 text-gray-800 dark:text-white transition-colors duration-300 group-hover:${color.replace('bg-', 'text-')}`}>
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

const aboutTimelineData = [
  {
    id: 1,
    title: "Freelancer",
    date: "2020-Present",
    content: "I work with clients worldwide to create custom digital solutions that meet their unique needs. Delivering high-quality projects with attention to detail and client satisfaction.",
    category: "Business",
    icon: Briefcase,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Front End Developer",
    date: "2019-Present",
    content: "I build responsive, interactive websites and applications with modern frameworks and tools. Specializing in React, TypeScript, and modern web technologies.",
    category: "Development",
    icon: Code,
    relatedIds: [1, 3, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    date: "2018-Present",
    content: "I design intuitive user interfaces and experiences that balance form and function. Creating user-centered designs that solve real problems.",
    category: "Design",
    icon: LayoutDashboard,
    relatedIds: [1, 2, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Real-time Problem Solver",
    date: "Always",
    content: "I tackle complex challenges with creative thinking and technical expertise. Finding innovative solutions to technical and design problems.",
    category: "Problem Solving",
    icon: Brain,
    relatedIds: [2, 3],
    status: "in-progress" as const,
    energy: 88,
  }
];

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

const ProgressBar = ({ value = 50 }: { value?: number }) => {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
      <div
        className="h-3 bg-gradient-to-r from-primary to-secondary"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};
