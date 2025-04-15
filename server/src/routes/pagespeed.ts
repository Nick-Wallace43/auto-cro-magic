import express from 'express';
import { analyzePage } from '../services/pagespeed';
import { generateRecommendations } from '../services/chatgpt';
import { AppError } from '../utils/error';

const router = express.Router();

router.post('/analyze', async (req, res) => {
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

    const pageSpeedData = await analyzePage(url);
    const recommendations = await generateRecommendations(pageSpeedData, url);

    res.json({
      status: 'success',
      data: {
        pageSpeedData,
        recommendations
      }
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

export default router; 