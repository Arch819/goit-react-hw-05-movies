import { Container, Section } from 'components/App.styled';
import ErrorMessage from 'components/ErrorMessage';
import { Loader } from 'components/Loader';
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
    <main>
      <Section>
        <Container>
          <SearchForm setMovieSearch={setMovieSearch} />
          {isLoading && <Loader />}
          {isError && !isLoading && <ErrorMessage error={isError} />}
          {movies && <MoviesList moviesList={movies.results} />}
        </Container>
      </Section>
    </main>
  );
};

export default MoviesPage;
