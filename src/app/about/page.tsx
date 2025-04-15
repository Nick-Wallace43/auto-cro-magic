import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users2, Target, LineChart, Award } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    {
      icon: Users2,
      value: '10,000+',
      label: 'Active Users'
    },
    {
      icon: Target,
      value: '500,000+',
      label: 'Pages Analyzed'
    },
    {
      icon: LineChart,
      value: '30%',
      label: 'Average Improvement'
    },
    {
      icon: Award,
      value: '99%',
      label: 'Customer Satisfaction'
    }
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About AutoCRO Magic</h1>
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-xl text-[#94A3B8] text-center mb-8">
            We're on a mission to help businesses optimize their websites and increase conversions using the power of AI.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-[#1E293B] border-[#4A5568]">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-[#94A3B8]">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-[#94A3B8] mb-6">
            Founded in 2024, AutoCRO Magic was born from a simple observation: while businesses invest heavily in driving traffic to their websites, many struggle to convert that traffic into meaningful results.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
          <p className="text-[#94A3B8] mb-6">
            We combine cutting-edge AI technology with proven CRO principles to deliver actionable insights that help businesses optimize their websites for better performance and higher conversion rates.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-[#94A3B8] space-y-2 mb-6">
            <li>Data-driven decision making</li>
            <li>Continuous innovation</li>
            <li>Customer success</li>
            <li>Transparency and trust</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 