import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaFire } from 'react-icons/fa';
import { BiTargetLock, BiSearch } from 'react-icons/bi';
import { MdOutlineDesignServices, MdOutlineGraphicEq } from 'react-icons/md';
import { RiPenNibLine, RiFolderChart2Line } from 'react-icons/ri';
import { SiFramer, SiAdobeillustrator } from 'react-icons/si';
import { TbBrandOpenai, TbPlane } from 'react-icons/tb';
import { BsLightningCharge, BsPuzzle, BsHeartFill, BsCloud } from 'react-icons/bs';
import { HiOutlineSupport } from 'react-icons/hi';
import { AiOutlineFileExcel } from 'react-icons/ai';
import { DiPhotoshop } from 'react-icons/di';
import { GiPhotoCamera } from 'react-icons/gi';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('development');
  
  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-tr from-[#f9f9f9] to-white dark:from-gray-900 dark:to-gray-800">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto dark:text-white">My Skills</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all",
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md dark:bg-primary/80"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid - Modified for better mobile layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
          {skillsData[activeTab].map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
              glowColor={skill.glowColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

const SkillCard = ({ name, icon, color, glowColor }: SkillCardProps) => {
  return (
    <div 
      className={`glass-card rounded-xl p-2 sm:p-4 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${color} group dark:bg-gray-800/50`}
    >
      <div className={`text-2xl sm:text-3xl mb-2 sm:mb-3 group-hover:scale-110 transition-all duration-300 ${glowColor}`}>
        {icon}
      </div>
      <p className="font-medium text-center text-xs sm:text-sm md:text-base dark:text-white">{name}</p>
    </div>
  );
};

const tabs = [
  { id: 'development', name: 'Development' },
  { id: 'design', name: 'Design & Tools' },
  { id: 'ai', name: 'AI Tools' },
  { id: 'others', name: 'Others' }
];

const skillsData = {
  development: [
    { name: 'Java', icon: <FaJava />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', glowColor: 'text-blue-500' },
    { name: 'React.js', icon: <FaReact />, color: 'bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20', glowColor: 'text-cyan-500' },
    { name: 'HTML', icon: <FaHtml5 />, color: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20', glowColor: 'text-orange-500' },
    { name: 'CSS', icon: <FaCss3Alt />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', glowColor: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJs />, color: 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20', glowColor: 'text-yellow-400' },
    { name: 'Git', icon: <FaGitAlt />, color: 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20', glowColor: 'text-red-500' },
    { name: 'Firebase', icon: <FaFire />, color: 'bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20', glowColor: 'text-amber-500' }
  ],
  design: [
    { name: 'UI Design', icon: <BiTargetLock />, color: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20', glowColor: 'text-purple-500' },
    { name: 'UX Research', icon: <BiSearch />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', glowColor: 'text-blue-500' },
    { name: 'Wireframing', icon: <RiPenNibLine />, color: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/20 dark:to-gray-600/20', glowColor: 'text-gray-500' },
    { name: 'Prototyping', icon: <RiFolderChart2Line />, color: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20', glowColor: 'text-green-500' },
    { name: 'Graphic Design', icon: <MdOutlineDesignServices />, color: 'bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20', glowColor: 'text-pink-500' },
    { name: 'Figma', icon: <MdOutlineGraphicEq />, color: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20', glowColor: 'text-purple-500' },
    { name: 'Framer', icon: <SiFramer />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', glowColor: 'text-blue-500' },
    { name: 'Illustrator', icon: <SiAdobeillustrator />, color: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20', glowColor: 'text-orange-500' }
  ],
  ai: [
    { name: 'GitHub Copilot', icon: <BsPuzzle />, color: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/20 dark:to-gray-600/20', glowColor: 'text-gray-500' },
    { name: 'Coding AI', icon: <TbBrandOpenai />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', glowColor: 'text-blue-500' },
    { name: 'UX Pilot', icon: <TbPlane />, color: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20', glowColor: 'text-purple-500' },
    { name: 'Lovable', icon: <BsHeartFill />, color: 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20', glowColor: 'text-red-500' },
    { name: 'ChatGPT', icon: <TbBrandOpenai />, color: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20', glowColor: 'text-green-500' },
    { name: 'Perplexity', icon: <BsPuzzle />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', glowColor: 'text-blue-500' },
    { name: 'Dream Machine', icon: <BsCloud />, color: 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20', glowColor: 'text-indigo-500' },
    { name: 'Firefly', icon: <BsLightningCharge />, color: 'bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20', glowColor: 'text-amber-500' }
  ],
  others: [
    { name: 'AI-Driven Coding', icon: <BsPuzzle />, color: 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/20 dark:to-gray-600/20', glowColor: 'text-gray-500' },
    { name: 'Technical Support', icon: <HiOutlineSupport />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', glowColor: 'text-blue-500' },
    { name: 'Microsoft 365', icon: <AiOutlineFileExcel />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', glowColor: 'text-blue-500' },
    { name: 'Adobe Photoshop', icon: <DiPhotoshop />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', glowColor: 'text-blue-500' },
    { name: 'Lightroom', icon: <GiPhotoCamera />, color: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', glowColor: 'text-blue-500' },
    { name: 'Canva', icon: <FaCanadianMapleLeaf />, color: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20', glowColor: 'text-purple-500' }
  ]
};

export default SkillsSection;
