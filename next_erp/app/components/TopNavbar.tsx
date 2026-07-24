import React from 'react';
import { Grid, Bell, Settings } from 'lucide-react';

function ModuleLink({ label, active }: { label: string, active: boolean }) {
  return (
    <div className={`flex items-center h-full px-1 border-b-2 cursor-pointer transition-colors ${active ? 'border-[#cc1f1a] text-[#cc1f1a] font-semibold' : 'border-transparent text-gray-600 hover:text-[#cc1f1a]'}`}>
      {label}
    </div>
  );
}

export default function TopNavbar() {
  return (
    <header className="h-16 border-b border-red-100 flex items-center justify-between px-6 flex-shrink-0 bg-white w-full">
      <nav className="flex space-x-6 h-full">
        <ModuleLink label="Inventory" active={false} />
        <ModuleLink label="Sales" active={false} />
        <ModuleLink label="Inventory" active={true} />
        <ModuleLink label="Accounting" active={false} />
        <ModuleLink label="HR" active={false} />
      </nav>

      <div className="flex items-center space-x-5 text-gray-600">
        <button className="hover:text-[#cc1f1a] transition-colors"><Grid size={18} /></button>
        <button className="hover:text-[#cc1f1a] transition-colors relative">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#cc1f1a] rounded-full"></span>
        </button>
        <button className="hover:text-[#cc1f1a] transition-colors"><Settings size={18} /></button>
        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
          <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}