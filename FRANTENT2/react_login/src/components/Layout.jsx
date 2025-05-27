// /home/ubuntu/app/react_login/src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, includeSidebar = false }) => {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        {includeSidebar && (
          <div className="hidden md:block h-[calc(100vh-64px)]">
            <Sidebar />
          </div>
        )}
        
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;