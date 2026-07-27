import React from 'react';
import Link from "next/link";

function ModuleLink({
  label,
  url,
  active,
}: {
  label: string;
  url: string;
  active: boolean;
}) {
  return (
    <Link
      href={url}
      className={`flex items-center h-full px-1 border-b-2 transition-colors ${
        active
          ? "border-[#cc1f1a] text-[#cc1f1a] font-semibold"
          : "border-transparent text-gray-600 hover:text-[#cc1f1a]"
      }`}
    >
      {label}
    </Link>
  );
}

import { Grid, Bell, Settings } from "lucide-react";

type MenuItem = {
  label: string;
  url: string;
};

export default function TopNavbar({
  menu,
}: {
  menu: MenuItem[];
}) {
  return (
    <header className="h-16 border-b border-red-100 flex items-center justify-between px-6 flex-shrink-0 bg-white w-full">
      <nav className="flex space-x-6 h-full">
        {menu.map((item) => (
          <ModuleLink
            key={item.url}
            label={item.label}
            url={item.url}
            active={false}
          />
        ))}
      </nav>

      <div className="flex items-center space-x-5 text-gray-600">
        <button className="hover:text-[#cc1f1a] transition-colors">
          <Grid size={18} />
        </button>

        <button className="hover:text-[#cc1f1a] transition-colors relative">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#cc1f1a] rounded-full"></span>
        </button>

        <button className="hover:text-[#cc1f1a] transition-colors">
          <Settings size={18} />
        </button>

        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
          <img
            src="https://i.pravatar.cc/100?img=5"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}