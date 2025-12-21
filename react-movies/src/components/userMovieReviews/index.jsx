import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router";
import { getUserReviews } from "../../api/reviews-api";
import { excerpt } from "../../util";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import { getMovie } from "../../api/tmdb-api";


export default function UserMovieReviews() {
     const { data, error, isPending, isError } = useQuery({
    queryKey: ['userReviews']/* { id: movie.id }*/,
    queryFn: getUserReviews,
  });


  
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


   const reviews = data;



  return (
    
    
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell >Movie</TableCell>
            <TableCell >Author</TableCell>
            <TableCell align="center">Review</TableCell>
            <TableCell align="right">Rating</TableCell>
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
              <TableCell >
              {r.rating}/5
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
