import "../styles/layout/Header.scss";
//import { Link, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <h1 className='header__title'>Portfolio</h1>
        <ul className='header__ul'>
          <li>
            <NavLink
              to='/'
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending header__link"
                  : isActive
                  ? "active header__link"
                  : "header__link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/projects/"} className='header__link'>
              Projects
            </NavLink>
          </li>
          {/* <li>
              <NavLink to={"/aboutme/"} className='header__link'>
                About me
              </NavLink>
            </li> */}
          <li>
            <NavLink to={"/contact/"} className='header__link'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
