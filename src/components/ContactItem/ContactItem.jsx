import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// @chakra-ui/react'
import { Tooltip } from '@chakra-ui/react';
// mui
import Avatar from '@mui/material/Avatar';

// functions
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { abbrevName } from 'utils/abbrevName';

import { ContactModal } from 'components/Modal/Modal';

// redux
import { deleteContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/selectors';

// style
import { IoPersonRemove } from 'react-icons/io5';
import {
  Btn,
  ContactDescr,
  Image,
  Item,
  ModalPictureWrapper,
  WhatsappIcon,
  WhatsappShareButton,
  WrapperBtns,
} from './ContactItem.styled';

export const ContactItem = ({ avatar, name, phone, id }) => {
  const contacts = useSelector(selectContacts);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isValidImageUrl, setIsValidImageUrl] = useState(true);

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const closeModal = () => {
    setSelectedContact(null);
  };

  const setModalData = id => {
    const selectContact = contacts.find(contact => contact.id === id);
    setSelectedContact(selectContact);
  };

  function stringAvatar(name) {
    //console.log(name);
    return {
      sx: {
        bgcolor: getRandomHexColor(),
      },
      children: abbrevName(name),
    };
  }

  return (
    <>
      <Item>
        <Tooltip label="Click" color="#000" fontSize="xs">
          <ModalPictureWrapper>
            {avatar && isValidImageUrl ? (
              <Image
                src={avatar}
                alt="Contact`s avatar"
                width="48"
                onClick={() => setModalData(id)}
                onError={e => {
                  //console.log(name, e.target);
                  setIsValidImageUrl(false);
                }}
              />
            ) : (
              <Avatar
                onClick={() => setModalData(id)}
                {...stringAvatar(Object.values(name).join(''))}
              />
            )}
          </ModalPictureWrapper>
        </Tooltip>
        <ContactDescr>
          <span>{name} </span>
          <Tooltip label="Call" color="#000" fontSize="xs">
            <span>
              <a href={'tel:' + phone}>{phone}</a>
            </span>
          </Tooltip>
          <WrapperBtns>
            <Tooltip label="Share" color="#000" fontSize="xs">
              <WhatsappShareButton
                url={'tel:' + phone}
                title={'contact' + name}
                hashtag="#telnumber"
              >
                <WhatsappIcon size={30} round={true} />
              </WhatsappShareButton>
            </Tooltip>
            <Tooltip label="Delete" color="#000" fontSize="xs">
              <Btn type="button" onClick={() => onDeleteContact(id)}>
                <IoPersonRemove size="14" />
              </Btn>
            </Tooltip>
          </WrapperBtns>
        </ContactDescr>
      </Item>
      <ContactModal
        isOpen={selectedContact !== null}
        onClose={closeModal}
        data={selectedContact}
        isValidImageUrl={isValidImageUrl}
      />
    </>
  );
};
