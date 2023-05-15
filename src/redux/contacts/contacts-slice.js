import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
} from './contacts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const customArrThunks = [
  fetchContacts,
  addContact,
  deleteContact,
  changeContact,
];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const fn = status => customArrThunks.map(el => el[status]);

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload);
};

const handleFulfilledChange = (state, { payload }) => {
  const index = state.items.findIndex(({ id }) => id === payload.id);
  if (index !== -1) {
    state.items[index] = payload;
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    const { pending, fulfilled, rejected } = status;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(changeContact.fulfilled, handleFulfilledChange)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

export default contactsSlice.reducer;
