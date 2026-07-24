'use client';
import React from 'react';

interface FormSectionProps {
  children: React.ReactNode;
  columns?: 1 | 2;
}

export function FormSection({ children, columns = 2 }: FormSectionProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-x-12 gap-y-2`}>
      {children}
    </div>
  );
}