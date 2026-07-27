"use client";

import React from "react";
import { List, LayoutGrid, Activity, Plus, Upload } from "lucide-react";
import Link from "next/link";

export default function PageHeader({ create }) {
  return (
    <div className="p-4 flex flex-col gap-4 border-b border-gray-100 flex-shrink-0 bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-900">Products</h1>

          <div className="flex border border-gray-300 rounded overflow-hidden">
            <button className="p-1.5 bg-gray-100 text-gray-800">
              <List size={16} />
            </button>
            <button className="p-1.5 bg-white text-gray-500 hover:bg-gray-50 border-l border-gray-300">
              <LayoutGrid size={16} />
            </button>
            <button className="p-1.5 bg-white text-gray-500 hover:bg-gray-50 border-l border-gray-300">
              <Activity size={16} />
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            href={create?.url || "#"}
            className="bg-[#cc1f1a] hover:bg-red-700 text-white px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2"
          >
            <Plus size={16} />
            Create
          </Link>

          {/* <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-1.5 rounded text-sm font-medium flex items-center gap-2">
            <Upload size={16} />
            Import
          </button> */}
        </div>
      </div>
    </div>
  );
}