import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

function DataRow({ id, name, price, cost }: { id: string, name: string, price: string, cost: string }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors group">
      <td className="p-3"><input type="checkbox" className="rounded text-[#cc1f1a] focus:ring-[#cc1f1a] border-gray-300" /></td>
      <td className="p-3 font-medium text-[#cc1f1a] cursor-pointer hover:underline">{id}</td>
      <td className="p-3 text-gray-800">{name}</td>
      <td className="p-3 text-gray-700">{price}</td>
      <td className="p-3 text-gray-700">{cost}</td>
    </tr>
  );
}

export default function DataTable() {
  return (
    <div className="flex-1 overflow-auto bg-white">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead className="bg-[#fdf8f8] sticky top-0 border-b border-red-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
          <tr>
            <th className="p-3 w-10"><input type="checkbox" className="rounded text-[#cc1f1a] focus:ring-[#cc1f1a]" /></th>
            <th className="p-3">Internal Reference</th>
            <th className="p-3">Name</th>
            <th className="p-3">Sales Price</th>
            <th className="p-3">Cost</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          
          {/* Group 1 */}
          <tr className="bg-[#fdf8f8] group cursor-pointer hover:bg-red-50/50">
            <td className="p-2 pl-3"><ChevronDown size={16} className="text-gray-400" /></td>
            <td colSpan={4} className="p-2 font-medium text-gray-800">
              Electronics <span className="text-gray-400 font-normal text-xs ml-2">(12 items)</span>
            </td>
          </tr>
          <DataRow id="ELC-001-NB" name="Precision X1 Laptop 15&quot;" price="$1,299.00" cost="$850.00" />
          <DataRow id="ELC-042-MO" name="4K UltraWide Monitor 34&quot;" price="$649.00" cost="$410.00" />
          <DataRow id="ELC-109-KB" name="Mechanical Wireless Keyboard" price="$159.00" cost="$65.00" />

          {/* Group 2 */}
          <tr className="bg-[#fdf8f8] group cursor-pointer hover:bg-red-50/50">
            <td className="p-2 pl-3"><ChevronRight size={16} className="text-gray-400" /></td>
            <td colSpan={4} className="p-2 font-medium text-gray-800">
              Office Furniture <span className="text-gray-400 font-normal text-xs ml-2">(5 items)</span>
            </td>
          </tr>
          <DataRow id="FURN-001" name="Ergonomic Task Chair (V2)" price="$399.00" cost="$180.00" />
          <DataRow id="FURN-022" name="Standing Desk Pro XL" price="$899.00" cost="$550.00" />
          <DataRow id="CONS-500" name="Whiteboard Marker Set (Bulk)" price="$25.00" cost="$8.50" />

        </tbody>
      </table>
    </div>
  );
}