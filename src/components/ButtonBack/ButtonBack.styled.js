import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)({
  fontFamily: 'Bad Script',
  fontWeight: '500',
  fontSize: '18px',
  color: '#000',
  transition: 'color 300ms linear',

  '&:hover': {
    color: '',
  },
});
