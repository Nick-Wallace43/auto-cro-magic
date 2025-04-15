import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Auto CRO Magic - Dashboard',
  description: 'Your all-in-one CRO optimization platform',
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Auto CRO Magic</span>
          </Link>
          <nav className="flex flex-1 items-center justify-end space-x-4">
            {/* Add navigation items here */}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Optimize your web presence <br className="hidden sm:inline" />
              with data-driven insights
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Powerful CRO tools and analytics to help you understand your users,
              optimize your pages, and grow your business.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/dashboard"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Get Started
            </Link>
            <Link
              href="/docs"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Documentation
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
} 