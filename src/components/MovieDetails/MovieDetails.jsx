import { NavLink, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <h1>MovieDetails</h1>
      <NavLink to="/movies/:movieId/cast">Cast</NavLink>
      <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
      <Outlet />
    </>
  );
};

export default MovieDetails;
