import { Link } from 'react-router-dom';
import { LogoFirstWord, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <Link to="/">
      <LogoText>
        <LogoFirstWord>𝔽𝕝𝕚𝕔𝕜</LogoFirstWord>ℍ𝕦𝕟𝕥
      </LogoText>
    </Link>
  );
};

export default Logo;
