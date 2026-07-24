'use client';
import React from 'react';
import { SmartButtons } from './SmartButtons';

interface FormHeaderProps {
  type: string;
  recordNumber: string;
  smartButtons: React.ComponentProps<typeof SmartButtons>['buttons'];
  children: React.ReactNode;
}

export function FormHeader({ type, recordNumber, smartButtons, children }: FormHeaderProps) {
  return (
    <div className="p-6 border-b border-gray-200 bg-white">
      <SmartButtons buttons={smartButtons} />
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">{type}</h2>
        <h1 className="text-3xl font-extrabold text-gray-900">{recordNumber}</h1>
      </div>
      {children}
    </div>
  );
}