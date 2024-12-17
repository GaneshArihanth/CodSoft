import React from 'react';

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isScrolled: boolean;
}

export function NavLink({ href, icon, label, isScrolled }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
        ${
          isScrolled
            ? 'text-gray-700 hover:text-indigo-600'
            : 'text-gray-100 hover:text-white'
        }
        hover:scale-105 hover:bg-opacity-10 hover:bg-indigo-100`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </a>
  );
}