import PropTypes from 'prop-types';
import { Container, MainBlock } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <MainBlock>{children}</MainBlock>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
