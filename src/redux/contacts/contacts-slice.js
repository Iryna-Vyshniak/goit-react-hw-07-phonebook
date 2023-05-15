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

const customArr = [fetchContacts, addContact, deleteContact, changeContact];

const defaultStatus = {
  pending: 'pending',
  rejected: 'rejected',
};

const fn = status => {
  return customArr.map(el => el[status]);
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(({ id }) => id !== payload);
};

const handleFulfilledChange = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(({ id }) => id === payload.id);
  if (index !== -1) {
    state.items[index] = payload;
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(changeContact.fulfilled, handleFulfilledChange)
      .addMatcher(isAnyOf(...fn(defaultStatus.pending)), handlePending)
      .addMatcher(isAnyOf(...fn(defaultStatus.rejected)), handleRejected);
  },
});

export default contactsSlice.reducer;

/* next variant without .addMatcher() */
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(payload);
//       })
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(({ id }) => id !== payload);
//       })
//       .addCase(deleteContact.rejected, handleRejected)
//       .addCase(changeContact.pending, handlePending)
//       .addCase(changeContact.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         //console.log(state.items);
//         const index = state.items.findIndex(({ id }) => id === payload.id);
//         //console.log(state.items[index]);
//         //console.log(payload);
//         if (index !== -1) {
//           state.items[index] = payload;
//         }
//       })
//       .addCase(changeContact.rejected, handleRejected)
//   },
// });
