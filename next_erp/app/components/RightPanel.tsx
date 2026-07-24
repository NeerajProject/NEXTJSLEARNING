import React from 'react';
import { Search, Filter } from 'lucide-react';

function Checkbox({ label, checked = false }: { label: string, checked?: boolean }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer group">
      <div className={`w-4 h-4 rounded border flex items-center justify-center ${checked ? 'bg-[#cc1f1a] border-[#cc1f1a]' : 'border-gray-300 group-hover:border-[#cc1f1a] bg-white'}`}>
        {checked && <div className="w-2 h-2 bg-white rounded-sm"></div>}
      </div>
      <span className="text-gray-700 text-sm group-hover:text-gray-900">{label}</span>
    </label>
  );
}

function Radio({ label, checked = false }: { label: string, checked?: boolean }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer group">
      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${checked ? 'border-[#cc1f1a]' : 'border-gray-300 group-hover:border-[#cc1f1a] bg-white'}`}>
        {checked && <div className="w-2 h-2 bg-[#cc1f1a] rounded-full"></div>}
      </div>
      <span className="text-gray-700 text-sm group-hover:text-gray-900">{label}</span>
    </label>
  );
}

export default function RightPanel() {
  return (
    <aside className="w-72 bg-[#fdf8f8] border-l border-red-100 p-5 flex flex-col gap-6 overflow-y-auto flex-shrink-0 h-full">
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Search</h3>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded shadow-sm focus:outline-none focus:border-[#cc1f1a] focus:ring-1 focus:ring-[#cc1f1a] bg-white text-sm"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Filter size={14} /> Filters
        </h3>
        <div className="space-y-2.5">
          <Checkbox label="Available" checked />
          <Checkbox label="Low Stock" checked />
          <Checkbox label="Out of Stock" />
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
           Group By
        </h3>
        <div className="space-y-2.5">
          <Radio label="Product Category" checked />
          <Radio label="Status" />
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          ☆ Favorites
        </h3>
        <p className="text-xs text-gray-400 italic">No favorites saved yet.</p>
      </div>
    </aside>
  );
}