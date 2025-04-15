import express from 'express';
import { AppError } from '../middleware/errorHandler';

const router = express.Router();

router.post('/message', async (req, res, next) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      throw new AppError('Message is required', 400);
    }

    // TODO: Implement chat functionality
    res.status(200).json({ message: 'Chat functionality coming soon' });
  } catch (error) {
    next(error);
  }
});

export default router; 