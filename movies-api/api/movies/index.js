import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies,getMovie,getUpcomingMovies,getTrendingMovies, getNowPlayingMovies, getTopRatedMovies,getGenres,  getMovieImages, getMovieReviews, getMovieRecommendations, getMovieCredits, getPerson, getPersonMovieCredits } from '../tmdb-api'; 


const router = express.Router();

router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));


router.get('/:movieId/getMovie', async (req, res) => {
  const  movieId  = req.params.movieId;
  const movie = await getMovie(movieId);
  res.status(200).json(movie);
});

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

router.get('/:movieId/movieImages',asyncHandler(async (req,res) => {
    const movieId = req.params.movieId;
    const movieImages = await getMovieImages( movieId);
    res.status(200).json(movieImages);
}));

router.get('/:movieId/movieReviews',asyncHandler(async (req,res) => {
    const movieId = req.params.movieId;
    const movieReviews = await getMovieReviews(movieId);
    res.status(200).json(movieReviews);
}));

router.get('/:movieId/movieRecommendations',asyncHandler(async (req,res) => {
    const movieId = req.params.movieId;
    const movieReviews = await getMovieRecommendations(movieId);
    res.status(200).json(movieReviews);
}));

router.get('/:movieId/movieCredits',asyncHandler(async (req,res) => {
    const movieId = req.params.movieId;
    const movieReviews = await getMovieCredits(movieId);
    res.status(200).json(movieReviews);
}));

router.get('/:personId/person',asyncHandler(async (req,res) => {
    const personId = req.params.personId;
    const movieReviews = await getPerson(personId);
    res.status(200).json(movieReviews);
}));

router.get('/:personId/personMovieCredits',asyncHandler(async (req,res) => {
    const personId = req.params.personId;
    const movieReviews = await getPersonMovieCredits(personId);
    res.status(200).json(movieReviews);
}));





export default router;
