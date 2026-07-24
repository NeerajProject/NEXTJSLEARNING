'use client';
import React from 'react';
import { Save, X, Printer } from 'lucide-react';
import { StatusBar } from './StatusBar';
import { FormHeader } from './FormHeader';
import { Notebook } from './Notebook';
import { Chatter } from './Chatter';

interface FormRendererProps {
  statuses: string[];
  currentStatus: string;
  recordType: string;
  recordNumber: string;
  smartButtons: any[];
  tabs: any[];
  activities: any[];
}

export function FormRenderer({
  statuses,
  currentStatus,
  recordType,
  recordNumber,
  smartButtons,
  tabs,
  activities,
}: FormRendererProps) {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-50 overflow-hidden font-sans">
      <div className="flex items-center justify-between px-4 py-2 bg-[#fdf7f7] border-b border-red-100 flex-shrink-0">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-[#b21c17] hover:bg-red-800 text-white px-3 py-1.5 rounded-sm text-sm font-medium transition-colors shadow-sm">
            <Save size={16} /> Save
          </button>
          <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-3 py-1.5 rounded-sm text-sm font-medium transition-colors shadow-sm">
            <X size={16} /> Discard
          </button>
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          <button className="flex items-center gap-2 text-[#b21c17] hover:bg-red-50 px-3 py-1.5 rounded-sm text-sm font-medium transition-colors">
            <Printer size={16} /> Print
          </button>
        </div>
        <StatusBar statuses={statuses} currentStatus={currentStatus} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="bg-white border-l border-r border-gray-200 shadow-sm mx-auto min-h-full max-w-6xl">
          <FormHeader type={recordType} recordNumber={recordNumber} smartButtons={smartButtons}>
            {/* Slot for FormSection fields */}
          </FormHeader>
          <Notebook tabs={tabs} />
          <Chatter activities={activities} />
        </div>
      </div>
    </div>
  );
}