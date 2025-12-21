import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router";
import { getUserReviews,deleteUserReview,editUserReview, getReviewsForMovie } from "../../api/reviews-api";
import { excerpt } from "../../util";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import { getMovie } from "../../api/tmdb-api";
import EditReviewIcon from "../cardIcons/editReview";


export default function AllUserReviewsForMovie() {
     const { data, error, isPending, isError } = useQuery({
    queryKey: ['userReviews']/* { id: movie.id }*/,
    queryFn: getUserReviews,
  });

const [reviewState, setReviewState] = useState({reviews:[]});


    useEffect(() => {
    getUserReviews().then(data => {
      setReviewState({reviews: data});
    });
  }, []);

  const  deleteHandler = async (id)=> {
    await deleteUserReview(id);
    const newReviews = await getReviewsForMovie();
    setReviewState({reviews: newReviews})
  }

  const editHandler= async (id)=> {
    await editUserReview(id);
    const newReviews = await getUserReviews();
    setReviewState({reviews: newReviews})
  }
  
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


const reviews = reviewState.reviews;

  return (
    
    
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell >Movie</TableCell>
            <TableCell >Author</TableCell>
            <TableCell align="center">Review</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((r) => (
            <TableRow key={r._id}>
                <TableCell >
              {r.movieId}
              </TableCell>
              <TableCell component="th" scope="row">
                {r.author}
              </TableCell>
              <TableCell >{r.content}</TableCell>
              <TableCell align="right" >
              {r.rating}/5
              </TableCell>
              <TableCell>  <button className='deleteButton' onClick={() => deleteHandler(r._id)}>Delete</button></TableCell>
               <TableCell><EditReviewIcon review={r} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
