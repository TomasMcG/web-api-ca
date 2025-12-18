import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies,getUpcomingMovies,getTrendingMovies, getNowPlayingMovies, getTopRatedMovies } from '../tmdb-api'; 


const router = express.Router();

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/trending',asyncHandler(async (req,res) => {
    const trendingMovies = await getTrendingMovies();
    res.status(200).json(trendingMovies);

}));

router.get('/now_playing',asyncHandler(async (req,res) => {
    const nowPlayingMovies = await getNowPlayingMovies();
    res.status(200).json(nowPlayingMovies);

}));

router.get('/top_rated',asyncHandler(async (req,res) => {
    const topRatedMovies = await getTopRatedMovies();
    res.status(200).json(topRatedMovies);

}));




export default router;
