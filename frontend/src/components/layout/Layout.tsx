import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Footer } from './LayoutContent';
import { ChatBot } from '../ui/ChatBot';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const isDashboard = pathname === '/admin' || pathname === '/portal';

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isDashboard && <Footer />}
      {!isDashboard && <ChatBot />}
    </div>
  );
};
