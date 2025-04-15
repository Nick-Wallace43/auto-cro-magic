import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

interface CROResultsProps {
  analysisType: string;
}

const CROResults: React.FC<CROResultsProps> = ({ analysisType }) => {
  return (
    <div className="space-y-8">
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Above the Fold Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Strong hero image</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your product imagery is high quality and showcases the product effectively. The main hero image is clear and detailed.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">CTA visibility needs improvement</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your "Add to Cart" button blends too much with the background. Consider using a higher contrast color to make it stand out more.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Limited social proof above the fold</h4>
                <p className="text-lg text-[#E2E8F0]">
                  We don't see star ratings or review counts prominently displayed above the fold. Consider adding these elements to build trust immediately.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Call-to-Action Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Button contrast issue</h4>
                <p className="text-lg text-[#E2E8F0]">
                  The primary CTA button (#4A5AEF on #FFFFFF) has a contrast ratio of 3.2:1, which doesn't meet WCAG AA standards for smaller text. Consider a darker blue or add a border for better visibility.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Good button sizing</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your CTA buttons are appropriately sized for both desktop and mobile, making them easy targets for clicking.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Button text recommendation</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Consider testing a more specific CTA than "Add to Cart" - options like "Get Mine Now" or "Add to Bag – $X" could increase click-through rates.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Trust Elements Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Missing trust badges</h4>
                <p className="text-lg text-[#E2E8F0]">
                  We don't see any payment or security trust badges near the checkout area. Adding recognized payment icons and security badges can increase conversion rates.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Good shipping information</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Free shipping information is clearly displayed, which is excellent for reducing cart abandonment.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Consider adding guarantees</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Adding a money-back guarantee or satisfaction guarantee can significantly increase buyer confidence and conversion rates.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Mobile Experience Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Responsive layout</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your page layout adapts well to mobile screens with appropriate stacking and sizing of elements.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Text size concerns</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Some text elements are too small on mobile (12px font). Consider increasing the minimum font size to 16px for better readability.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Touch target issues</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Some clickable elements are too close together on mobile, making them difficult to tap accurately. Ensure all touch targets have at least 8px of space between them.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Product Image Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Suboptimal image order</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your product gallery starts with detailed product shots rather than lifestyle images. Testing shows that leading with lifestyle images can increase engagement.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">High-quality images</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your product images are high resolution and show the product clearly from multiple angles.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Consider adding videos</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Adding a short product video or 360° view could significantly increase engagement and conversion rates.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CROResults;
