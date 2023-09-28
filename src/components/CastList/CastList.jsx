import CastItem from 'components/CastItem/CastItem';

const CastList = ({ cast: { cast } }) => {
  return cast.map(actor => <CastItem key={actor.id} actor={actor} />);
};

export default CastList;
