import MovieItem from 'components/MovieItem';
import { MoviesListStyled } from './MoviesList.styled';

const MoviesList = ({ moviesList }) => {
  return (
    <MoviesListStyled>
      {moviesList.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </MoviesListStyled>
  );
};

export default MoviesList;
