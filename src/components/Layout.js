import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <p>
      Layout content
      <Outlet />
    </p>
  );
}

export default Layout;
