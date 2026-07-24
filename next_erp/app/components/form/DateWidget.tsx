'use client';
import React from 'react';
import { Calendar } from 'lucide-react';

interface DateProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function DateWidget({ className = '', ...props }: DateProps) {
  return (
    <div className="relative w-full flex items-center justify-between border border-gray-300 rounded px-3 py-1.5 bg-white shadow-sm">
      <input 
        type="text"
        className={`w-full bg-transparent outline-none text-sm text-gray-800 ${className}`}
        {...props}
      />
      <Calendar size={14} className="text-gray-400 ml-2" />
    </div>
  );
}