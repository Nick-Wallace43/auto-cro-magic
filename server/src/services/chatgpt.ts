import OpenAI from 'openai';
import { logger } from '../utils/logger';
import { AppError } from '../middleware/errorHandler';

const API_KEY = process.env.OPENAI_API_KEY;

if (!API_KEY) {
  throw new Error('OPENAI_API_KEY is not set in environment variables');
}

const openai = new OpenAI({
  apiKey: API_KEY
});

export interface OptimizationRecommendation {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  implementationSteps: string[];
  expectedImpact: string;
}

export const generateRecommendations = async (
  pageSpeedData: any,
  pageUrl: string
): Promise<OptimizationRecommendation[]> => {
  try {
    const prompt = `Based on the following PageSpeed Insights data for ${pageUrl}, provide specific, actionable recommendations for improving the page's performance. Focus on the most impactful changes first.

PageSpeed Data:
${JSON.stringify(pageSpeedData, null, 2)}

Please provide recommendations in the following format:
1. Title: A clear, concise title for the recommendation
2. Description: A detailed explanation of the issue and why it matters
3. Priority: high, medium, or low
4. Implementation Steps: A numbered list of specific steps to implement the recommendation
5. Expected Impact: A brief description of the expected performance improvement

Format the response as a JSON array of objects with these properties.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are a web performance optimization expert. Provide clear, actionable recommendations based on PageSpeed Insights data.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const recommendations = JSON.parse(response.choices[0].message.content);
    return recommendations;
  } catch (error) {
    logger.error('ChatGPT recommendation generation failed:', error);
    throw new AppError(
      500,
      'Failed to generate optimization recommendations'
    );
  }
}; 