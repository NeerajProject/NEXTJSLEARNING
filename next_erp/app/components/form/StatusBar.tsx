'use client';
import React from 'react';

interface StatusBarProps {
  statuses: string[];
  currentStatus: string;
  onStatusChange?: (status: string) => void;
}

export function StatusBar({ statuses, currentStatus }: StatusBarProps) {
  return (
    <div className="flex items-center bg-gray-100 rounded-sm overflow-hidden text-sm border border-gray-200">
      {statuses.map((status, index) => {
        const isActive = status === currentStatus;
        const isPassed = statuses.indexOf(currentStatus) > index;
        
        return (
          <div 
            key={status}
            className={`
              px-4 py-1.5 relative flex items-center
              ${isActive ? 'bg-[#b21c17] text-white font-medium' : ''}
              ${isPassed ? 'text-gray-800 bg-white' : ''}
              ${!isActive && !isPassed ? 'text-gray-400 bg-gray-100' : ''}
              ${index !== 0 ? 'pl-6' : ''}
            `}
          >
            {index !== 0 && (
              <div className={`absolute left-0 w-4 h-4 border-t border-r border-gray-200 transform rotate-45 -translate-x-2 ${isActive ? 'border-[#b21c17] bg-[#b21c17]' : isPassed ? 'bg-white' : 'bg-gray-100'}`}></div>
            )}
            <span className="relative z-10">{status}</span>
          </div>
        );
      })}
    </div>
  );
}