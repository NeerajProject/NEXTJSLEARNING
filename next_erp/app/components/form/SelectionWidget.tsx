'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string; value: string | number }[];
}

export function SelectionWidget({ options, className = '', ...props }: SelectProps) {
  return (
    <div className="relative w-full">
      <select 
        className={`w-full appearance-none border border-gray-300 rounded-sm px-3 py-1.5 pr-8 text-sm text-gray-800 bg-white shadow-sm focus:outline-none focus:border-[#b21c17] focus:ring-1 focus:ring-[#b21c17] transition-all ${className}`}
        {...props}
      >
        <option value="" disabled>Select an option...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <ChevronDown size={14} className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
}