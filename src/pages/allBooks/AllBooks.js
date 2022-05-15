import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import { useSelector } from "react-redux";
import { selectAllBooks } from "../../features/books/booksSlice";
import BookCard from "./components/BookCard";

function AllBooks() {
  const books = useSelector(selectAllBooks);
  return (
    <Grow in>
      <Grid container spacing={2}>
        {books.map((book) => {
          return (
            <Grid item xs={6} md={3} key={book.id}>
              <BookCard book={book} />
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
}

export default AllBooks;
