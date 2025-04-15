import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, BadgeAlert, BarChart, Smartphone, Monitor, AlertCircle, Cog, CheckCircle2 } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface PerformanceResultsProps {
  analysisType: string;
}

const PerformanceResults: React.FC<PerformanceResultsProps> = ({ analysisType }) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-[#1E293B] border-0 shadow-md">
          <CardHeader className="bg-[#2D3748] pb-4">
            <CardTitle className="text-2xl text-[#E2E8F0] flex items-center">
              <Smartphone className="h-6 w-6 mr-2" /> Mobile Score
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-amber-500 mb-4">
                <span className="text-4xl font-bold text-[#E2E8F0]">47</span>
              </div>
              <p className="text-lg text-amber-400 font-medium">Needs Improvement</p>
              <p className="text-[#94A3B8] mt-2">Below Shopify average of 62</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1E293B] border-0 shadow-md">
          <CardHeader className="bg-[#2D3748] pb-4">
            <CardTitle className="text-2xl text-[#E2E8F0] flex items-center">
              <Monitor className="h-6 w-6 mr-2" /> Desktop Score
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-green-500 mb-4">
                <span className="text-4xl font-bold text-[#E2E8F0]">78</span>
              </div>
              <p className="text-lg text-green-400 font-medium">Good</p>
              <p className="text-[#94A3B8] mt-2">Above Shopify average of 74</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Core Web Vitals</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <div>
                  <span className="text-lg font-medium text-[#E2E8F0]">Largest Contentful Paint (LCP)</span>
                  <p className="text-[#94A3B8]">Time until largest content element is visible</p>
                </div>
                <span className="text-lg font-bold text-amber-400">3.8s</span>
              </div>
              <Progress value={62} className="h-2 bg-[#2D3748]" indicatorClassName="bg-amber-500" />
              <p className="text-sm text-amber-400 mt-1">Needs improvement (Good is &lt; 2.5s)</p>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <div>
                  <span className="text-lg font-medium text-[#E2E8F0]">First Input Delay (FID)</span>
                  <p className="text-[#94A3B8]">Time until page becomes interactive</p>
                </div>
                <span className="text-lg font-bold text-green-400">42ms</span>
              </div>
              <Progress value={90} className="h-2 bg-[#2D3748]" indicatorClassName="bg-green-500" />
              <p className="text-sm text-green-400 mt-1">Good (Good is &lt; 100ms)</p>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <div>
                  <span className="text-lg font-medium text-[#E2E8F0]">Cumulative Layout Shift (CLS)</span>
                  <p className="text-[#94A3B8]">Unexpected layout shifts during page load</p>
                </div>
                <span className="text-lg font-bold text-red-400">0.45</span>
              </div>
              <Progress value={40} className="h-2 bg-[#2D3748]" indicatorClassName="bg-red-500" />
              <p className="text-sm text-red-400 mt-1">Poor (Good is &lt; 0.1)</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Identified Issues</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <BadgeAlert className="h-6 w-6 text-red-500 mt-1" />
              <div className="flex-1">
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Large Images</h4>
                <p className="text-lg text-[#E2E8F0] mb-3">
                  3 images exceed recommended size limits, slowing down page load:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3 text-[#E2E8F0]">
                  <li className="text-lg">hero-product.jpg (3.2MB) - Recommended: &lt;500KB</li>
                  <li className="text-lg">lifestyle-1.jpg (2.8MB) - Recommended: &lt;500KB</li>
                  <li className="text-lg">detail-3.jpg (1.9MB) - Recommended: &lt;500KB</li>
                </ul>
                <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                  <Cog className="mr-2 h-5 w-5" />
                  Auto-Compress Images
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Render-Blocking JavaScript</h4>
                <p className="text-lg text-[#E2E8F0]">
                  3 JavaScript files are blocking rendering:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3 text-[#E2E8F0]">
                  <li className="text-lg">wisepops.js - 3rd party popup app</li>
                  <li className="text-lg">analytics.js - Analytics tracking</li>
                  <li className="text-lg">reviews-widget.js - Reviews widget</li>
                </ul>
                <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                  <Cog className="mr-2 h-5 w-5" />
                  Defer Non-Critical Scripts
                </Button>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Layout Shift Issues</h4>
                <p className="text-lg text-[#E2E8F0]">
                  The review widget loads after page content, causing significant layout shift. Consider adding fixed height containers for dynamic content.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Proper Caching Headers</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Good use of browser caching with appropriate cache-control headers.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Top Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Optimize Images</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Compress and resize all product images to save 7.9MB of total page weight, potentially reducing load time by 2.3 seconds on mobile.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Defer Non-Critical JavaScript</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Move non-essential scripts (especially third-party widgets) to load after the main content is rendered.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Reserve Space for Dynamic Content</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Add fixed-height containers for elements like review widgets and image carousels to prevent layout shifts during page load.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceResults;
