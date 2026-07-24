'use client';
import React from 'react';

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export function FormField({ label, required, children }: FormFieldProps) {
  return (
    <div className="flex items-center gap-4 mb-3">
      <label className="w-32 text-sm font-semibold text-gray-600 flex items-center">
        {label} {required && <span className="text-[#b21c17] ml-1">*</span>}
      </label>
      <div className="flex-1">{children}</div>
    </div>
  );
}