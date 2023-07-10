import { useUser } from '@/utils/useUser';
import TeamSwitcher from '@/components/team-switcher';
import { MainNav } from '@/components/main-nav';
import { Search } from '@/components/search';
import { UserNav } from '@/components/user-nav';
import Navbar from '@/components/ui/Navbar';

import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import s from '@/components/ui/Navbar/Navbar.module.css';
import { Icons } from './icons';


export const MainNavBar = () => {
  const { user } = useUser();

  return (
    <>
        <div className="border-b fixed w-full backdrop-blur-md bg-white/80 drop-shadow-sm">
          <div className="flex h-16 items-center px-4">
          <Link href="/" className={s.logo} aria-label="Logo">
              <Logo className='h-8' />
            </Link>
            <Icons.slash className='h-8 text-gray-100 px-1' />
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              {/* <Search /> */}
              <UserNav />
            </div>
          </div>
        </div>
    </>
  );
};
