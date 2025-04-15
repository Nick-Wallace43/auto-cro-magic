'use client';

import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { analyzePage as analyzePageAPI } from '../lib/api'

interface PageAnalysisResult {
  performanceScore: number
  coreWebVitals: {
    fcp: number
    fcpScore: number
    lcp: number
    lcpScore: number
    tti: number
    ttiScore: number
  }
  recommendations: Array<{
    title: string
    description: string
    priority: string
  }>
}

export function usePageAnalysis() {
  const { mutateAsync: analyzePage, isPending, error, data } = useMutation<PageAnalysisResult, Error, string>({
    mutationFn: async (url: string) => {
      try {
        const result = await analyzePageAPI(url)
        return result
      } catch (err) {
        toast.error('Failed to analyze page')
        throw err
      }
    },
  })

  return {
    analyzePage,
    isLoading: isPending,
    error,
    data,
  }
} 