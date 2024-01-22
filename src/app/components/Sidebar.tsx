'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import SidebarItem from './SidebarItem';

type SidebarProps = {};

const Sidebar = (props: SidebarProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleExitClick = () => {
    router.push('/');
  };

  return (
    <aside className=" fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mb-11 ms-auto"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul className="space-y-7">
          <SidebarItem
            current={pathname === '/dashboard'}
            pathname={'/dashboard'}
            src="/icons/squares.svg"
            alt="dashboard icon"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            current={pathname === '/companies'}
            pathname="/companies"
            src="/icons/briefcase.svg"
            alt="companies icon"
          >
            Companies
          </SidebarItem>
        </ul>
        <button
          className="flex items-center gap-2 p-6 mt-auto mx-auto"
          onClick={handleExitClick}
        >
          <Image
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
            width={18}
            height={18}
          />
        </button>
        <span className="font-medium text-white">Exit</span>
      </div>
    </aside>
  );
};

export default Sidebar;