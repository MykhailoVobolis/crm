'use client';

import React from 'react';
import Image from 'next/image';
import SidebarItem from './sidebar-item';
import { usePathname, useRouter } from 'next/navigation';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  // Отримання об'єкта router, який містить інформацію про поточний маршрут та надає методи для програмної навігації всередині додатку.
  const router = useRouter();
  // Визначення поточного маршруту url
  const pathname = usePathname();

  const handleExitClick = () => {
    // Програмна навігація на новий url. Перенаправлює не сторінку '/'
    router.push('/');
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen">
      <div className="flex flex-col h-full overflow-y-auto bg-gray-900">
        <Image
          className="py-8 mb-11 mx-auto"
          width={122}
          height={25}
          src="/icons/logo.svg"
          alt="logo"
        />
        <ul className="space-y-7">
          <SidebarItem
            current={pathname === '/dashboard'}
            pathname="/dashboard"
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
            width={18}
            height={18}
            src="/icons/arrow-left-on-rectangle.svg"
            alt="exit icon"
          />
          <span className="font-medium text-white">Exit</span>
        </button>
      </div>
    </aside>
  );
}
