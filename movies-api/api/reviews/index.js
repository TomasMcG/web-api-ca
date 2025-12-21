import express from 'express';
import { reviewData } from './reviewData';
import asyncHandler from 'express-async-handler';
import Review from './reviewModel';

const router = express.Router(); 

router.get('/', async (req, res) => {
    //res.json(reviewData);
    const reviews = await Review.find();
    console.log(reviews);
    res.json(reviews);
});

router.post('/', asyncHandler(async (req, res) => {
    const newReview = req.body;
    //newReview.userId = req.user._id;
    const review = await Review(newReview).save();
    res.status(201).json(review);
}));


export default router;
