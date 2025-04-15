import OpenAI from 'openai';
import { AppError } from '../utils/error';

if (!process.env.OPENAI_API_KEY) {
  throw new AppError('OpenAI API key is not configured', 500);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface Recommendation {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  implementationSteps: string[];
  expectedImpact: string;
}

export async function generateRecommendations(pageSpeedData: any, url: string): Promise<Recommendation[]> {
  try {
    const prompt = `
      Analyze the following PageSpeed Insights data for ${url} and provide optimization recommendations:
      ${JSON.stringify(pageSpeedData, null, 2)}

      Please provide recommendations in the following JSON format:
      {
        "recommendations": [
          {
            "title": "Recommendation title",
            "description": "Detailed description of the recommendation",
            "priority": "high|medium|low",
            "implementationSteps": ["Step 1", "Step 2", ...],
            "expectedImpact": "Expected performance improvement"
          }
        ]
      }
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: 'You are a web performance optimization expert. Provide specific, actionable recommendations based on PageSpeed Insights data.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new AppError('No recommendations generated', 500);
    }

    const recommendations = JSON.parse(content);
    return recommendations.recommendations;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throw new AppError('Failed to generate recommendations', 500);
  }
} 