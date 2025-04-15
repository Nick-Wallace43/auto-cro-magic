'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <nav className="flex items-center space-x-4">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link href="/analyze" className="text-sm font-medium transition-colors hover:text-primary">
        Analyze
      </Link>
      <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
        About
      </Link>
      <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
        Contact
      </Link>
    </nav>
  );
} 