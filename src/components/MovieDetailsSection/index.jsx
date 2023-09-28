import { Container } from 'components/App.styled';
import default_image from 'images/default_image.png';

const MovieDetailsSection = ({ details }) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w400/';
  const { title, release_date, overview, vote_average, poster_path, genres } =
    details || {};
  const imageSrc = poster_path ? IMAGE_URL + poster_path : default_image;
  const userScore = Math.round((Number(vote_average) * 100) / 10);
  const releaseData = release_date?.slice(0, 4);
  return (
    <Container>
      <img src={imageSrc} alt={title} width={400} />
      <div>
        <h3>
          {title}({releaseData})
        </h3>
        <p>
          User Score: <span>{userScore}%</span>
        </p>
        <p>Overview {overview}</p>
        <p>genres: {genres?.map(({ name }) => name).join(' ')}</p>
      </div>
    </Container>
  );
};

export default MovieDetailsSection;
