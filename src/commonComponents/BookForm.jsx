import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BookForm({ book = {}, customHandler }) {
  const [name, setName] = useState(book.name ?? "");
  const [author, setAuthor] = useState(book.author ?? "");
  const [description, setDescription] = useState(book.description ?? "");
  const [read, setRead] = useState(book.read ?? false);
  const [rating, setRating] = useState(book.rating ?? 0);
  const id = book.id ?? Date.now();

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
        setRead(value === "true");
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
      read,
      rating,
      id,
    };
    customHandler(book);
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
          value={name}
          onChange={onChangeHandler}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          required
          id="book-author"
          name="author"
          value={author}
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
          value={description}
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
      {read && (
        <Box
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
        </Box>
      )}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
