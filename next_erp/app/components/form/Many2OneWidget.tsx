'use client';
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Many2OneProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onOpenRecord?: () => void;
}

export function Many2OneWidget({ onOpenRecord, className = '', ...props }: Many2OneProps) {
  return (
    <div className="relative w-full flex items-center border-b border-gray-300 pb-1">
      <input 
        type="text"
        className={`w-full bg-transparent outline-none text-gray-900 font-medium text-sm ${className}`}
        {...props}
      />
      <button 
        type="button"
        onClick={onOpenRecord}
        className="text-[#b21c17] hover:text-red-900 transition-colors ml-2"
        title="Open related record"
      >
        <ExternalLink size={14} />
      </button>
    </div>
  );
}