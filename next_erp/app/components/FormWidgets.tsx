'use client';
import React, { useState } from 'react';
import { 
  Save, 
  X, 
  Printer, 
  FileText, 
  Truck, 
  CalendarDays, 
  ExternalLink, 
  Calendar, 
  ChevronDown, 
  PlusCircle, 
  Clock 
} from 'lucide-react';

// --- SUB-WIDGETS & COMPONENTS ---

function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-3">
      <label className="w-32 text-sm font-semibold text-gray-600">{label}</label>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function StatButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center justify-center border border-gray-300 rounded w-20 h-14 bg-white hover:bg-gray-50 transition-colors shadow-sm">
      {icon}
      <span className="text-[10px] uppercase font-semibold text-gray-600 mt-1">{label}</span>
    </button>
  );
}

// --- MAIN INTEGRATED PAGE COMPONENT ---

export default function SalesOrderFormView() {
  const STATUSES = ['Quotation', 'Quotation Sent', 'Sales Order', 'Done'];
  const currentStatus = 'Sales Order';

  const [activeTab, setActiveTab] = useState('Order Lines');
  
  // Dynamic Form State utilizing the general widgets
  const [formData, setFormData] = useState({
    orderNumber: 'S00042',
    customer: 'Azure Interior',
    invoiceAddress: '4566 Blue Street, Los Angeles, CA',
    deliveryAddress: '4566 Blue Street, Los Angeles, CA',
    expirationDate: '31/12/2023',
    paymentTerms: '15 Days',
  });

  const [lines, setLines] = useState([
    { id: '1', product: 'Office Chair Black', description: 'Ergonomic swivel chair with lumbar support', quantity: 4.00, unitPrice: 245.00, subtotal: 980.00 },
    { id: '2', product: 'Meeting Table (Large)', description: 'Solid oak top, black steel frame (240x120cm)', quantity: 1.00, unitPrice: 1200.00, subtotal: 1200.00 },
    { id: '3', product: 'Acoustic Panel Blue', description: 'Wall mounted sound absorbing panel', quantity: 12.00, unitPrice: 85.00, subtotal: 1020.00 },
  ]);

  const untaxedAmount = lines.reduce((acc, curr) => acc + curr.subtotal, 0);
  const taxes = untaxedAmount * 0.15;
  const total = untaxedAmount + taxes;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-50 overflow-hidden font-sans">
      
      {/* 1. FORM TOOLBAR & STATUS PIPELINE */}
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

        {/* Status Bar Widget */}
        <div className="flex items-center bg-gray-100 rounded-sm overflow-hidden text-sm border border-gray-200">
          {STATUSES.map((status, index) => {
            const isActive = status === currentStatus;
            const isPassed = STATUSES.indexOf(currentStatus) > index;
            
            return (
              <div 
                key={status}
                className={`
                  px-4 py-1.5 relative flex items-center
                  ${isActive ? 'bg-[#b21c17] text-white font-medium' : ''}
                  ${isPassed ? 'text-gray-800 bg-white' : ''}
                  ${!isActive && !isPassed ? 'text-gray-400 bg-gray-100' : ''}
                  ${index !== 0 ? 'pl-6' : ''}
                `}
              >
                {index !== 0 && (
                  <div className={`absolute left-0 w-4 h-4 border-t border-r border-gray-200 transform rotate-45 -translate-x-2 ${isActive ? 'border-[#b21c17] bg-[#b21c17]' : isPassed ? 'bg-white' : 'bg-gray-100'}`}></div>
                )}
                <span className="relative z-10">{status}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. SCROLLABLE CONTENT BODY */}
      <div className="flex-1 overflow-y-auto">
        <div className="bg-white border-l border-r border-gray-200 shadow-sm mx-auto min-h-full max-w-6xl">
          
          {/* HEADER SECTION */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-end gap-2 mb-4">
              <StatButton icon={<FileText size={16} className="text-[#b21c17]" />} label="INVOICES" />
              <StatButton icon={<Truck size={16} className="text-[#b21c17]" />} label="DELIVERY" />
              <StatButton icon={<CalendarDays size={16} className="text-[#b21c17]" />} label="SUBS" />
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Sales Order</h2>
              <h1 className="text-3xl font-extrabold text-gray-900">{formData.orderNumber}</h1>
            </div>

            {/* General Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              <div className="space-y-2">
                <FormGroup label="Customer">
                  <div className="flex items-center border-b border-gray-300 pb-1">
                    <input 
                      type="text" 
                      value={formData.customer}
                      onChange={(e) => setFormData({...formData, customer: e.target.value})}
                      className="w-full bg-transparent outline-none text-gray-900 font-medium text-sm"
                    />
                    <ExternalLink size={14} className="text-[#b21c17] cursor-pointer" />
                  </div>
                </FormGroup>

                <FormGroup label="Invoice Address">
                  <span className="text-sm text-gray-800">{formData.invoiceAddress}</span>
                </FormGroup>

                <FormGroup label="Delivery Address">
                  <span className="text-sm text-gray-800">{formData.deliveryAddress}</span>
                </FormGroup>
              </div>

              <div className="space-y-2">
                <FormGroup label="Expiration Date">
                  <div className="flex items-center justify-between border border-gray-300 rounded px-3 py-1.5 bg-white shadow-sm">
                    <span className="text-sm text-gray-800">{formData.expirationDate}</span>
                    <Calendar size={14} className="text-gray-400" />
                  </div>
                </FormGroup>

                <FormGroup label="Payment Terms">
                  <div className="flex items-center justify-between border border-gray-300 rounded px-3 py-1.5 bg-white shadow-sm">
                    <span className="text-sm text-gray-800">{formData.paymentTerms}</span>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                </FormGroup>
              </div>
            </div>
          </div>

          {/* NOTEBOOK TABS & DATA GRID */}
          <div className="bg-white">
            <div className="flex border-b border-gray-200 px-6 pt-4 space-x-6">
              {['Order Lines', 'Optional Products', 'Other Info'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm font-medium transition-colors relative ${
                    activeTab === tab ? 'text-[#b21c17]' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                  {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#b21c17]"></div>}
                </button>
              ))}
            </div>

            <div className="p-6">
              {activeTab === 'Order Lines' && (
                <div>
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#fdf7f7] border-b border-gray-200 text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
                      <tr>
                        <th className="py-3 px-4 w-1/4">Product</th>
                        <th className="py-3 px-4 w-1/3">Description</th>
                        <th className="py-3 px-4 text-right">Quantity</th>
                        <th className="py-3 px-4 text-right">Unit Price</th>
                        <th className="py-3 px-4 text-right">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {lines.map((line) => (
                        <tr key={line.id} className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-[#b21c17] cursor-pointer hover:underline">{line.product}</td>
                          <td className="py-3 px-4 text-gray-600 italic">{line.description}</td>
                          <td className="py-3 px-4 text-right text-gray-800">{line.quantity.toFixed(2)}</td>
                          <td className="py-3 px-4 text-right text-gray-800">{formatCurrency(line.unitPrice)}</td>
                          <td className="py-3 px-4 text-right font-medium text-gray-900">{formatCurrency(line.subtotal)}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan={5} className="py-3 px-4">
                          <button className="flex items-center gap-2 text-sm font-medium text-[#b21c17] hover:text-red-800">
                            <PlusCircle size={16} /> Add a product
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Calculations Total Box */}
                  <div className="mt-8 flex justify-end">
                    <div className="w-72 space-y-3 text-sm">
                      <div className="flex justify-between text-gray-600">
                        <span>Untaxed Amount:</span>
                        <span>{formatCurrency(untaxedAmount)}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Taxes (15%):</span>
                        <span>{formatCurrency(taxes)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-3">
                        <span>Total:</span>
                        <span className="text-[#b21c17]">{formatCurrency(total)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 3. CHATTER & ACTIVITY LOG SECTION */}
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

            {/* Activity Stream Feed */}
            <div className="space-y-6 max-w-4xl">
              <div className="flex gap-4">
                <img src="https://i.pravatar.cc/150?img=11" alt="Marc Demo" className="w-8 h-8 rounded-full border border-gray-300 object-cover mt-1" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 text-sm">Marc Demo</span>
                    <span className="text-xs text-gray-400">• 2 hours ago</span>
                  </div>
                  <div className="bg-[#fdf0f0] border border-red-50 text-gray-800 text-sm p-4 rounded-sm shadow-sm">
                    The customer requested to add one more acoustic panel if possible before shipping. I&apos;ve updated the order lines.
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs border border-blue-200 mt-1">S</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 text-sm">System</span>
                    <span className="text-xs text-gray-400">• 3 hours ago</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 border border-gray-100 p-2 rounded-sm">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    Order Lines changed by Marc Demo: Acoustic Panel Blue <i>(11.00 &rarr; 12.00)</i>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs border border-amber-200 mt-1">N</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 text-sm">Nexus Assistant</span>
                    <span className="text-xs text-gray-400">• Yesterday</span>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3 py-1 text-sm text-gray-600 italic">
                    Quotation converted to Sales Order automatically after customer digital signature.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}