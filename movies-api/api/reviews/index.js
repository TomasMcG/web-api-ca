import express from 'express';
import { reviewData } from './tasksData';

const router = express.Router(); 

router.get('/', (req, res) => {
    res.json(reviewData);
});

export default router;
