'use client';

import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar/>
      <div className={`h-full flex-grow`}>{children}</div>
      {/* TODO: add footer component here */}
    </div>
  );
};

export default Layout;
