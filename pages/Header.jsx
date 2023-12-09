// components/Header.js

import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NavLinks } from '/components/data/Navlinks';
import ColorModeToggle from '/components/ColorModeToggle';
import NavlinkDropMenu from '../components/NavlinkDropMenu';

const Header = () => {
  const router = useRouter();

  return (
      <header className="fixed w-full pq2 z-50 dark:bg-[rgba(17, 17, 17,0.29)] bg-[rgba(249, 250, 251,0.30)] backdrop-blur-lg header overflow-y-auto">
        <div className="mx-auto max-w-4xl">
          <nav className="flex items-center gap-3 text-base m-3">
            <Link href="/" className="group">
              <h2 className="font-sughoiy font-bold text-xl flex tracking-tighter items-center notranslate text-radish-red dark:text-darkish-purple">
                Ayl&thinsp;Rose
              </h2>
            </Link>
            <div className="headernav ml-1 text-lg hidden md:inline-flex">
              {NavLinks.map((links) => (
                  <Link
                      key={links.link}
                      aria-label={links.title}
                      className={`${
                          links.title === '' ? 'hidden' : ''
                      } px-2 hover:underline underline-offset-[8px] ${
                          router.pathname === links.link
                              ? 'font-extrabold text-purple-500'
                              : 'font-normal'
                      }`}
                      href={links.link}
                  >
                    {links.title}
                  </Link>
              ))}
            </div>
            <div className="flex-1"></div>
            <div className="justify-end">
              <ColorModeToggle />
            </div>
            <div className="">
              <NavlinkDropMenu />
            </div>
          </nav>
        </div>
      </header>
  );
};

export default Header;
