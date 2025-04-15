import express from 'express';
import { AppError } from '../utils/error';

const router = express.Router();

router.post('/message', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      throw new AppError('Message is required', 400);
    }

    // TODO: Implement chat functionality
    res.json({ message: 'Chat functionality coming soon' });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

export default router; 