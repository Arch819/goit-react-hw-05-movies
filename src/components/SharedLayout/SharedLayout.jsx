import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const NavStyled = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  color: '#aeaeae',

  '&z.active': {
    color: '#d63d3d',
  },
});

const SharedLayout = () => {
  return (
    <>
      <header>
        <NavStyled>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/movies/:movieId">MovieDetails</NavLink>
        </NavStyled>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
