
import { cn } from '@/lib/utils';
import marvelSnaps from '../assest/project img/marvelsnaps.png';
import iceCreamTown from '../assest/project img/ice cream town.png';
import safetyFirst from '../assest/project img/safetyfirst.png';
import weatherApp from '../assest/project img/weather.png';
import portfolioImage from '../assest/project img/portfolio.png';
import freelancingSite from '/lovable-uploads/49ec1781-4e60-4f06-a8ad-913979c9b218.png';

const ProjectsSection = () => {
  return (
  <section id="projects" className="bg-gradient-to-br from-[#0b1220] to-[#0f172a] py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto dark:text-white">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800/50 dark:border-gray-700 max-w-sm mx-auto">
      <div className="h-48 md:h-52 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain transition-transform duration-500 hover:scale-110 p-2"
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
    title: "My Freelancing Site",
    description: "A modern freelancing portfolio website built with React, TypeScript, and Tailwind CSS, showcasing services and pricing with an elegant design.",
    image: freelancingSite,
    technologies: ["React", "Tailwind CSS", "TypeScript", "GitHub", "Vercel", "Lovable"],
    link: "https://dineshcreates.vercel.app/"
  },
  {
    title: "Marvel Snaps",
    description: "A React.js-based photographer portfolio site featuring an attractive UI, optimized code, WhatsApp API integration, and hosted on Vercel for fast performance.",
    image: marvelSnaps,
    technologies: ["React", "Javascript","CSS","Github", "Vercel", "Cursor AI"],
    link: "http://marvelsnaps.in/"
  },
  {
    title: "Ice Cream Town",
    description: "A delightful ice cream shop website with a menu, online ordering, and a attractive design.",
    image: iceCreamTown,
    technologies: ["React", "JSX", "CSS", "Github", "Vercel", "Github Copilot"],
    link: "http://icecreamtown.in/"
  },
  {
    title: "Safety First",
    description: "A Mental Well-being Platform for Women and Children with real-time messaging, post sharing, Safety resources and Free Mental Health Resources.",
    image: safetyFirst,
    technologies: ["React","Firebase", "CSS", "Github", "Vercel", "Github Copilot"],
    link: "https://projectsafetyfirst.vercel.app/"
  },
  {
    title: "React Weather App",
    description: "A weather application built with React.js, providing real-time weather updates and forecasts by using OpenWeatherMap API.",
    image: weatherApp,
    technologies: ["React","OpenWeather API", "Github", "Vercel", "Github Copilot"],
    link: "https://weather-five-rho.vercel.app/"
  }, 
  {
    title: "Personal Portfolio Website",
    description: "A fully responsive portfolio website built using React.js and Typescript to showcase projects, skills, and contact information.",
    image: portfolioImage,
    technologies: ["React", "Tailwaind CSS","Typescript","GitHub", "Vercel", "Lovable"],
    link: "https://dineshraja.vercel.app/"
  }
];

export default ProjectsSection;
