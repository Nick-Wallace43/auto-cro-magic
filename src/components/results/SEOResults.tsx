import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, BadgeAlert, Wand2, CheckCircle2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface SEOResultsProps {
  data: {
    seoScore: number;
    recommendations: Array<{
      title: string;
      description: string;
      priority: 'high' | 'medium' | 'low';
      implementation: string[];
      impact: string;
    }>;
  };
}

export function SEOResults({ data }: SEOResultsProps) {
  return (
    <div className="space-y-8">
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Meta Tags Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <BadgeAlert className="h-6 w-6 text-red-500 mt-1" />
              <div className="flex-1">
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Missing meta description</h4>
                <p className="text-lg text-[#E2E8F0] mb-3">
                  Your page is missing a meta description. Search engines use this to display preview snippets in search results.
                </p>
                <div className="flex items-center gap-3">
                  <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                    <Wand2 className="mr-2 h-5 w-5" />
                    Auto-Generate Description
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Title tag needs optimization</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your title tag "Product Name - YourStore" doesn't include important keywords. Consider restructuring it to "Product Name: Key Benefit | YourStore".
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                    <Wand2 className="mr-2 h-5 w-5" />
                    Optimize Title Tag
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Good canonical tag</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Proper canonical tag is in place, preventing duplicate content issues.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Heading Structure Analysis</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">H1 tag present</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your page includes an H1 tag with the product name, which is good SEO practice.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Keyword optimization</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your H1 tag could be better optimized with relevant keywords. Current H1: "The Everyday Shirt". Suggested H1: "The Everyday Shirt - Premium Cotton Casual Button-Down".
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                    <Wand2 className="mr-2 h-5 w-5" />
                    Optimize H1 Tag
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Inconsistent heading hierarchy</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your page jumps from H1 to H3 without H2 headings. Using a proper heading hierarchy helps both users and search engines understand your content structure.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Image Optimization</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <BadgeAlert className="h-6 w-6 text-red-500 mt-1" />
              <div className="flex-1">
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Missing alt text on images</h4>
                <p className="text-lg text-[#E2E8F0] mb-3">
                  5 out of 7 product images are missing alt text. Alt text is essential for accessibility and helps search engines understand your images.
                </p>
                <div className="flex items-center gap-3">
                  <Button className="bg-[#2D3748] hover:bg-[#3D4A5C] text-[#E2E8F0]">
                    <Wand2 className="mr-2 h-5 w-5" />
                    Generate Alt Text
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Generic filenames</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Image filenames like "IMG_001.jpg" don't help SEO. Consider renaming images with descriptive, keyword-rich filenames like "blue-cotton-everyday-shirt-front.jpg".
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">Internal Linking</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Limited related products</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Only showing 3 related products limits cross-selling opportunities and internal linking. Consider expanding to 4-6 related products.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Good breadcrumb navigation</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Breadcrumb navigation is implemented correctly, helping both users and search engines understand your site structure.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
              <div>
                <h4 className="text-xl font-medium text-[#E2E8F0] mb-1">Missing category links in product description</h4>
                <p className="text-lg text-[#E2E8F0]">
                  Your product description mentions "summer collection" but doesn't link to that collection page. Adding relevant internal links in product descriptions can improve SEO and user navigation.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#1E293B] border-0 shadow-md">
        <CardHeader className="bg-[#2D3748] pb-4">
          <CardTitle className="text-2xl text-[#E2E8F0]">SEO Analysis Results</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">SEO Score</h3>
              <Progress value={data.seoScore} className="mt-2" />
              <p className="text-sm text-muted-foreground mt-1">
                Current SEO score: {data.seoScore}%
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">SEO Recommendations</h3>
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
}
