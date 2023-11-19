import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/nav/navbar.component';
import TopBar from '@/components/nav/topbar.component';

// export const runtime = 'nodejs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Critter',
  description: 'Twitter-like clone using server sent events for messaging',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`grid grid-cols-6 grid-rows-6 h-screen ${inter.className}`}>
        <TopBar className="row-start-1 row-end-2 col-span-6 sm:col-start-2 sm:col-span-5" />
        <Navbar className="row-start-6 col-span-6 sm:col-span-1 sm:row-start-1 sm:row-span-6" />
        {children}
      </body>
    </html>
  );
}
