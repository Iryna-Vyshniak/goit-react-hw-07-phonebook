import { useDispatch, useSelector } from 'react-redux';

import { IoPersonRemove } from 'react-icons/io5';
import { Btn, Item, List } from './ContactList.styled';

// redux
import { deleteContact } from 'redux/contacts/contacts-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <Btn type="button" onClick={() => onDeleteContact(id)}>
              <IoPersonRemove size="14" />
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};
