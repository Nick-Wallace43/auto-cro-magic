import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Sparkles, Zap, LineChart, Shield, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Transform Your Website Performance with AI-Powered CRO
          </h1>
          <p className="text-xl md:text-2xl text-[#94A3B8] mb-8 max-w-3xl mx-auto">
            Get instant, actionable insights to optimize your website's conversion rate using advanced AI analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/analyze">Try It Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <Link href="/features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#1E293B]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need for Better Conversions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#0F172A] border-[#4A5568]">
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-500 mb-4" />
                <CardTitle>Instant Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#94A3B8]">
                  Get comprehensive CRO insights in seconds using our advanced AI analysis engine.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#0F172A] border-[#4A5568]">
              <CardHeader>
                <LineChart className="h-8 w-8 text-green-500 mb-4" />
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#94A3B8]">
                  Track key performance indicators and identify optimization opportunities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#0F172A] border-[#4A5568]">
              <CardHeader>
                <Shield className="h-8 w-8 text-purple-500 mb-4" />
                <CardTitle>Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#94A3B8]">
                  Get actionable recommendations based on proven CRO strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Conversions?
          </h2>
          <p className="text-xl text-[#94A3B8] mb-8">
            Join thousands of businesses using AutoCRO Magic to optimize their websites.
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <Link href="/signup">Get Started Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 