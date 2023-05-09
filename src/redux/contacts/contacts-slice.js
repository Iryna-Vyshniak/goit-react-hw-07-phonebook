import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import initialContacts from 'data/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        //state.push(payload);
        return [...state, payload];
      },
      // підготовча ф-ція
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact } from './contacts-actions';

//import initialContacts from 'data/contacts.json';

// export const contactsReducer = createReducer([], builder => {
//   builder
//     .addCase(addContact, (state, { payload }) => {
//       1st variant => library protect mutation
//       state.push(payload); // => return [...state, payload];
//       2nd variant
//       return [...state, payload];
//     })
//     .addCase(deleteContact, (state, { payload }) => {
//       return state.filter(contact => contact.id !== payload);
//     });
// });

/* 
# from file contacts-actions 

import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', data => {
  return {
    payload: {
      id: nanoid(),
      ...data,
    },
  };
});
export const deleteContact = createAction('contacts/delete');

*/
