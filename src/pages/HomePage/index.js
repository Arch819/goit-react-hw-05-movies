import { Section } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import TrendingMovies from 'components/TrendingMovies';
import { useEffect, useState } from 'react';
import { getPopularMovies } from 'services/fetchMovies';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (movies) return;
    const getTrendingMovies = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { results } = await getPopularMovies();
        setMovies(results);
      } catch ({ message }) {
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, [movies]);

  return (
    <Section>
      {movies && <TrendingMovies movies={movies} />}
      {isError && <h1>{isError}</h1>}
      {isLoading && <Loader />}
    </Section>
  );
};

export default HomePage;
