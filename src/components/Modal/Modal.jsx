import Modal from 'react-modal';

import { MdOutlineClose } from 'react-icons/md';
import Avatar from 'assets/avatar.png';
import { CloseBtn, ModalPicture, PictureDescr } from './Modal.styled';
import { customStyles } from 'styles/modalStyles';
import { useState } from 'react';

import { Button } from '@chakra-ui/react';

import { TfiPencil } from 'react-icons/tfi';
import { ChangeContactModal } from 'components/ChangeContactModal/ChangeContactModal';

Modal.setAppElement('#root');

export const ContactModal = ({ isOpen, data, onClose }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

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
        width="260"
      />
      <PictureDescr>
        <p>{data?.name}</p>
        <p>
          <a href={'tel:' + data?.phone}>{data?.phone}</a>
        </p>
      </PictureDescr>
      <Button onClick={openModal}>
        <TfiPencil size="16" />
      </Button>
      <ChangeContactModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        data={data}
      />
    </Modal>
  );
};
