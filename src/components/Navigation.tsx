'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <nav className="bg-[#1E293B] border-b border-[#4A5568]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-[#E2E8F0]">AutoCRO Magic</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/features" className="text-[#94A3B8] hover:text-[#E2E8F0] px-3 py-2 text-sm font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-[#94A3B8] hover:text-[#E2E8F0] px-3 py-2 text-sm font-medium">
                Pricing
              </Link>
              <Link href="/about" className="text-[#94A3B8] hover:text-[#E2E8F0] px-3 py-2 text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost" className="text-[#94A3B8] hover:text-[#E2E8F0]" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button className="ml-4" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 