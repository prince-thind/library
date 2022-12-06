import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";
import Grow from "@mui/material/Grow";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { DateTime } from "luxon";

import DeleteDialog from "./components/DeleteDialog";
import { selectBookById } from "../../features/books/booksSlice";

function Book() {
  const id = +useParams().id;
  const navigate = useNavigate();
  const book = useSelector((state) => selectBookById(state, id));

  if (!book) {
    return (
      <Typography variant="h2" component="h2">
        No Book Found
      </Typography>
    );
  }

  const timeFromNow = DateTime.fromISO(book.date).toRelative();

  return (
    <Grow in>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Paper elevation={2} sx={{ p: 1, width: 1 }}>
          <Typography variant="h2" component="h2">
            {book.name}
          </Typography>

          <Typography
            variant="h6"
            component="h4"
            sx={{ color: "text.secondary" }}
          >
            - {book.author}
          </Typography>
          <Box sx={{ mt: 1 }}>
            {book.read && (
              <Rating
                name="read-only"
                value={book.rating}
                readOnly
                precision={0.5}
              />
            )}
            <Typography variant="h5" component="div" sx={{ mt: 1 }}>
              {book.read ? (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  Read{" "}
                  <CheckBoxIcon color="success" sx={{ ml: 1, fontSize: 32 }} />
                </Box>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  Unread{" "}
                  <CancelIcon sx={{ color: red[500], ml: 1, fontSize: 32 }} />
                </Box>
              )}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            component="p"
            sx={{ color: "text.primary", mt: 3, mb: 3 }}
          >
            {book.description}
          </Typography>

          <Typography
            variant="body2"
            component="p"
            sx={{
              color: "text.secondary",
              display: "flex",
              justifyContent: "right",
            }}
          >
            Added {timeFromNow}
          </Typography>
        </Paper>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/books/update/" + book.id);
          }}
        >
          Update
        </Button>
        <DeleteDialog id={book.id} />
      </Box>
    </Grow>
  );
}

export default Book;
