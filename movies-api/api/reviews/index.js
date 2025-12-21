import express from 'express';
import { reviewData } from './reviewData';
import asyncHandler from 'express-async-handler';
import Review from './reviewModel';

const router = express.Router(); 


router.get('/', async (req, res) => {
    
    const reviews = await Review.find();
    console.log(reviews);
    res.json(reviews);
    //res.json(reviewData.reviews);
});

router.post('/', asyncHandler(async (req, res) => {
    const newReview = req.body;
    //newReview.userId = req.user._id;
    const review = await Review(newReview).save();
    res.status(201).json(review);
}));

router.delete('/:id', async (req, res) => {
    const result = await Review.deleteOne({
        _id: req.params.id,
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Review' });
    }
});

export default router;
