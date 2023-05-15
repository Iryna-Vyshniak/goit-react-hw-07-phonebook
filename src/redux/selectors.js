export const selectContacts = ({ contacts }) => contacts.items;
export const selectIsLoading = ({ contacts }) => contacts.isLoading;
export const selectError = ({ contacts }) => contacts.error;
export const selectFilter = ({ filter }) => filter;

export const selectFilteredContacts = ({ filter, contacts: { items } }) => {
  if (!filter) {
    return items;
  }
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(
    ({ name, phone }) =>
      name.toLowerCase().trim().includes(normalizedFilter) ||
      phone.trim().includes(normalizedFilter)
  );

  //   if (normalizedFilter && !filteredContacts.length) {
  //     toast.warn(`No contacts matching your request`, toastifyOptions);
  //     return [];
  //   }
  return filteredContacts;
};
