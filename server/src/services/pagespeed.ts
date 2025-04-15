import axios from 'axios';
import { logger } from '../utils/logger';
import { AppError } from '../middleware/errorHandler';

const PAGESPEED_API_URL = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY;

if (!API_KEY) {
  throw new Error('GOOGLE_PAGESPEED_API_KEY is not set in environment variables');
}

export interface PageSpeedResult {
  performanceScore: number;
  firstContentfulPaint: number;
  speedIndex: number;
  largestContentfulPaint: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  cumulativeLayoutShift: number;
  opportunities: Array<{
    title: string;
    description: string;
    impact: string;
  }>;
  diagnostics: Array<{
    title: string;
    description: string;
  }>;
}

export const analyzePage = async (url: string): Promise<PageSpeedResult> => {
  try {
    const response = await axios.get(PAGESPEED_API_URL, {
      params: {
        url,
        key: API_KEY,
        strategy: 'mobile',
        category: 'performance'
      }
    });

    const { lighthouseResult } = response.data;
    const { audits, categories } = lighthouseResult;

    const score = Math.round(Number(categories.performance.score) * 100);

    return {
      performanceScore: score,
      firstContentfulPaint: audits['first-contentful-paint'].numericValue,
      speedIndex: audits['speed-index'].numericValue,
      largestContentfulPaint: audits['largest-contentful-paint'].numericValue,
      timeToInteractive: audits['interactive'].numericValue,
      totalBlockingTime: audits['total-blocking-time'].numericValue,
      cumulativeLayoutShift: audits['cumulative-layout-shift'].numericValue,
      opportunities: Object.values(audits)
        .filter((audit: any) => audit.group === 'load-opportunities')
        .map((audit: any) => ({
          title: audit.title,
          description: audit.description,
          impact: audit.impact
        })),
      diagnostics: Object.values(audits)
        .filter((audit: any) => audit.group === 'diagnostics')
        .map((audit: any) => ({
          title: audit.title,
          description: audit.description
        }))
    };
  } catch (error) {
    logger.error('PageSpeed analysis failed:', error);
    throw new AppError(
      'Failed to analyze page with PageSpeed Insights',
      500
    );
  }
}; 