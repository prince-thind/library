import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

function CustomLink({ color = "white", children, to }) {
  return (
    <Link to={to} component={RouterLink} sx={{ color, textDecoration: "none" }}>
      {children}
    </Link>
  );
}

export default CustomLink;
