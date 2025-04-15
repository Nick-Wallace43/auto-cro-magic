import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Perfect for trying out our features',
      features: [
        'Basic website analysis',
        '5 pages per month',
        'Core performance metrics',
        'Basic recommendations',
        'Email support'
      ]
    },
    {
      name: 'Pro',
      price: '$49',
      period: '/month',
      description: 'Best for growing businesses',
      features: [
        'Advanced website analysis',
        'Unlimited pages',
        'Detailed performance metrics',
        'AI-powered recommendations',
        'Priority support',
        'Custom reports',
        'Team collaboration'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantees',
        'Training sessions',
        'Custom features'
      ]
    }
  ];

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Simple, Transparent Pricing</h1>
        <p className="text-xl text-[#94A3B8] mb-12 text-center">
          Choose the plan that's right for your business
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={\`\${
                plan.highlighted 
                  ? 'bg-primary border-primary shadow-lg shadow-primary/20' 
                  : 'bg-[#1E293B] border-[#4A5568]'
              }\`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-[#94A3B8]">{plan.period}</span>}
                </div>
                <p className="text-[#94A3B8] mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={\`w-full mt-6 \${
                    plan.highlighted ? 'bg-white text-primary hover:bg-white/90' : ''
                  }\`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 