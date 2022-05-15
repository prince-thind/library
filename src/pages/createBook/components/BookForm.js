import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { create } from "../../../features/books/booksSlice";

export default function BookForm({ book = {} }) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [read, setRead] = useState(false);
  const [rating, setRating] = useState(0);

  const dispatch = useDispatch();

  const id = book.id;

  function onChangeHandler(e) {
    const value = e.target.value;
    const name = e.target.name;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "rating":
        setRating(+value);
        break;
      case "read":
        setRead(value==="true");
        break;
      default:
        console.log("something weird happened");
        break;
    }
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    const book = {
      name,
      author,
      description,
      rating,
      read,
      id: Date.now(),
    };

    dispatch(create(book));
    //update based on id
  }

  return (
    <Box
      component="form"
      onSubmit={onSubmitHandler}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45ch" },
      }}
      autoComplete="off"
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          required
          id="book-name"
          name="name"
          label="Book Name"
          variant="standard"
          onChange={onChangeHandler}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          required
          id="book-author"
          name="author"
          label="Book Author"
          onChange={onChangeHandler}
          variant="standard"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          required
          id="book-description"
          name="description"
          label="Book Description"
          multiline
          onChange={onChangeHandler}
          variant="standard"
        />
      </Box>
      <Box>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="read"
          value={read}
          row
          sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 2 }}
          onChange={onChangeHandler}
        >
          <FormControlLabel value="true" control={<Radio />} label="Read" />
          <FormControlLabel
            value="false"
            control={<Radio />}
            label="Not Read"
          />
        </RadioGroup>
      </Box>
      {read && <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Typography variant="h6" component="span" sx={{ mr: 1 }}>
          Rating:{" "}
        </Typography>
        <Rating
          name="rating"
          precision={0.5}
          value={+rating}
          onChange={onChangeHandler}
        />
      </Box>}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Box>
    </Box>
  );
}
