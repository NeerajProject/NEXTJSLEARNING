'use client';
import React from 'react';
import { PlusCircle } from 'lucide-react';

interface Column {
  key: string;
  header: string;
  align?: 'left' | 'right';
  render?: (item: any) => React.ReactNode;
}

interface One2ManyGridProps {
  columns: Column[];
  data: any[];
  onAddRow?: () => void;
}

export function One2ManyGrid({ columns, data, onAddRow }: One2ManyGridProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="w-full">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#fdf7f7] border-b border-gray-200 text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className={`py-3 px-4 ${col.align === 'right' ? 'text-right' : ''}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm">
          {data.map((row, rowIndex) => (
            <tr key={row.id || rowIndex} className="hover:bg-gray-50">
              {columns.map((col, colIdx) => (
                <td key={colIdx} className={`py-3 px-4 ${col.align === 'right' ? 'text-right' : ''}`}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={columns.length} className="py-3 px-4">
              <button onClick={onAddRow} className="flex items-center gap-2 text-sm font-medium text-[#b21c17] hover:text-red-800">
                <PlusCircle size={16} /> Add a line
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}