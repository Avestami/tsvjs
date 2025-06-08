'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="bg-zinc-900 border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">
          TS vs JS
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className={`${pathname === '/' ? 'text-blue-400' : 'text-zinc-300 hover:text-white'} transition-colors`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/typescript-demo" 
                className={`${pathname === '/typescript-demo' ? 'text-blue-400' : 'text-zinc-300 hover:text-white'} transition-colors`}
              >
                TypeScript Demo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 