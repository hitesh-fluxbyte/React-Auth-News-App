import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavLink to="/"></NavLink>
      <Outlet />
    </>
  );
};

export default Layout;