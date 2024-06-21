import { useSelector } from "react-redux";
import AppHeader from "./AppHeader";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  return location.pathname === "/editor" && user ? <AppHeader /> : null;
};

export default Header;
