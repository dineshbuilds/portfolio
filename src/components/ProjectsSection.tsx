
import { cn } from '@/lib/utils';

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gradient-to-br from-[#f9f9f9] to-white dark:from-gray-900 dark:to-gray-800 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto dark:text-white">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const ProjectCard = ({ title, description, image, technologies, link }: ProjectCardProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800/50 dark:border-gray-700">
      <div className="h-48 md:h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="font-montserrat font-bold text-xl mb-2 dark:text-white">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        
        <a 
          href={link}
          className={cn(
            "inline-block px-6 py-2 rounded-md bg-projects text-white font-medium",
            "transform transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
            "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          )}
        >
          View Project
        </a>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, user accounts, and responsive design.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Finance Dashboard",
    description: "An interactive dashboard for financial data visualization with real-time updates and analytics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    technologies: ["React", "D3.js", "Firebase", "Material UI"],
    link: "#"
  },
  {
    title: "Social Media App",
    description: "A modern social networking platform with real-time messaging, post sharing, and user profiles.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    technologies: ["React Native", "Firebase", "Redux", "Express"],
    link: "#"
  },
  {
    title: "Task Management Tool",
    description: "A collaborative project management tool with task tracking, team management, and reporting features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    technologies: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
    link: "#"
  }
];

export default ProjectsSection;
