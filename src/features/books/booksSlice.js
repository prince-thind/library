import { createSlice } from "@reduxjs/toolkit";
import sampleData from "../../lib/sampleData";

export const booksSlice = createSlice({
  name: "books",
  initialState: sampleData,
  reducers: {
    create: (state, action) => {
      const newBook = action.payload;
      state.push(newBook);
    },
    update: (state, action) => {
      //update logic
    },
    remove: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((b) => b.id === id);
      state.splice(index, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { create, update, remove } = booksSlice.actions;

export const selectAllBooks = (state) => state.books;

export const selectBookById = (state, bookId) =>
  state.books.find((book) => bookId === book.id);

export default booksSlice.reducer;
