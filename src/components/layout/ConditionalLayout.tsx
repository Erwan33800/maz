'use client';

import { usePathname } from 'next/navigation';
import GlobalNav from './GlobalNav';
import Footer from './Footer';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {!isHomePage && <GlobalNav />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}