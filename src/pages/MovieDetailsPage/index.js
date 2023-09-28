import ButtonBack from 'components/ButtonBack/ButtonBack';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getDetailsMovie } from 'services/fetchMovies';
import MovieDetailsSection from 'components/MovieDetailsSection';
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [detailsMovie, setDetailsMovie] = useState(null);

  useEffect(() => {
    getDetailsMovie(movieId).then(data => setDetailsMovie(data));
  }, [movieId]);

  return (
    <>
      <ButtonBack />
      {detailsMovie && <MovieDetailsSection details={detailsMovie} />}
      <h3>Additional information</h3>
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
