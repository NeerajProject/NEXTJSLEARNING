'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Layers3,
  BarChart3,
  Settings,
  PieChart,
  Truck,
  HelpCircle,
  LogOut,
} from "lucide-react";

const menus = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Income",
    href: "/income",
    icon: Layers3,
  },
  {
    label: "Expense",
    href: "/expense",
    icon: BarChart3,
  },
  {
    label: "Fund Transfer",
    href: "/fund-transfer", // Fixed URL spacing
    icon: Settings,
  },
  {
    label: "Investments",
    href: "/investments",
    icon: PieChart,
  },
  {
    label: "Liability",
    href: "/liability",
    icon: PieChart,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: PieChart,
  },
  {
    label: "Configuration",
    href: "/configuration",
    icon: Truck,
  },
];

function SidebarItem({
  label,
  href,
  icon: Icon,
  active,
}: {
  label: string;
  href: string;
  icon: React.ElementType; // Better type safety than 'any'
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
      flex items-center gap-3
      h-11
      rounded-lg
      px-4
      transition-all
      duration-200
      ${
        active
          ? "bg-[#d61f0f] text-white shadow-sm"
          : "text-gray-700 hover:bg-red-50 hover:text-[#d61f0f]"
      }
    `}
    >
      <Icon size={18} strokeWidth={2} />
      <span className="font-medium text-[14px]">
        {label}
      </span>
    </Link>
  );
}

export default function Sidebar() {
  const pathname = usePathname(); // Get current URL path

  return (
    <aside className="w-64 bg-[#fdf7f7] border-r border-red-100 flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded bg-[#d61f0f] text-white flex items-center justify-center font-bold">
            N
          </div>
          <div>
            <h2 className="font-bold text-lg leading-none">
              Nexus ERP
            </h2>
            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              Enterprise Suite
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 mt-2">
        <nav className="space-y-1">
          {menus.map((item) => {
            // Dynamically check if this item's href matches the current URL
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            
            return (
              <SidebarItem
                key={item.label}
                label={item.label}
                href={item.href}
                icon={item.icon}
                active={isActive}
              />
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-red-100 p-3 mt-auto">
        <SidebarItem
          label="Help"
          href="/help"
          icon={HelpCircle}
          active={pathname === "/help"}
        />
        <SidebarItem
          label="Logout"
          href="/logout"
          icon={LogOut}
        />
      </div>
    </aside>
  );
}