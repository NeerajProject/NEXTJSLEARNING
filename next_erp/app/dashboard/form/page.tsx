'use client';
import React, { useState } from 'react';
import { 
  FormGroup, 
  TextInput, 
  SelectionWidget, 
  Many2OneWidget, 
  DateWidget, 
  BooleanToggle 
} from '../../components/FormWidgets';
import { Save, X } from 'lucide-react';

export default function GeneralFormCall() {
  // 1. Define your dynamic state
  const [formData, setFormData] = useState({
    name: 'New Corporate Account',
    customer: 'Azure Interior',
    status: 'active',
    expirationDate: '2026-12-31',
    isTaxExempt: false,
    internalNotes: ''
  });

  // Generic change handler
  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving data payload:", formData);
    alert("Form saved! Check console for payload.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      
      {/* Form Container */}
      <div className="w-full max-w-4xl bg-white border border-gray-200 shadow-sm rounded-sm">
        
        {/* Form Header / Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#fdf7f7] border-b border-red-100">
          <h2 className="text-lg font-bold text-gray-900">General Information</h2>
          <div className="flex gap-2">
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 bg-[#b21c17] hover:bg-red-800 text-white px-4 py-1.5 rounded-sm text-sm font-medium transition-colors"
            >
              <Save size={16} /> Save
            </button>
            <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-1.5 rounded-sm text-sm font-medium transition-colors">
              <X size={16} /> Discard
            </button>
          </div>
        </div>

        {/* Form Body - Split into Two Columns */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
          
          {/* Left Column */}
          <div>
            <FormGroup label="Account Name" required>
              <TextInput 
                value={formData.name} 
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="e.g. Acme Corp"
              />
            </FormGroup>

            <FormGroup label="Primary Customer">
              <Many2OneWidget 
                value={formData.customer}
                onChange={(e) => handleChange('customer', e.target.value)}
                onOpenRecord={() => alert(`Opening record for ${formData.customer}`)}
              />
            </FormGroup>

            <FormGroup label="Tax Exempt">
              <div className="mt-1">
                <BooleanToggle 
                  checked={formData.isTaxExempt}
                  onChange={(val) => handleChange('isTaxExempt', val)}
                  label={formData.isTaxExempt ? "Yes" : "No"}
                />
              </div>
            </FormGroup>
          </div>

          {/* Right Column */}
          <div>
            <FormGroup label="Status">
              <SelectionWidget 
                value={formData.status}
                onChange={(e) => handleChange('status', e.target.value)}
                options={[
                  { label: 'Active', value: 'active' },
                  { label: 'Pending Review', value: 'pending' },
                  { label: 'Closed', value: 'closed' }
                ]}
              />
            </FormGroup>

            <FormGroup label="Expiration Date">
              <DateWidget 
                value={formData.expirationDate}
                onChange={(e) => handleChange('expirationDate', e.target.value)}
              />
            </FormGroup>

            <FormGroup label="Internal Notes">
              <TextInput 
                value={formData.internalNotes} 
                onChange={(e) => handleChange('internalNotes', e.target.value)}
                placeholder="Add a brief note..."
              />
            </FormGroup>
          </div>

        </div>
      </div>
    </div>
  );
}