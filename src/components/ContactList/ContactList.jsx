import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IoPersonRemove } from 'react-icons/io5';
import { Btn, Image, Item, List } from './ContactList.styled';

// redux
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { deleteContact } from 'redux/contacts/contacts-operations';
import {
  getContacts,
  getFilteredContacts,
  getIsLoading,
  getError,
} from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filteredContacts = useSelector(getFilteredContacts);
  console.log(filteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      {isLoading && contacts.length === 0 && <div>Loading....</div>}
      {error && !isLoading && <div>Ooops, error...</div>}

      <List>
        {filteredContacts?.map(({ avatar, name, phone, id }) => {
          console.log(avatar);
          return (
            <Item key={id}>
              <Image src={avatar} alt="Contact`s avatar" width="48" />
              <span>{name}:</span>
              <span>{phone}</span>
              <Btn type="button" onClick={() => onDeleteContact(id)}>
                <IoPersonRemove size="14" />
              </Btn>
            </Item>
          );
        })}
      </List>
    </>
  );
};
