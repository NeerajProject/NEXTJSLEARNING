import React from 'react';
import Sidebar from '../../components/Sidebar';
import TopNavbar from '../../components/TopNavbar';
import PageHeader from '../../components//PageHeader';
import DataTable from '../../components/DataTable';
import RightPanel from '../../components/RightPanel';
import StatusFooter from '../../components/StatusFooter';

export default function NexusERPLayout() {
  return (
    <div className="flex h-screen w-full bg-white text-gray-800 font-sans text-sm overflow-hidden selection:bg-red-100">
      
      {/* 1. SIDEBAR NAVIGATION */}
      <Sidebar />

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex flex-col flex-1 min-w-0">
        
        {/* 2. TOP NAVBAR */}
        <TopNavbar />

        {/* 3. CONTENT AREA & RIGHT PANEL */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Main Data Section */}
          <main className="flex-1 flex flex-col overflow-hidden bg-white">
            <PageHeader />
            <DataTable />
            <StatusFooter />
          </main>

          {/* 4. RIGHT SIDEBAR (Search & Filters) */}
          <RightPanel />
          
        </div>
      </div>
    </div>
  );
}