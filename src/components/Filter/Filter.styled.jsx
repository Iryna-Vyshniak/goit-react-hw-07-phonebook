import styled from 'styled-components';

export const LabelDescr = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;
  width: 300px;

  color: ${props => props.theme.colors.primary};
  text-shadow: ${props => props.theme.shadows.textShadow};
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

export const LabelSpan = styled.span`
  color: ${props => props.theme.colors.black};
`;

export const Input = styled.input`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  border: 0;
  outline: 0;
  border-radius: none;
  color: ${props => props.theme.colors.black};
  background-color: transparent;
  text-shadow: ${props => props.theme.shadows.textShadow};
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #8e9aaf;

  font-size: ${props => props.theme.fontSizes.s};
  letter-spacing: 1.4px;
`;
