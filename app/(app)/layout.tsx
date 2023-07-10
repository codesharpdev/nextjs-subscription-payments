'use client';
import '@/styles/globals.css';
import { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { MyUserContextProvider } from '@/utils/useUser';
import { useEffect, useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

import supabaseClient from '@/utils/supabase-browser';

import { Database } from '@/types_db';
import Layout from '@/components/Layout';
import TeamSwitcher from '@/components/team-switcher';
import { MainNav } from '@/components/main-nav';
import { Search } from '@/components/search';
import { UserNav } from '@/components/user-nav';
import Navbar from '@/components/ui/Navbar';
import { MainNavBar } from '@/components/main-navbar';


const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <SessionContextProvider supabaseClient={supabaseClient}>
            <MyUserContextProvider>
                <div className="relative flex min-h-screen flex-col  bg-slate-100 ">
                  <MainNavBar/>
                  <div className="flex-1 w-9/12 mx-auto sm:pt-36 sm:pb-16">{children}</div>
                </div>
                <TailwindIndicator />
            </MyUserContextProvider>
          </SessionContextProvider>
        </body>
      </html>
    </>
  );
}
