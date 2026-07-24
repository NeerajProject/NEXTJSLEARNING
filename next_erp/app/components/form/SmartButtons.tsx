'use client';
import React from 'react';

interface StatButtonProps {
  icon: React.ReactNode;
  label: string;
  count?: string | number;
  onClick?: () => void;
}

export function SmartButtons({ buttons }: { buttons: StatButtonProps[] }) {
  return (
    <div className="flex justify-end gap-2 mb-4">
      {buttons.map((btn, idx) => (
        <button 
          key={idx} 
          onClick={btn.onClick}
          className="flex flex-col items-center justify-center border border-gray-300 rounded w-20 h-14 bg-white hover:bg-gray-50 transition-colors shadow-sm relative"
        >
          {btn.icon}
          <span className="text-[10px] uppercase font-semibold text-gray-600 mt-1">{btn.label}</span>
        </button>
      ))}
    </div>
  );
}