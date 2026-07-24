'use client';
import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

export function Notebook({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);

  return (
    <div className="bg-white">
      <div className="flex border-b border-gray-200 px-6 pt-4 space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`pb-2 text-sm font-medium transition-colors relative ${
              activeTab === tab.label ? 'text-[#b21c17]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
            {activeTab === tab.label && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#b21c17]"></div>}
          </button>
        ))}
      </div>
      <div className="p-6">
        {tabs.find(t => t.label === activeTab)?.content}
      </div>
    </div>
  );
}