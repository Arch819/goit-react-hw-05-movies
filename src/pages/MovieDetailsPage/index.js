import ButtonBack from 'components/ButtonBack';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getDetailsMovie } from 'services/fetchMovies';
import MovieDetailsSection from 'components/MovieDetailsSection';
import { Section } from 'components/App.styled';
import AdditionalInfo from 'components/AdditionalInfo';
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [detailsMovie, setDetailsMovie] = useState(null);

  useEffect(() => {
    getDetailsMovie(movieId).then(data => setDetailsMovie(data));
  }, [movieId]);

  return (
    <main>
      <ButtonBack />
      {detailsMovie && <MovieDetailsSection details={detailsMovie} />}
      <Section>
        <AdditionalInfo />
        <Outlet />
      </Section>
    </main>
  );
};

export default MovieDetailsPage;
