import styled from 'styled-components';

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: none;
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

export const ModalPictureWrapper = styled.div`
  max-width: 100%;
  width: 420px;
  height: 360px;
  object-fit: cover;
  object-position: center;
`;
export const ModalPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
export const PictureDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;
  width: 100%;
  height: auto;
`;

export const Button = styled.button`
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
