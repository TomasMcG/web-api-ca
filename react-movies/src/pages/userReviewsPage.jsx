
import { Navigate, useLocation } from "react-router";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router";

import React from "react";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import UserMovieReviews from "../components/userMovieReviews";

const UserReviewsPage = (props) => {

  
  return (
  
      <UserMovieReviews  />
  
  );
};

export default UserReviewsPage;
