import React from 'react';
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/Navigation'
import { Toaster } from 'sonner'
import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Auto CRO Magic</title>
        <meta name="description" content="Automated CRO analysis and recommendations" />
      </head>
      <body className="min-h-screen bg-[#0F172A] text-[#E2E8F0]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
} 