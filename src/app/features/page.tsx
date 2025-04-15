import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Get instant, AI-driven insights about your website\'s performance and conversion potential.'
    },
    {
      title: 'Performance Metrics',
      description: 'Track key performance indicators like load time, interactivity, and visual stability.'
    },
    {
      title: 'SEO Optimization',
      description: 'Comprehensive SEO analysis with actionable recommendations for better search rankings.'
    },
    {
      title: 'CRO Best Practices',
      description: 'Learn from proven conversion rate optimization strategies and implement them on your site.'
    },
    {
      title: 'Competitive Analysis',
      description: 'See how your website stacks up against competitors and industry benchmarks.'
    },
    {
      title: 'Custom Reports',
      description: 'Generate detailed reports with specific recommendations for your website.'
    }
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Features</h1>
        <p className="text-xl text-[#94A3B8] mb-12 text-center">
          Everything you need to optimize your website's conversion rate
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#1E293B] border-[#4A5568]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#94A3B8]">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 