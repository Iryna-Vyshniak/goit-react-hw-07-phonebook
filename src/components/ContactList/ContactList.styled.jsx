import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;
  width: 300px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  color: ${props => props.theme.colors.black};
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: ${props => props.theme.fontSizes.s};
`;

export const Btn = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;

  border: none;
  outline: none;

  color: ${props => props.theme.colors.black};
  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #8e9aaf;

    svg {
      fill: ${p => p.theme.colors.primary};
      stroke: ${p => p.theme.colors.black};
    }
  }

  &:active {
    background-color: ${p => p.theme.colors.accent};
    svg {
      fill: ${p => p.theme.colors.black};
      stroke: ${p => p.theme.colors.white};
    }
  }
`;
