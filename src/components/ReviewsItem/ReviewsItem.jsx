import defaultPhoto from 'images/defaultPhoto.jpg';

const ReviewsItem = ({ review }) => {
  const { author, content, updated_at, author_details } = review;
  const { avatar_path, rating } = author_details;
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';
  const imageSrc = avatar_path ? IMAGE_URL + avatar_path : defaultPhoto;

  const publicReview = `${updated_at.slice(0, 10)} ${updated_at.slice(11, 19)}`;
  console.log(review);
  return (
    <>
      <img src={imageSrc} alt={author} />
      <p>{rating}</p>
      <div>
        <h3>{author}</h3>
        <p>{content}</p>
        <p>{publicReview}</p>
      </div>
    </>
  );
};

export default ReviewsItem;
