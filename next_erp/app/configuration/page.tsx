import React from 'react';
import RightPanel from '../components/RightPanel';
import StatusFooter from '../components/StatusFooter';
import TopNavbar from '../components/TopNavbar';
import PageHeader from '../components/PageHeader';

export const ChartofAccount = () => {
  return (
    <>
            <TopNavbar menu={[{ label: "Chart of Accounts", url: "/configuration/chart-of-accounts" },

{ label: "Journal", url: "/configuration/journal" }

            ]} />
    
            {/* 3. CONTENT AREA & RIGHT PANEL */}
            <div className="flex flex-1 overflow-hidden">
              
              {/* Main Data Section */}
              <main className="flex-1 flex flex-col overflow-hidden bg-white">
                <PageHeader  create={{ url: "/configuration/chart-of-accounts/new" }}/>
               
                <StatusFooter  />
              </main>
    
              {/* 4. RIGHT SIDEBAR (Search & Filters) */}
              <RightPanel />
              
            </div>
            </>
  );
};

export default ChartofAccount;