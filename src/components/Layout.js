import { Box } from "@mui/material";
import Header from "./Header";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}

export default Layout;
