import { Box, Container } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box>
      <Header />
      <Container sx={{mt:3}}>
        <Outlet />
      </Container>
    </Box>
  );
}

export default Layout;
