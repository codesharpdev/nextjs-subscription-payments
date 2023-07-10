'use client';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import './globals.css';
import { Inter } from 'next/font/google';
import { MyUserContextProvider } from '@/utils/useUser';
import supabaseClient from '@/utils/supabase-browser';
import Navbar from '@/components/ui/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
            {children}
      </body>
    </html>
  );
}
