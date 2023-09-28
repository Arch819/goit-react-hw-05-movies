import CastList from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailsCast } from 'services/fetchMovies';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    // if (cast) return;
    getDetailsCast(movieId).then(data => setCast(data));
  }, [movieId]);

  return cast && <CastList cast={cast} />;
};

export default Cast;
