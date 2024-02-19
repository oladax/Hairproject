import React from "react";
import "./footerresponsive.css";
import { Link, Outlet, useLocation } from "react-router-dom";

function Quicklinks() {
  const location = useLocation();

  const linkeds = () => {
    const documentHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    const scrollToPosition = documentHeight / 10;

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth",
    });
  };

  // Function to update document title based on route
  const updateDocumentTitle = () => {
    switch (location.pathname) {
      case "/about":
        document.title = "About Us - Wigwonderland Hair";
        break;
      case "/privacy":
        document.title = "Privacy Policy - Wigwonderland Hair";
        break;
      case "/customer":
        document.title = "Customer Service - Wigwonderland Hair";
        break;
      case "/terms":
        document.title = "Terms of Service - Wigwonderland Hair";
        break;
      case "/paymentpolicy":
        document.title = "Payment Policy - Wigwonderland Hair";
        break;
      case "/shippinginformation":
        document.title = "Shipping Policy - Wigwonderland Hair";
        break;
      case "/returns/refunds":
        document.title = "Return Policy - Wigwonderland Hair";
        break;
      case "/faq":
        document.title = "FAQ - Wigwonderland Hair";
        break;
      case "/registration":
        document.title = "My Account - Wigwonderland Hair";
        break;
      case "/Login":
        document.title = "Login - Wigwonderland Hair";
        break;
      case "/contact":
        document.title = "Contact Us - Wigwonderland Hair";
        break;
      default:
        document.title = "Wigwonderland Hair";
        break;
    }
  };

  // Call updateDocumentTitle whenever location changes
  React.useEffect(() => {
    updateDocumentTitle();
  }, [location]);

  return (
    <div>
      <div className="linkdiv">
        <div className="aboutwigwonderland">
          <ul>
            <h3>ABOUT WIGWONDERLAND HAIR</h3>
            <span>
              <Link onClick={linkeds} to="/about">
                About Us
              </Link>
            </span>
            <span>
              <Link onClick={linkeds} to="/privacy">
                Privacy Policy
              </Link>
            </span>
            <span>
              <Link onClick={linkeds} to="/customer">
                Customer Service
              </Link>
            </span>
            <span>
              <Link onClick={linkeds} to="/terms">
                Terms of Service
              </Link>
            </span>
          </ul>
        </div>

        <div className="buyinstruction">
          <ul>
            <h3>BUYER INSTRUCTION</h3>
            <span>
              <Link onClick={linkeds} to="/paymentpolicy">
                Payment Policy
              </Link>
            </span>
            <span>
              <Link onClick={linkeds} to="/shippinginformation">
                Shipping Policy
              </Link>
            </span>
            <span>
              <Link onClick={linkeds} to="/returns/refunds">
                Return Policy
              </Link>
            </span>

            <span>
              <Link onClick={linkeds} to="/faq">
                FAQ
              </Link>
            </span>
          </ul>
        </div>

        <div className="Account">
          <ul>
            <h3>MY ACCOUNT</h3>
            <span>
              <Link onClick={linkeds} to="/registration">
                My Account
              </Link>
            </span>

            <span>
              <Link onClick={linkeds} to="/Login">
                Orders
              </Link>
            </span>

            <span>
              <Link onClick={linkeds} to="/Login">
                Order Tracking
              </Link>
            </span>

            <span>
              <Link onClick={linkeds} to="/contact">
                Contact Us
              </Link>
            </span>
          </ul>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Quicklinks;
