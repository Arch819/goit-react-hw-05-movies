import { ButtonUp } from 'components/ButtonUp';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ButtonUp />
      <Footer />
    </>
  );
};

export default SharedLayout;
