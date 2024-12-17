import React from 'react';
import { Code2, Database, Globe, Palette } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS'],
    icon: <Globe className="w-6 h-6 text-indigo-600" />
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL'],
    icon: <Database className="w-6 h-6 text-indigo-600" />
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'UI/UX'],
    icon: <Palette className="w-6 h-6 text-indigo-600" />
  },
  {
    category: 'Other',
    items: ['Git', 'Docker', 'AWS'],
    icon: <Code2 className="w-6 h-6 text-indigo-600" />
  }
];

export function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map(({ category, items, icon }) => (
        <div key={category} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            {icon}
            <h3 className="ml-2 text-lg font-semibold text-gray-900">{category}</h3>
          </div>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item} className="text-gray-600">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}