import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { usePageAnalysis } from '@/hooks/usePageAnalysis';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

export const PageAnalysis = () => {
  const { pageSpeedData, recommendations, isLoading, error, analyze } = usePageAnalysis();
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      analyze(url);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <Input
            type="url"
            placeholder="Enter URL to analyze"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Analyze'
            )}
          </Button>
        </div>
      </form>

      {error && (
        <div className="mb-8 rounded-lg bg-destructive/10 p-4 text-destructive">
          {error.message}
        </div>
      )}

      {pageSpeedData && (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Performance Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Progress value={pageSpeedData.performanceScore} className="h-2" />
                <span className="text-2xl font-bold">
                  {Math.round(pageSpeedData.performanceScore)}%
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Web Vitals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <span>First Contentful Paint</span>
                    <span>{Math.round(pageSpeedData.firstContentfulPaint)}ms</span>
                  </div>
                  <Progress
                    value={
                      (pageSpeedData.firstContentfulPaint / 3000) * 100
                    }
                    className="h-1"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>Largest Contentful Paint</span>
                    <span>{Math.round(pageSpeedData.largestContentfulPaint)}ms</span>
                  </div>
                  <Progress
                    value={
                      (pageSpeedData.largestContentfulPaint / 2500) * 100
                    }
                    className="h-1"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>Time to Interactive</span>
                    <span>{Math.round(pageSpeedData.timeToInteractive)}ms</span>
                  </div>
                  <Progress
                    value={
                      (pageSpeedData.timeToInteractive / 5000) * 100
                    }
                    className="h-1"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {recommendations.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Optimization Recommendations</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {recommendations.map((rec, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{rec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{rec.description}</p>
                  <div className="mb-4">
                    <span className="font-semibold">Priority:</span>{' '}
                    <span
                      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                        rec.priority === 'high'
                          ? 'bg-red-100 text-red-800'
                          : rec.priority === 'medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {rec.priority}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Implementation Steps:</span>
                    <ol className="mt-2 list-decimal pl-4">
                      {rec.implementationSteps.map((step: string, i: number) => (
                        <li key={i} className="mb-1">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="mt-4">
                    <span className="font-semibold">Expected Impact:</span>
                    <p className="mt-1">{rec.expectedImpact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 