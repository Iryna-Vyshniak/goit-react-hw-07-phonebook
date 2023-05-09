import styled from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[3]}px;

  max-width: 100%;
  width: 500px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 500px;

  color: ${props => props.theme.colors.primary};
  text-shadow: ${props => props.theme.shadows.textShadow};
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-left: 8px;
`;

export const LabelSpan = styled.span`
  color: ${props => props.theme.colors.black};
`;

export const FieldFormik = styled(Field)`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 100%;

  border: 0;
  outline: 0;
  border-radius: none;
  color: ${props => props.theme.colors.black};
  background-color: #f2f4f5;
  text-shadow: ${props => props.theme.shadows.textShadow};
  box-shadow: inset -1px -1px 1px #ffffff, inset 1px 1px 1px #8e9aaf;

  font-size: ${props => props.theme.fontSizes.s};
  letter-spacing: 1.4px;
`;

export const ErrorMessage = styled(FormikError)`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  max-width: 500px;
  color: #9e0202;
  text-shadow: 0 0.4px 0.4px #fff;
  background-color: transparent;
  backdrop-filter: blur(10.5px);
  border-radius: 8px;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.space[2]}px;

  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;

  max-width: 100%;

  border: ${props => props.theme.borders.none};
  outline: none;

  box-shadow: ${props => props.theme.shadows.boxShadow};
  transition: all 0.2s ease-in-out;

  background-color: ${props => props.theme.colors.background};

  color: ${props => props.theme.colors.black};
  text-shadow: ${props => props.theme.shadows.textShadow};

  cursor: pointer;

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
