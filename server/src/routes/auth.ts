import express from 'express';
import { AppError } from '../middleware/errorHandler';

const router = express.Router();

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      throw new AppError('Email and password are required', 400);
    }

    // TODO: Implement actual authentication logic
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    next(error);
  }
});

router.post('/register', async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    
    if (!email || !password || !name) {
      throw new AppError('Email, password, and name are required', 400);
    }

    // TODO: Implement actual registration logic
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    next(error);
  }
});

export default router; 