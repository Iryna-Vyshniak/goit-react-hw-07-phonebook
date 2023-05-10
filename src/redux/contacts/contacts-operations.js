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
      console.log(data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

// ф-ція перевірка на дублікати
const isDublicate = (contacts, { name, phone }) => {
  const normalizedName = name.toLowerCase().trim();
  const normalizedNumber = phone.trim();

  const dublicate = contacts.find(
    contact =>
      contact.name.toLowerCase().trim() === normalizedName ||
      contact.phone.trim() === normalizedNumber
  );
  return Boolean(dublicate);
};

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContact(data);
      console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
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
      console.log(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

// createAsyncThunk створює функцію:
// export const fetchContacts = () => {
//   const func = async dispatch => {
//     try {
//       dispatch(actions.fetchContactsPending());
//       const { data } = await api.getAllContacts();
//       dispatch(actions.fetchContactsFulfilled(data));
//     } catch ({ response }) {
//       dispatch(actions.fetchContactsRejected(response));
//     }
//   };

//   return func;
// };
