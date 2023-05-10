import Modal from 'react-modal';
import React from 'react';
import { MdOutlineClose } from 'react-icons/md';
import Avatar from 'assets/avatar.png';
import { CloseBtn, ModalPicture, PictureDescr } from './Modal.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(142,154,175, 0.3)',
    zIndex: 1300,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '1200',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: 'auto',
    boxShadow: '2px 2px 2px #0f0f0f',
    border: 'none',
    borderRadius: 'none',
  },
};

Modal.setAppElement('#root');

export const ContactModal = ({ isOpen, data, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Inline Styles Modal Example"
      style={customStyles}
    >
      <CloseBtn onClick={onClose}>
        <MdOutlineClose />
      </CloseBtn>
      <ModalPicture
        src={data?.avatar !== '' ? `${data?.avatar}` : Avatar}
        alt="photo"
        width="640"
      />
      <PictureDescr>
        <p>{data?.name}</p>
        <p>
          <a href={'tel:' + data?.phone}>{data?.phone}</a>
        </p>
      </PictureDescr>
    </Modal>
  );
};
