import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function StatusFooter() {
  return (
    <footer className="h-12 border-t border-red-100 bg-[#fdf8f8] flex items-center justify-between px-4 text-xs text-gray-600 flex-shrink-0 w-full">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          System Online: ERP Gateway v4.2.1
        </div>
        <div className="border-l border-gray-300 pl-6">
          Last Sync: 2 minutes ago
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span>1-80 / 450 items</span>
        <div className="flex border border-gray-300 rounded overflow-hidden">
          <button className="p-1 bg-white hover:bg-gray-50 border-r border-gray-300"><ChevronLeft size={14} /></button>
          <button className="p-1 bg-white hover:bg-gray-50"><ChevronRight size={14} /></button>
        </div>
        <select className="bg-transparent outline-none cursor-pointer hover:text-gray-900">
          <option>80 per page</option>
          <option>100 per page</option>
        </select>
      </div>
    </footer>
  );
}