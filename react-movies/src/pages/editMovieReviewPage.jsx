import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewEditForm from "../components/reviewEditForm";
import { useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMovieWithId } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const EditReviewPage = (props) => {
  const location = useLocation();
  const review = location.state?.review;
  const movieId = review?.movieId;

  const { data: movie, error, isLoading, isError } = useQuery({
    queryKey: ['movie', {id: movieId}],
    queryFn:() => getMovieWithId(movieId),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate movie={movie}>
      <ReviewEditForm movie={movie} review={review} />
    </PageTemplate>
  );
};

export default EditReviewPage;
