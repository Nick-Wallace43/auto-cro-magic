import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { analyzePage, getRecommendations } from '@/lib/api';
import { toast } from 'sonner';

interface PageAnalysisResult {
  pageSpeedData: any;
  recommendations: any[];
  isLoading: boolean;
  error: Error | null;
  analyze: (url: string) => Promise<void>;
}

export const usePageAnalysis = (): PageAnalysisResult => {
  const [pageSpeedData, setPageSpeedData] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const analyzeMutation = useMutation({
    mutationFn: analyzePage,
    onSuccess: (data) => {
      setPageSpeedData(data.data.pageSpeedData);
      setRecommendations(data.data.recommendations);
      setError(null);
      toast.success('Page analysis completed successfully');
    },
    onError: (error: Error) => {
      setError(error);
      toast.error('Failed to analyze page');
    }
  });

  const analyze = async (url: string) => {
    try {
      await analyzeMutation.mutateAsync(url);
    } catch (error) {
      console.error('Page analysis failed:', error);
    }
  };

  return {
    pageSpeedData,
    recommendations,
    isLoading: analyzeMutation.isPending,
    error,
    analyze
  };
}; 