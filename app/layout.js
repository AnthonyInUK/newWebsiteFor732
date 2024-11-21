// app/layout.js
import React from 'react';
import { SidebarController } from '../components/sideBar/SidebarController';
import './globals.css';

export const metadata = {
  title: 'Final project for cmpt732',
  description: 'This is a Next.js app with a persistent sidebar.',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="flex h-full">
          {/* 侧边栏部分 */}
          <div className="w-64 bg-neutral-900 dark:bg-neutral-800 text-white">
            <SidebarController />
          </div>
          {/* 主内容部分 */}
          <div className="flex-1 p-4 bg-gray-50 dark:bg-neutral-900">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
