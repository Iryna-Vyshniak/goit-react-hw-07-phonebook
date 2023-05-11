import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// toastify
import { toast } from 'react-toastify';
import { toastifyOptions } from 'utils/toastifyOptions';

// @chakra-ui/react'
import { Tooltip } from '@chakra-ui/react';

import { IoPersonRemove } from 'react-icons/io5';
import {
  Btn,
  ContactDescr,
  Image,
  Info,
  Item,
  List,
  ModalPictureWrapper,
  WhatsappIcon,
  WhatsappShareButton,
  WrapperBtns,
} from './ContactList.styled';

// redux
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { deleteContact } from 'redux/contacts/contacts-operations';
import {
  getContacts,
  getIsLoading,
  getError,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import { ContactModal } from 'components/Modal/Modal';
import { Fragment } from 'react';
import Avatar from 'assets/avatar.png';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  const [selectedContact, setSelectedContact] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(
      ({ name, phone }) =>
        name.toLowerCase().trim().includes(normalizedFilter) ||
        phone.trim().includes(normalizedFilter)
    );

    if (normalizedFilter && !filteredContacts.length) {
      toast.warn(`No contacts matching your request`, toastifyOptions);
      return [];
    }
    return filteredContacts;
  };

  const filteredContacts = getFilteredContacts();

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

  return (
    <>
      {isLoading && contacts.length === 0 && <div>Loading....</div>}
      {error && !isLoading && <div>Ooops, error...</div>}
      {!error && !isLoading && filteredContacts.length > 0 ? (
        <List>
          {filteredContacts?.map(({ avatar, name, phone, id }) => {
            return (
              <Fragment key={id}>
                <Item>
                  <Tooltip
                    label="Click"
                    hasArrow
                    bg="gray.300"
                    color="#000"
                    fontSize="xs"
                  >
                    <ModalPictureWrapper>
                      <Image
                        src={avatar !== '' ? `${avatar}` : Avatar}
                        alt="Contact`s avatar"
                        width="48"
                        onClick={() => setModalData(id)}
                      />
                    </ModalPictureWrapper>
                  </Tooltip>
                  <ContactDescr>
                    <span>{name}:</span>
                    <span>
                      <a href={'tel:' + phone}>{phone}</a>
                    </span>
                    <WrapperBtns>
                      <Tooltip
                        label="Share"
                        hasArrow
                        bg="gray.300"
                        color="#000"
                        fontSize="xs"
                      >
                        <WhatsappShareButton
                          url={'tel:' + phone}
                          title={'contact' + name}
                          hashtag="#telnumber"
                        >
                          <WhatsappIcon size={30} round={true} />
                        </WhatsappShareButton>
                      </Tooltip>
                      <Tooltip
                        label="Delete"
                        hasArrow
                        bg="gray.300"
                        color="#000"
                        fontSize="xs"
                      >
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
                />
              </Fragment>
            );
          })}
        </List>
      ) : (
        <Info>Phonebook is empty. Please, add your first contact</Info>
      )}
    </>
  );
};
