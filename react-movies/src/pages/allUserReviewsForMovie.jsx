
import { Navigate, useLocation } from "react-router";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router";

import React from "react";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import AllUserReviewsForMovie from "../components/allUserReviewForMovie";

const MovieUserReviewsPage = (props) => {

  
  return (
  
      <AllUserReviewsForMovie  />
  
  );
};

export default MovieUserReviewsPage;
