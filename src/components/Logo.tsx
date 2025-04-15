'use client';

import React from 'react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="text-xl font-bold">AutoCRO Magic</span>
    </Link>
  );
}
