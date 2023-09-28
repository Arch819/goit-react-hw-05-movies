import ReviewsList from 'components/ReviewsList/ReviewsList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsReviews } from 'services/fetchMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getDetailsReviews(movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId]);

  useEffect(() => {
    console.log(reviews);
    return () => console.log(reviews);
  });
  return (
    <>
      {reviews?.length ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <span>We don`t have any reviews for this movie.</span>
      )}
    </>
  );
};

export default Reviews;
