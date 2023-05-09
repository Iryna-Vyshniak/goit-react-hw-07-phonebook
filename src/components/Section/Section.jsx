import PropTypes from 'prop-types';
import { Title } from 'components/Title/Title';
import { SectionWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title title={title} />
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
