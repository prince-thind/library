import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export default function Stats({ totalBooks, readBooks }) {
  return (
    <Box>
      <Typography variant="h5" component="div" sx={{ m: 1, mt:4 }}>
        Here are some Stats for you:
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
              <Typography variant="h4" component="div" sx={{ m: 1,display:'flex', justifyContent:'center' }}>
                Total Books: {totalBooks}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
              <Typography variant="h4" component="div" sx={{ m: 1, display:'flex', justifyContent:'center' }}>
                Total Read: {readBooks}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
