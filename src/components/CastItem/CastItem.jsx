import defaultPhoto from 'images/defaultPhoto.jpg';

const CastItem = ({ actor }) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';
  const { name, profile_path, character } = actor || {};
  const imageSrc = profile_path ? IMAGE_URL + profile_path : defaultPhoto;
  return (
    <li>
      <img src={imageSrc} alt={name} width={100} />
      <div>
        <h3>{name}</h3>
        <p>Character: {character}</p>
      </div>
    </li>
  );
};

export default CastItem;
// character : "Melanie Stryder / Wanda"
// id: 36592
// known_for_department: "Acting"
// name : "Saoirse Ronan"
// profile_path :  "/9buDPdqKN9vbnQLLkHEinDtMrCG.jpg"
