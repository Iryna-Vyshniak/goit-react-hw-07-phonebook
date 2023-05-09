import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

// ----- last before ----
// import { createReducer } from '@reduxjs/toolkit';
// import { setFilter } from './filter-actions';

// export const filterReducer = createReducer('', builder => {
//   builder.addCase(setFilter, (_, { payload }) => payload);
// });

// ---- first before ----
// const initialState = '';

// export const filterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case SET_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
