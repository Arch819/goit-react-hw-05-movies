import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/fetchMovies';

const MoviesPage = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [searchParams] = useSearchParams();
  const query = useMemo(() => searchParams.get('query') ?? '', [searchParams]);
  const refMovie = useRef(query);

  const fetchSearchMovies = useCallback(async movieSearch => {
    try {
      setIsLoading(true);
      setIsError('');
      const movieList = await getSearchMovie(movieSearch);
      setMovies(movieList);
    } catch ({ message }) {
      setIsError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    refMovie.current && fetchSearchMovies(refMovie.current);
  }, [fetchSearchMovies]);
  useEffect(() => {
    movieSearch && fetchSearchMovies(movieSearch);
  }, [fetchSearchMovies, movieSearch]);

  return (
    <section>
      <SearchForm setMovieSearch={setMovieSearch} />
      {isLoading && <Loader />}
      {isError && !isLoading && <h1>Error</h1>}
      {movies && <MoviesList moviesList={movies.results} />}
    </section>
  );
};

export default MoviesPage;
