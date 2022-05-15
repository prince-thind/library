import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/books/booksSlice";

const persistedState = JSON.parse(localStorage.getItem("reduxState") ?? "{}");

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
