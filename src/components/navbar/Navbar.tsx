import "./navbar.scss";
import logo from "../../../public/icons/logo.svg";
import { colors } from "@mui/material";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/bell.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
          <span style={{ color: "#2e2e2e" }}>John</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
