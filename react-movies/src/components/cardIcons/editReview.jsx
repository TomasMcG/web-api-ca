import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router";

const EditReviewIcon = ({ review }) => {
  return (
    <Link
      to={`/reviews/edit`}
      state={{
          review: review,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default EditReviewIcon;
