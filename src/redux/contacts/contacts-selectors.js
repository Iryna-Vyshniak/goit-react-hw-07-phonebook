import { toast } from 'react-toastify';
import { toastifyOptions } from 'utils/toastifyOptions';

export const getContacts = state => state.contacts.items;

export const getFilteredContacts = ({ filter, contacts: { items } }) => {
  if (!filter) {
    return items;
  }
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = items.filter(
    ({ name, phone }) =>
      name.toLowerCase().trim().includes(normalizedFilter) ||
      phone.trim().includes(normalizedFilter)
  );

  if (normalizedFilter && !filteredContacts.length) {
    toast.warn(`No contacts matching your request`, toastifyOptions);
  }
  return filteredContacts;
};

export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
