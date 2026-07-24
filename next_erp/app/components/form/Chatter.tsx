'use client';
import React from 'react';
import { Clock } from 'lucide-react';

interface Activity {
  id: string;
  author: string;
  timeAgo: string;
  type: 'message' | 'system' | 'note';
  content: React.ReactNode;
  avatarUrl?: string;
  initials?: string;
}

export function Chatter({ activities }: { activities: Activity[] }) {
  return (
    <div className="bg-[#fdf7f7] border-t border-gray-200 p-6">
      <div className="flex gap-4 mb-8 border-b border-gray-200 pb-4">
        <button className="bg-[#b21c17] hover:bg-red-800 text-white px-4 py-2 rounded-sm text-sm font-medium shadow-sm flex items-center gap-2">
          Send message
        </button>
        <button className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-sm text-sm font-medium flex items-center gap-2 transition-colors">
          Log note
        </button>
        <button className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-sm text-sm font-medium flex items-center gap-2 transition-colors">
          <Clock size={16} /> Schedule activity
        </button>
      </div>

      <div className="space-y-6 max-w-4xl">
        {activities.map((act) => (
          <div key={act.id} className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              {act.avatarUrl ? (
                <img src={act.avatarUrl} alt={act.author} className="w-8 h-8 rounded-full border border-gray-300 object-cover" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs border border-blue-200">
                  {act.initials || act.author.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900 text-sm">{act.author}</span>
                <span className="text-xs text-gray-400">• {act.timeAgo}</span>
              </div>
              {act.type === 'message' && (
                <div className="bg-[#fdf0f0] border border-red-50 text-gray-800 text-sm p-4 rounded-sm shadow-sm">
                  {act.content}
                </div>
              )}
              {act.type === 'system' && (
                <div className="border-l-2 border-gray-300 pl-3 py-1 text-sm text-gray-600 italic">
                  {act.content}
                </div>
              )}
              {act.type === 'note' && (
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 border border-gray-100 p-2 rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  {act.content}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}