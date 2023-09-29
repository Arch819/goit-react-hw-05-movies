import NavList from 'components/NavList';
import { HeaderStyled } from './Header.styled';
import { Container } from 'components/App.styled';
import Logo from 'components/Logo';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <NavList />
        <Logo />
      </Container>
    </HeaderStyled>
  );
};

export default Header;
