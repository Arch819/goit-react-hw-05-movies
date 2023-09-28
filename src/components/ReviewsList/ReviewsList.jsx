import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import React from 'react';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews?.map(review => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;
