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
  border: 1px solid #ffffff;
  background: #ecf0f3;
  box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1,
    2px 2px 2px #0f0f0f;
  color: #bbbbbb;
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
