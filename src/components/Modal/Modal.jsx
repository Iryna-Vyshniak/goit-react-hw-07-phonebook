import Modal from 'react-modal';
import { useState } from 'react';
import { TfiPencil } from 'react-icons/tfi';
import { MdOutlineClose } from 'react-icons/md';
import { Tooltip } from '@mui/material';

import Avatar from 'assets/avatar.png';
import {
  Button,
  CloseBtn,
  ModalPicture,
  ModalPictureWrapper,
  PictureDescr,
} from './Modal.styled';
import { customStyles } from 'styles/modalStyles';

import { ChangeContactModal } from 'components/ChangeContactModal/ChangeContactModal';

Modal.setAppElement('#root');

export const ContactModal = ({ isOpen, data, onClose, isValidImageUrl }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openChangeModal = () => {
    setModalIsOpen(true);
  };

  const closeChangeModal = () => {
    setModalIsOpen(false);
    onClose();
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
      <ModalPictureWrapper>
        <ModalPicture
          src={
            data?.avatar !== '' && isValidImageUrl ? `${data?.avatar}` : Avatar
          }
          alt="photo"
          width="260"
        />
      </ModalPictureWrapper>
      <PictureDescr>
        <p>{data?.name}</p>
        <Tooltip
          title="Call"
          describeChild
          PopperProps={{
            sx: {
              '& .MuiTooltip-tooltip': {
                bgcolor: '#608B38',
                color: '#FFF',
                width: '50px',
                textAlign: 'center',
              },
            },
          }}
        >
          <p>
            <a href={'tel:' + data?.phone}>{data?.phone}</a>
          </p>
        </Tooltip>
      </PictureDescr>
      <Button onClick={openChangeModal}>
        <TfiPencil size="16" />
      </Button>
      <ChangeContactModal
        isOpen={modalIsOpen}
        onClose={closeChangeModal}
        data={data}
        setModalIsOpen={setModalIsOpen}
      />
    </Modal>
  );
};
