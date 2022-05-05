import React from "react";
import "./FooterStyles.css";
import { FaHome, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { BsMailbox } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome />
            <div>
              <p>Radom</p>
            </div>
          </div>
          <div className="email">
            <h4>
              <CgCalendarDates />
              <div>
                <p>2022 - {new Date().getFullYear()}.</p>
              </div>
            </h4>
          </div>
          <div className="phone">
            <h4>
              <BsMailbox />
              <a href="mailto:puaro@vp.pl">
                <p>puaro@vp.pl</p>
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>Ustawa Rządowa z dnia 3 maja</h4>
          <p>
            uchwalona <b>3 maja 1791 roku</b> ustawa regulująca ustrój prawny
            Rzeczypospolitej Obojga Narodów. Powszechnie przyjmuje się, że
            Konstytucja 3 maja była pierwszą w Europie i drugą na świecie (po
            konstytucji amerykańskiej z 1787 r.) spisaną konstytucją.
          </p>
          <div className="social">
            <Link
              to="//www.facebook.com/groups/69141925912"
              target="_blank"
              rel="noopener noreferer"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="//twitter.com/mswia_gov_pl/status/1389090602906685447"
              target="_blank"
              rel="noopener noreferer"
            >
              <FaTwitter />
            </Link>
            <Link
              to="//pl.pinterest.com/elbietaszczniak/konstytucja-3-maja"
              target="_blank"
              rel="noopener noreferer"
            >
              <FaPinterestP />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
