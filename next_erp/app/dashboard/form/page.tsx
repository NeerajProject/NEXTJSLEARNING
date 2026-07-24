'use client';
import React, { useState } from 'react';
import { FileText, Truck, CalendarDays } from 'lucide-react';
import { FormRenderer } from "../../components/form/FormRenderer";
import { FormSection } from "../../components/form/FormSection";
import { FormField } from "../../components/form/FormField";
import { Many2OneWidget } from "../../components/form/Many2OneWidget";
import { DateWidget } from "../../components/form/DateWidget";
import { SelectionWidget } from "../../components/form/SelectionWidget";
import { One2ManyGrid } from "../../components/form/One2ManyGrid";

export default function SalesOrderPage() {
  const statuses = ['Quotation', 'Quotation Sent', 'Sales Order', 'Done'];
  const currentStatus = 'Sales Order';

  const [formData, setFormData] = useState({
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

  const smartButtons = [
    { icon: <FileText size={16} className="text-[#b21c17]" />, label: 'INVOICES' },
    { icon: <Truck size={16} className="text-[#b21c17]" />, label: 'DELIVERY' },
    { icon: <CalendarDays size={16} className="text-[#b21c17]" />, label: 'SUBS' },
  ];

  const orderLineColumns = [
    { key: 'product', header: 'Product', render: (item: any) => <span className="font-medium text-[#b21c17] cursor-pointer hover:underline">{item.product}</span> },
    { key: 'description', header: 'Description', render: (item: any) => <span className="text-gray-600 italic">{item.description}</span> },
    { key: 'quantity', header: 'Quantity', align: 'right' as const, render: (item: any) => item.quantity.toFixed(2) },
    { key: 'unitPrice', header: 'Unit Price', align: 'right' as const, render: (item: any) => `$${item.unitPrice.toFixed(2)}` },
    { key: 'subtotal', header: 'Subtotal', align: 'right' as const, render: (item: any) => `$${item.subtotal.toFixed(2)}` },
  ];

  const untaxedAmount = lines.reduce((acc, curr) => acc + curr.subtotal, 0);
  const taxes = untaxedAmount * 0.15;
  const total = untaxedAmount + taxes;

  const orderLinesTabContent = (
    <div>
      <One2ManyGrid 
        columns={orderLineColumns} 
        data={lines} 
        onAddRow={() => alert('Add product clicked!')} 
      />
      <div className="mt-8 flex justify-end">
        <div className="w-72 space-y-3 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Untaxed Amount:</span>
            <span>${untaxedAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Taxes (15%):</span>
            <span>${taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-900 border-t border-gray-200 pt-3">
            <span>Total:</span>
            <span className="text-[#b21c17]">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { label: 'Order Lines', content: orderLinesTabContent },
    { label: 'Optional Products', content: <div className="text-sm text-gray-500 italic">No optional products configured.</div> },
    { label: 'Other Info', content: <div className="text-sm text-gray-500 italic">Additional metadata info goes here.</div> },
  ];

  const activities = [
    {
      id: '1',
      author: 'Marc Demo',
      timeAgo: '2 hours ago',
      type: 'message' as const,
      avatarUrl: 'https://i.pravatar.cc/150?img=11',
      content: <p>The customer requested to add one more acoustic panel if possible before shipping. I&apos;ve updated the order lines.</p>
    },
    {
      id: '2',
      author: 'System',
      timeAgo: '3 hours ago',
      type: 'note' as const,
      initials: 'S',
      content: <span>Order Lines changed by Marc Demo: Acoustic Panel Blue <i>(11.00 &rarr; 12.00)</i></span>
    },
    {
      id: '3',
      author: 'Nexus Assistant',
      timeAgo: 'Yesterday',
      type: 'system' as const,
      initials: 'N',
      content: <p>Quotation converted to Sales Order automatically after customer digital signature.</p>
    }
  ];

  return (
    <FormRenderer
      statuses={statuses}
      currentStatus={currentStatus}
      recordType="Sales Order"
      recordNumber="S00042"
      smartButtons={smartButtons}
      tabs={tabs}
      activities={activities}
    >
      {/* Injected Form Body Inside FormHeader */}
      <FormSection columns={2}>
        <div className="space-y-2">
          <FormField label="Customer">
            <Many2OneWidget 
              value={formData.customer} 
              onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
              onOpenRecord={() => alert('Opening customer profile')}
            />
          </FormField>
          <FormField label="Invoice Address">
            <span className="text-sm text-gray-800">{formData.invoiceAddress}</span>
          </FormField>
          <FormField label="Delivery Address">
            <span className="text-sm text-gray-800">{formData.deliveryAddress}</span>
          </FormField>
        </div>

        <div className="space-y-2">
          <FormField label="Expiration Date">
            <DateWidget 
              value={formData.expirationDate} 
              onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
            />
          </FormField>
          <FormField label="Payment Terms">
            <SelectionWidget 
              value={formData.paymentTerms}
              onChange={(e) => setFormData({ ...formData, paymentTerms: e.target.value })}
              options={[
                { label: '15 Days', value: '15 Days' },
                { label: '30 Days', value: '30 Days' },
                { label: 'Immediate Payment', value: 'Immediate' }
              ]}
            />
          </FormField>
        </div>
      </FormSection>
    </FormRenderer>
  );
}