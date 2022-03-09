import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const navigate = useNavigate();

  const userData = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  console.log(userData);
  const logOut = () => {
    localStorage.clear("userInfo");
    navigate("/");
  };

  return (
    <div>
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <div class="logo">
            <a>
              <i class="fa fa-angellist"></i> Logo
            </a>
          </div>

          <ul id="menu">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>About</a>
            </li>
            {userData ? null : (
              <Link
                onClick={() => {
                  //  e.preventDefault();
                }}
                to={"/signup"}
              >
                Signup
              </Link>
            )}

            <li>
              <a>{userData && userData.data.name}</a>
            </li>
            {userData ? (
              <Link
                onClick={() => {
                  //  e.preventDefault();
                  logOut();
                }}
                to={"/"}
              >
                Logout
              </Link>
            ) : (
              <Link
                onClick={() => {
                  // e.preventDefault()
                }}
                to={"/login"}
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      </nav>
      <div class="menuIcon">
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </div>

      <div class="overlay-menu">
        <ul id="menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
