import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="sec aboutus">
          <h2>About Us</h2>
          <p>
          AnnaDaata unites individuals, organizations, and businesses in a shared mission to alleviate hunger and reduce food waste. 
          Our platform serves as a connective force, enabling contributors to make a meaningful impact in providing for the needy.
          <br></br> 
          <br></br>
          <p>Join AnnaDaata in our commitment to creating a hunger-free world through community-driven solutions.</p>
          </p>
          <ul class="sci">
            <li>
              <Link to="/">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaLinkedinIn />
              </Link>
            </li>
          </ul>
        </div>
        <div class="sec quicklinks">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
        <div class="sec contactBx">
          <h2>Contact Info</h2>
          <ul class="info">
            <li>
              <span>
                <i class="bx bxs-map"></i>
              </span>
              <span>
                Kshudiram nagar <br />
                Haldia
                <br />
                India
              </span>
            </li>
            <li>
              <span>
                <i class="bx bx-envelope"></i>
              </span>
              <p>
                <Link to="mailto:khaanakhazana@gmail.com">
                  annadaata@gmail.com
                </Link>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
