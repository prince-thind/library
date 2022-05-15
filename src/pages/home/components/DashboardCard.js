import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Welcome to
        </Typography>
        <Typography variant="h3" component="div">
          Library
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          a React+Redux Application
        </Typography>
        <Typography variant="body2">
          This is a sample project made my me to demonstrate application of
          react+redux with MUI.
          <br />
          {"Feel free to explore around"}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          href="https://www.github.com/prince-thind/library"
          target="_blank"
        >
          {" "}
          Source Code
        </Link>
      </CardActions>
    </Card>
  );
}
