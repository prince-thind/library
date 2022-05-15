import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import BookForm from "./components/BookForm";

function CreateBook() {
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
        <BookForm />
      </Box>
    </Grow>
  );
}

export default CreateBook;
