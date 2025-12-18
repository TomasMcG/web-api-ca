import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies,getUpcomingMovies,getTrendingMovies, getNowPlayingMovies, getTopRatedMovies,getGenres, getMovie, getMovieImages } from '../tmdb-api'; 


const router = express.Router();

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/getMovie',asyncHandler(async (req,res) => {
    const movie = await getMovie();
    res.status(200).json(movie);
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

router.get('/genres',asyncHandler(async (req,res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/movieImages',asyncHandler(async (req,res) => {
    const movieImages = await getMovieImages();
    res.status(200).json(movieImages);
}));




export default router;
