import logo from "../../logo.png";
import './NavBar.css';

const NavBar = () => {
  return (
    <div  className='navbar-container'>
      <div>
      <a href="#"><img src={logo} alt="logo"></img></a>
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
      <div>
      <button><img src="https://img.icons8.com/material-sharp/24/000000/user.png"/>Iniciar Sessión</button>
      </div>
      </div>
  );
};

export default NavBar;
