import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import sampleData from "../../lib/sampleData";

const bookAdapter = createEntityAdapter();

export const booksSlice = createSlice({
  name: "books",
  initialState: sampleData,
  reducers: {
    create: bookAdapter.addOne,
    update: (state, action) => {
      const newBook = action.payload;
      const id = newBook.id;
      const updateObject = { id, changes: newBook }
      bookAdapter.updateOne(state, updateObject)
    },
    remove: bookAdapter.removeOne,
  },
});

// Action creators are generated for each case reducer function
export const { create, update, remove } = booksSlice.actions;

export const selectAllBooks = (state) => Object.values(state.books.entities);

export const selectBookById = (state, bookId) =>
  state.books.entities[bookId]

export default booksSlice.reducer;
