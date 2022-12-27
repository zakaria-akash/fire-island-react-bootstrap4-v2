import React from "react";

import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              218/4, Babu Chowdhury Road
              <br />
              Madaripur Sadar, Madaripur-7900
              <br />
              Bangladesh
              <br />
              <i className="fa fa-phone fa-lg"></i>: +8801319321363
              <br />
              <i className="fa fa-fax fa-lg"></i>: +8801319321363
              <br />
              <i className="fa fa-envelope fa-lg"></i>:
              <a href="mailto:zakaria.93@yahoo.com"> zakaria.93@yahoo.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href={"https://google.com/"}
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href={"https://www.facebook.com/profile.php?id="}
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href={"https://www.linkedin.com/in/"}
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href={"https://twitter.com/"}
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href={"https://youtube.com/"}
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <a
              href="https://github.com/zakaria-akash"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2022 Zakaria Ibrahim
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
