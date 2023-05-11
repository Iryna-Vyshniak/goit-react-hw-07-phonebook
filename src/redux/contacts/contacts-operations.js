import { createAsyncThunk } from '@reduxjs/toolkit';
// toastify
import { toast } from 'react-toastify';
import { toastifyOptions } from 'utils/toastifyOptions';

import * as api from 'shared/api/apiContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', // самостійно створює actions.fetchContactsPending, actions.fetchContactsFulfilled, actions.fetchContactsRejected
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(
        `Ooops! Wrong... Try again or update browser`
      );
    }
  }
);

// ф-ція перевірка на дублікати
const isDublicate = (contacts, { name, phone }) => {
  const normalizedName = name.toLowerCase().trim();
  const normalizedNumber = phone.trim();

  const dublicate = contacts.some(
    contact =>
      contact.name.toLowerCase().trim() === normalizedName ||
      contact.phone.trim() === normalizedNumber
  );
  return dublicate;
};

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContact(data);
      toast.success('Add contact', {
        position: 'bottom-right',
      });
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  },
  // щоб зробити перевірку до запиту на дублікати - передаємо 3-ім аргументом object with condition
  {
    condition: (data, { getState }) => {
      const {
        contacts: { items },
      } = getState();

      if (isDublicate(items, data)) {
        toast.error(`This contact is already in contacts`, toastifyOptions);
        return false; // якщо false  - запит преривається і не відбувається, в іншому випадку - запит продовжиться
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      toast.success('Contact delete', {
        position: 'bottom-right',
      });
      return id;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/editContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.editContact(data);
      toast.success('Contact update', {
        position: 'bottom-right',
      });
      // console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again or update browser`);
    }
  }
);
