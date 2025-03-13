"use client";
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 shadow-lg">
  
      <div className="flex items-center justify-between">
        
        <Image src={'/logo.svg'} width={140} height={80} alt="logo" className="cursor-pointer" />

       
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

     
        <ul className={`md:flex gap-8 ${isMenuOpen ? 'flex' : 'hidden'} md:block`}>
          <li
            className={`cursor-pointer text-lg font-medium transition-all duration-300 hover:text-indigo-400 ${path === '/dashboard' && 'text-indigo-400 font-semibold'}`}
          >
            Dashboard
          </li>
          <li
            className={`cursor-pointer text-lg font-medium transition-all duration-300 hover:text-indigo-400 ${path === '/dashboard/questions' && 'text-indigo-400 font-semibold'}`}
          >
            Questions
          </li>
          <li
            className={`cursor-pointer text-lg font-medium transition-all duration-300 hover:text-indigo-400 ${path === '/dashboard/upgrade' && 'text-indigo-400 font-semibold'}`}
          >
            Home
          </li>
          <li
            className={`cursor-pointer text-lg font-medium transition-all duration-300 hover:text-indigo-400 ${path === '/dashboard/how it works' && 'text-indigo-400 font-semibold'}`}
          >
            How it works?
          </li>
        </ul>

        
        <div className="flex items-center">
          <UserButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
