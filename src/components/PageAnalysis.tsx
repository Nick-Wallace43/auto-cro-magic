'use client';

import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { usePageAnalysis } from '../hooks/usePageAnalysis'
import { Progress } from './ui/progress'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react'

export function PageAnalysis() {
  const [url, setUrl] = useState('')
  const { analyzePage, isLoading, error, data } = usePageAnalysis()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) {
      toast.error('Please enter a URL')
      return
    }
    await analyzePage(url)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-bold">Page Analysis</h1>
        <p className="text-muted-foreground">Enter a URL to analyze its performance and get optimization recommendations</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex space-x-2">
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
        <div className="rounded-md bg-destructive/15 p-4 text-destructive">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-4 w-4" />
            <p>{error.message}</p>
          </div>
        </div>
      )}

      {data && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Score</CardTitle>
              <CardDescription>Overall performance score based on Core Web Vitals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Progress value={data.performanceScore * 100} className="h-2" />
                <span className="text-2xl font-bold">{Math.round(data.performanceScore * 100)}%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Web Vitals</CardTitle>
              <CardDescription>Key performance metrics for your page</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span>First Contentful Paint (FCP)</span>
                  <span className="font-medium">{data.coreWebVitals.fcp}ms</span>
                </div>
                <Progress value={data.coreWebVitals.fcpScore * 100} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span>Largest Contentful Paint (LCP)</span>
                  <span className="font-medium">{data.coreWebVitals.lcp}ms</span>
                </div>
                <Progress value={data.coreWebVitals.lcpScore * 100} className="h-2" />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span>Time to Interactive (TTI)</span>
                  <span className="font-medium">{data.coreWebVitals.tti}ms</span>
                </div>
                <Progress value={data.coreWebVitals.ttiScore * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimization Recommendations</CardTitle>
              <CardDescription>AI-powered suggestions to improve your page performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.recommendations.map((rec, index) => (
                <div key={index} className="rounded-lg border p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <h3 className="font-medium">{rec.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{rec.description}</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {rec.priority}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
} 