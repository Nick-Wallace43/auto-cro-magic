const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export interface PageAnalysisResult {
  performanceScore: number;
  coreWebVitals: {
    fcp: number;
    fcpScore: number;
    lcp: number;
    lcpScore: number;
    tti: number;
    ttiScore: number;
  };
  recommendations: Array<{
    title: string;
    description: string;
    priority: string;
  }>;
}

export async function analyzePage(url: string): Promise<PageAnalysisResult> {
  const response = await fetch(`${API_BASE_URL}/api/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error('Failed to analyze page');
  }

  return response.json();
}

export async function getRecommendations(pageSpeedData: any, url: string) {
  const response = await fetch(`${API_BASE_URL}/api/chat/recommendations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ pageSpeedData, url }),
  });

  if (!response.ok) {
    throw new Error('Failed to get recommendations');
  }

  return response.json();
} 