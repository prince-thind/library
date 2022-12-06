import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectAllBooks } from "../../features/books/booksSlice";
import BookCard from "./components/BookCard";

function AllBooks() {
  const books = useSelector(selectAllBooks);

  if (books.length === 0) {
    return (
      <Typography variant="h2" component="h2">
        No Book Found
      </Typography>
    );
  }


  return (
    <Grow in>
      <Grid container spacing={2}>
        {books.map((book) => {
          return (
            <Grid item xs={12} md={4} lg={3} key={book.id}>
              <BookCard book={book} />
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
}

export default AllBooks;
