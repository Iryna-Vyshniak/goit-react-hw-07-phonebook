import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://64302ad0b289b1dec4c2d198.mockapi.io/contacts',
});

export const getAllContacts = () => contactsInstance.get('/');

export const deleteContact = id => {
  return contactsInstance.delete(`/${id}`);
};

export const addContact = data => {
  return contactsInstance.post('/', data);
};

export const editContact = data => {
  return contactsInstance.put(`/${data.id}`, {
    avatar: data.avatar,
    name: data.name,
    phone: data.phone,
  });
};
