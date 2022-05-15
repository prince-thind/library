import { createSlice } from "@reduxjs/toolkit";
import sampleData from "../../lib/sampleData";

export const booksSlice = createSlice({
  name: "books",
  initialState: sampleData,
  reducers: {
    create: (state, action) => {
        console.log(action)
      //create logic
    },
    update: (state, action) => {
      //update logic
    },
    remove: (state, action) => {
      //delete logic
    },
  },
});

// Action creators are generated for each case reducer function
export const { create, update, remove } = booksSlice.actions;

export const selectAllBooks = state => state.books

export const selectBookById = (state, bookId) =>
  state.posts.find(book => book.id === bookId)

export default booksSlice.reducer;
