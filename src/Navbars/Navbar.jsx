import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import "./Navbarresponsive.css";
import Advert from "../Advert/Advert";
import icon from '../Navbars/icon.png'
import cart from "../Navbars/cart.png";
import menus from "../Navbars/menu.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { auth, signOutUser } from "../firebase"; // Import the necessary Firebase functions
import { faInstagram } from "@fortawesome/free-brands-svg-icons";



function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged((user) => {
       // Update the state based on the user's authentication status
       setIsLoggedIn(!!user);
     });

     // Clean up the subscription when the component unmounts
     return () => unsubscribe();
   }, []);

   const handleLogout = async () => {
     try {
       await signOutUser();
     } catch (error) {
       console.error("Error signing out:", error.message);
     }
   };

  const linked = () => {
   setMenuVisible(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 const toggleMenu = () => {
   setMenuVisible(!isMenuVisible);
 };

 const closeMenu = () => {
   setMenuVisible(false);
 };
  

  return (
    <div className="Navbar-cons">
      <div
        className={`dropdownmenu-container ${isMenuVisible ? "appear" : ""}`}
      >
        <div className="wigstationlogo">
          <div>
            <img src={icon} alt="wigwonderland icon" />
            <h1>Wig Wonderland</h1>
          </div>
          <div className="Cancelmenu">
            <button onClick={closeMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <div className="menu">
          <div className="menu-div">
            <ol>
              <li>
                <NavLink onClick={linked} exact to="/" className="NavLink">
                  HOME
                </NavLink>
                <span></span>
              </li>
              <li>
                <NavLink onClick={linked} to="/Shop" className="NavLink">
                  SHOP
                </NavLink>

                <span></span>
              </li>

              <li>
                <NavLink onClick={linked} to="/NewIn" className="NavLink">
                  NEWIN
                </NavLink>
                <span></span>
              </li>
            </ol>

            <div className="Navbar-login">
              <span>
                <a
                  onClick={linked}
                  href="https://www.instagram.com/the_wig_wonderland?igsh=YzljYTk1ODg3Zg=="
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </span>
              {isLoggedIn ? (
                // If logged in, show the Log Out button
                <span className="log" onClick={handleLogout}>Log Out</span>
              ) : (
                // If not logged in, show the Log In button
                <Link onClick={linked} to="/Login" className="log">
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Advert />
      <main>
        <header className={`Navbar-con ${isScrolled ? "scrolled" : ""}`}>
          <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="logo">
              <h1>Wig Wonderland</h1>
            </div>

            <ul className="links">
              <li>
                <NavLink onClick={closeMenu} exact to="/" className="NavLink">
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink onClick={linked} to="/Shop" className="NavLink">
                  SHOP
                </NavLink>
              </li>

              <li>
                <NavLink onClick={linked} to="/NewIn" className="NavLink">
                  NEW IN
                </NavLink>
              </li>
            </ul>

            <div className="dropdowncart">
              <div className="cart-container">
                <NavLink to="/cart" className="NavLink">
                  <img src={cart} alt="Cart" />
                  <span className="cart-count">0</span>
                </NavLink>
              </div>

              <div className="dropdown">
                {/* Corrected the function name */}
                <img onClick={toggleMenu} src={menus} alt="menu" />
              </div>
            </div>
          </nav>
        </header>
      </main>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Navbar;
