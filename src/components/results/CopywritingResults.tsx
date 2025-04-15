import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, BadgeAlert, CheckCircle, Wand2, CheckCircle2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface CopywritingResultsProps {
  data: {
    readabilityScore: number;
    recommendations: Array<{
      title: string;
      description: string;
      priority: 'high' | 'medium' | 'low';
      implementation: string[];
      impact: string;
    }>;
  };
}

const CopywritingResults: React.FC<CopywritingResultsProps> = ({ data }) => {
  return (
    <div className="space-y-8">
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Headline Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div className="flex-1">
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Current H1: "The Everyday Shirt"</h4>
                <p className="text-lg text-[#E2E8F0] mb-3">
                  Your current headline is generic and doesn't communicate unique value or benefits. It lacks emotional appeal and specificity.
                </p>
                <div className="bg-[#2D3748] p-4 rounded-lg mb-4">
                  <h5 className="text-lg font-medium text-[#E2E8F0] mb-2">Suggested Improvements:</h5>
                  <ul className="list-disc pl-6 space-y-2 text-[#E2E8F0]">
                    <li className="text-lg">"The Ultra-Comfortable Everyday Shirt | 100% Organic Cotton"</li>
                    <li className="text-lg">"Premium Everyday Shirt: Wrinkle-Resistant & All-Day Comfort"</li>
                  </ul>
                </div>
                <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                  <Wand2 className="mr-2 h-5 w-5" />
                  Rewrite Headline
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Product Description Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <BadgeAlert className="h-6 w-6 text-red-500 mt-1" />
              <div className="flex-1">
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Text Wall Issue</h4>
                <p className="text-lg text-[#E2E8F0] mb-3">
                  Your product description is a dense paragraph with 127 words. Most online shoppers scan rather than read, making this format ineffective.
                </p>
                <div className="bg-[#2D3748] p-4 rounded-lg mb-4">
                  <h5 className="text-lg font-medium text-[#E2E8F0] mb-2">Recommendation:</h5>
                  <p className="text-lg text-[#E2E8F0] mb-2">Convert to scannable bullet points highlighting key benefits:</p>
                  <ul className="list-disc pl-6 space-y-2 text-[#E2E8F0]">
                    <li className="text-lg">Ultra-soft 100% organic cotton that gets softer with each wash</li>
                    <li className="text-lg">Wrinkle-resistant fabric keeps you looking sharp all day</li>
                    <li className="text-lg">Versatile design works for both office and casual settings</li>
                    <li className="text-lg">Reinforced stitching for durability - lasts 2x longer than regular shirts</li>
                    <li className="text-lg">Available in 7 colors to match any style</li>
                  </ul>
                </div>
                <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                  <Wand2 className="mr-2 h-5 w-5" />
                  Convert to Bullet Points
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Features & Benefits Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div className="flex-1">
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Features Without Benefits</h4>
                <p className="text-lg text-[#E2E8F0] mb-3">
                  Your copy focuses on features (100% cotton, button-down collar) but doesn't translate them into customer benefits.
                </p>
                <div className="bg-[#2D3748] p-4 rounded-lg mb-4">
                  <h5 className="text-lg font-medium text-[#E2E8F0] mb-2">Feature-to-Benefit Examples:</h5>
                  <div className="space-y-3">
                    <div>
                      <p className="text-lg text-amber-400">Instead of: "100% organic cotton fabric"</p>
                      <p className="text-lg text-green-400">Try: "100% organic cotton for all-day breathable comfort against your skin"</p>
                    </div>
                    <div>
                      <p className="text-lg text-amber-400">Instead of: "Button-down collar design"</p>
                      <p className="text-lg text-green-400">Try: "Button-down collar stays crisp from morning meetings to evening dinners"</p>
                    </div>
                  </div>
                </div>
                <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                  <Wand2 className="mr-2 h-5 w-5" />
                  Add Benefit Statements
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Meta Description Optimization</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <BadgeAlert className="h-6 w-6 text-red-500 mt-1" />
              <div className="flex-1">
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Missing Meta Description</h4>
                <p className="text-lg text-[#E2E8F0] mb-3">
                  Your page is missing a meta description, which hurts SEO and reduces click-through rates from search results.
                </p>
                <div className="bg-[#2D3748] p-4 rounded-lg mb-4">
                  <h5 className="text-lg font-medium text-[#E2E8F0] mb-2">Suggested Meta Description:</h5>
                  <p className="text-lg text-[#E2E8F0] italic">
                    "Discover our premium Everyday Shirt in 100% organic cotton. Wrinkle-resistant, ultra-comfortable, and perfect for any occasion. Free shipping & 30-day returns."
                  </p>
                  <p className="text-sm text-[#94A3B8] mt-2">(149 characters - optimal for search results)</p>
                </div>
                <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                  <Wand2 className="mr-2 h-5 w-5" />
                  Add Meta Description
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Call-to-Action Copy</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div className="flex-1">
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Generic CTA: "Add to Cart"</h4>
                <p className="text-lg text-[#E2E8F0] mb-3">
                  Your current call-to-action is standard but not compelling. Testing more specific and benefit-driven CTAs can increase conversion rates.
                </p>
                <div className="bg-[#2D3748] p-4 rounded-lg mb-4">
                  <h5 className="text-lg font-medium text-[#E2E8F0] mb-2">CTA Alternatives to Test:</h5>
                  <ul className="list-disc pl-6 space-y-2 text-[#E2E8F0]">
                    <li className="text-lg">"Get Your Perfect Shirt"</li>
                    <li className="text-lg">"Add to Bag – Free Shipping"</li>
                    <li className="text-lg">"Wear It Next Week"</li>
                  </ul>
                </div>
                <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                  <Wand2 className="mr-2 h-5 w-5" />
                  Update CTA Copy
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Readability Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Readability Score</h3>
              <Progress value={data.readabilityScore} className="mt-2" />
              <p className="text-sm text-muted-foreground mt-1">
                Current readability score: {data.readabilityScore}%
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Content Recommendations</h3>
              <div className="space-y-4">
                {data.recommendations.map((rec, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium">{rec.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {rec.description}
                        </p>
                        <div className="mt-2">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            rec.priority === 'high' ? 'bg-red-100 text-red-800' :
                            rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {rec.priority} priority
                          </span>
                        </div>
                        <div className="mt-2">
                          <h5 className="text-sm font-medium">Implementation Steps:</h5>
                          <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                            {rec.implementation.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-2">
                          <h5 className="text-sm font-medium">Expected Impact:</h5>
                          <p className="text-sm text-muted-foreground mt-1">
                            {rec.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CopywritingResults;
