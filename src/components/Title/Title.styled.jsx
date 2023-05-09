import styled from 'styled-components';

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.space[4]}px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  text-shadow: 1px 1px 0 #fff;
  font-size: ${props => props.theme.fontSizes.l};
`;
