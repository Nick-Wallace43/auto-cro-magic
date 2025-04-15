import OpenAI from 'openai';
import { AppError } from '../middleware/errorHandler';

if (!process.env.OPENAI_API_KEY) {
  throw new AppError('OPENAI_API_KEY is not set', 500);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

interface Recommendation {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  implementation: string[];
  impact: string;
}

export async function generateRecommendations(
  pageSpeedData: any,
  url: string
): Promise<Recommendation[]> {
  try {
    const prompt = `
      Based on the following PageSpeed Insights data for ${url}, provide specific optimization recommendations:
      ${JSON.stringify(pageSpeedData, null, 2)}
      
      Please provide recommendations in the following format:
      - Title: Short, descriptive title
      - Description: Detailed explanation of the issue
      - Priority: high/medium/low
      - Implementation Steps: List of specific actions to take
      - Expected Impact: Description of the expected improvement
    `;

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a web performance optimization expert. Provide clear, actionable recommendations based on PageSpeed Insights data."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const response = completion.choices[0].message.content;
    if (!response) {
      throw new AppError('No response from ChatGPT', 500);
    }

    // Parse the response into structured recommendations
    const recommendations: Recommendation[] = [];
    const sections = response.split('\n\n');

    for (const section of sections) {
      const lines = section.split('\n');
      if (lines.length < 5) continue;

      const recommendation: Recommendation = {
        title: lines[0].replace('- Title:', '').trim(),
        description: lines[1].replace('- Description:', '').trim(),
        priority: lines[2].replace('- Priority:', '').trim().toLowerCase() as 'high' | 'medium' | 'low',
        implementation: lines[3]
          .replace('- Implementation Steps:', '')
          .trim()
          .split(',')
          .map(step => step.trim()),
        impact: lines[4].replace('- Expected Impact:', '').trim()
      };

      recommendations.push(recommendation);
    }

    return recommendations;
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }
    throw new AppError('Failed to generate recommendations', 500);
  }
} 