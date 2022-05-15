import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import BookForm from "../../commonComponents/BookForm";
import { create } from "../../features/books/booksSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function CreateBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function saveBook(book) {
    dispatch(create(book));
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
          Create a new Book
        </Typography>
        <BookForm customHandler={saveBook} />
      </Box>
    </Grow>
  );
}

export default CreateBook;
