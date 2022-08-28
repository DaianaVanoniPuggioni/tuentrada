import logo from "../../logo.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div>
        <a href="#">
          <img src={logo} alt="logo"></img>
        </a>
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Descarga tu ticket</a>
          </li>
          <li>
            <a href="#">Preguntas Frecuentes</a>
          </li>
        </ul>
      </div>
      <div className="button">
        <a className="borderIcon" href="#">
          <img src="https://img.icons8.com/material-sharp/24/000000/user.png" />
        </a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
