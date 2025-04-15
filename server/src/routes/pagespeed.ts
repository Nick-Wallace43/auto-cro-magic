import express from 'express';
import { analyzePage } from '../services/pagespeed';
import { generateRecommendations } from '../services/chatgpt';
import { AppError } from '../middleware/errorHandler';

const router = express.Router();

router.post('/analyze', async (req, res, next) => {
  try {
    const { url } = req.body;
    
    if (!url) {
      throw new AppError('URL is required', 400);
    }

    // Validate URL format
    try {
      new URL(url);
    } catch (error) {
      throw new AppError('Invalid URL format', 400);
    }

    const analysis = await analyzePage(url);
    const recommendations = await generateRecommendations(analysis, url);

    res.status(200).json({
      analysis,
      recommendations
    });
  } catch (error) {
    next(error);
  }
});

export default router; 