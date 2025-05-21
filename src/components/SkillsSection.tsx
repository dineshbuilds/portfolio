
import { useState } from 'react';
import { cn } from '@/lib/utils';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('development');
  
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all",
                activeTab === tab.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skillsData[activeTab].map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
}

const SkillCard = ({ name, icon, color }: SkillCardProps) => {
  return (
    <div 
      className={`glass-card rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${color}`}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <p className="font-medium text-center">{name}</p>
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
    { name: 'Java', icon: '☕', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'React.js', icon: '⚛️', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'HTML', icon: '🌐', color: 'bg-gradient-to-br from-orange-50 to-orange-100' },
    { name: 'CSS', icon: '🎨', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'JavaScript', icon: '📜', color: 'bg-gradient-to-br from-yellow-50 to-yellow-100' },
    { name: 'MySQL', icon: '🛢️', color: 'bg-gradient-to-br from-indigo-50 to-indigo-100' },
    { name: 'Git', icon: '📂', color: 'bg-gradient-to-br from-red-50 to-red-100' },
    { name: 'Firebase', icon: '🔥', color: 'bg-gradient-to-br from-amber-50 to-amber-100' }
  ],
  design: [
    { name: 'UI Design', icon: '🎯', color: 'bg-gradient-to-br from-purple-50 to-purple-100' },
    { name: 'UX Research', icon: '🔍', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'Wireframing', icon: '📝', color: 'bg-gradient-to-br from-gray-50 to-gray-100' },
    { name: 'Prototyping', icon: '⚙️', color: 'bg-gradient-to-br from-green-50 to-green-100' },
    { name: 'Graphic Design', icon: '✏️', color: 'bg-gradient-to-br from-pink-50 to-pink-100' },
    { name: 'Figma', icon: '🖌️', color: 'bg-gradient-to-br from-purple-50 to-purple-100' },
    { name: 'Framer', icon: '📱', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'Illustrator', icon: '🖼️', color: 'bg-gradient-to-br from-orange-50 to-orange-100' }
  ],
  ai: [
    { name: 'GitHub Copilot', icon: '🤖', color: 'bg-gradient-to-br from-gray-50 to-gray-100' },
    { name: 'Cursor', icon: '👆', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'UX Pilot', icon: '✈️', color: 'bg-gradient-to-br from-purple-50 to-purple-100' },
    { name: 'Lovable', icon: '❤️', color: 'bg-gradient-to-br from-red-50 to-red-100' },
    { name: 'ChatGPT', icon: '💬', color: 'bg-gradient-to-br from-green-50 to-green-100' },
    { name: 'Perplexity', icon: '🧩', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'Dream Machine', icon: '💭', color: 'bg-gradient-to-br from-indigo-50 to-indigo-100' },
    { name: 'Firefly', icon: '✨', color: 'bg-gradient-to-br from-amber-50 to-amber-100' }
  ],
  others: [
    { name: 'AI-Driven Coding', icon: '🦾', color: 'bg-gradient-to-br from-gray-50 to-gray-100' },
    { name: 'Technical Support', icon: '🛠️', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'Microsoft 365', icon: '📊', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'Adobe Photoshop', icon: '🖌️', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'Lightroom', icon: '🌄', color: 'bg-gradient-to-br from-blue-50 to-blue-100' },
    { name: 'Canva', icon: '🎭', color: 'bg-gradient-to-br from-purple-50 to-purple-100' }
  ]
};

export default SkillsSection;
