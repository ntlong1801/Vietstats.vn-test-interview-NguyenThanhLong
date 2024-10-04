'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

import { Header, Sidebar } from '@/components/layout';

type DashboardLayoutProps = {
  children: ReactNode;
};
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);

  const onChangeSidebar = () => {
    setSideBarOpen(prev => !prev);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-b from-[#FFF6E9] to-[#FFFFFF]">
      <Header onChangeSidebar={onChangeSidebar} />
      <div className="flex h-[calc(100vh-80px)] w-full">
        <Sidebar isOpen={sideBarOpen} />
        <div className="size-full overflow-x-hidden p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
