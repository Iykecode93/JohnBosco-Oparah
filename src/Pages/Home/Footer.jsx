import React from "react";
import { Link } from "react-scroll";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

function Footer() {

  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--logo--nav">
          <h3>iykode..</h3>
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Stack"
                className="text-md"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Projects
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li> */}
            {/* <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="footer--social">
        <div>
            <a href="https://linkedin.com/in/johnbosco-oparah" target="_blank">
              <BsLinkedin />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/OparahJohnbosco?s=20" target="_blank">
              <BsTwitter />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/john.iyke.35" target="_blank">
              <FaFacebookF />
            </a>
          </div>
          <div>
            <a
              href="https://wa.me/2348034569390"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">
          COPYRIGHT @ 2024 JOHNBOSCO. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}

export default Footer;
