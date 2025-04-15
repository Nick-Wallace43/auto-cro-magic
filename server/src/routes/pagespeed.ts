import { Router } from 'express';
import { analyzePage } from '../services/pagespeed';
import { generateRecommendations } from '../services/chatgpt';
import { AppError } from '../middleware/errorHandler';

const router = Router();

router.post('/analyze', async (req, res, next) => {
  try {
    const { url } = req.body;

    if (!url) {
      throw new AppError(400, 'URL is required');
    }

    // Validate URL format
    try {
      new URL(url);
    } catch (error) {
      throw new AppError(400, 'Invalid URL format');
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
    next(error);
  }
});

export { router as pagespeedRouter }; 