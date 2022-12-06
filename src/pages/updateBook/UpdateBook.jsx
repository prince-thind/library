import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";

import BookForm from "../../commonComponents/BookForm";

import { useNavigate, useParams, Navigate } from "react-router-dom";
import { selectBookById, update } from "../../features/books/booksSlice";
import { useDispatch, useSelector } from "react-redux";

function UpdateBook() {
  const id = +useParams().id;
  const book = useSelector((state) => selectBookById(state, id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!book) {
    return <Navigate to="/books" />;
  }

  function updateBook(book) {
    dispatch(update(book));
    navigate("/books/" + book.id);
  }

  return (
    <Grow in>
      <Box>
        <Typography
          variant="h4"
          component="h3"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          Update Book- {book.name}
        </Typography>
        <BookForm book={book} customHandler={updateBook} />
      </Box>
    </Grow>
  );
}

export default UpdateBook;
