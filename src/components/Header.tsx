'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['About', 'Topics', 'Who Will Attend', 'Why Attend', 'Register'];

  return (
    <>
      <header className="z-50 glass backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/">
            <div className="text-2xl font-bold tracking-wider">
              <Image
                src="/logo.png"
                alt="4th Annual Future Banks Summit & Awards KSA 2023"
                width={280}
                height={20}
                priority
              />
            </div>
          </a>

          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={
                  item === 'Register'
                    ? 'https://www.ksa.futurebanksummit.com'
                    : `#${item.toLowerCase().replace(/\s+/g, '-')}`
                }
                target={item === 'Register' ? '_blank' : undefined}
                rel={item === 'Register' ? 'noopener noreferrer' : undefined}
                className="text-lg font-medium hover:text-purple-400 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-white"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>
      </header>

      
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-gradient-to-b from-slate-900 to-purple-900/90 shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="text-2xl font-bold tracking-wider">
                  <Image
                    src="/logo.png"
                    alt="4th Annual Future Banks Summit & Awards KSA 2023"
                    width={280}
                    height={20}
                    priority
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-purple-300"
                >
                  <XMarkIcon className="h-9 w-9" />
                </button>
              </div>

              
              <nav className="flex-1 px-8 pt-12 space-y-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={
                      item === 'Register'
                        ? 'https://www.ksa.futurebanksummit.com'
                        : `#${item.toLowerCase().replace(/\s+/g, '-')}`
                    }
                    target={item === 'Register' ? '_blank' : undefined}
                    rel={item === 'Register' ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-2xl font-medium text-white hover:text-purple-300 transition"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              
              <div className="p-8 border-t border-white/10">
                <a
                  href="https://www.ksa.futurebanksummit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-center py-4 rounded-full text-xl font-bold transition"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}