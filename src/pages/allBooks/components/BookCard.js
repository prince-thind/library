import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CancelIcon from "@mui/icons-material/Cancel";
import { red } from "@mui/material/colors";

export default function BookCard({ book }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <Paper elevation={3} sx={{ p: 1 }}>
        <Typography variant="h5" component="h3">
          {book.name}
        </Typography>

        <Typography
          variant="body2"
          component="h4"
          sx={{ color: "text.secondary" }}
        >
          - {book.author}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Rating
            name="read-only"
            value={book.rating}
            readOnly
            precision={0.5}
          />
          <Typography variant="body1" component="span">
            {book.read ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Read <CheckBoxIcon color="success" />
              </Box>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                Unread <CancelIcon sx={{ color: red[500] }} />
              </Box>
            )}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          component="p"
          sx={{ color: "text.primary", mt:3, mb:3 }}
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
          {book.date.toLocaleString()}
        </Typography>
      </Paper>
    </Box>
  );
}
