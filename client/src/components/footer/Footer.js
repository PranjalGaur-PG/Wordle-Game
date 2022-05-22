import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container-footer">
          <div className="row">
            <div className="col-sm-6 col-md-6 item">
              <p className="copyright">Pranjal Gaur © 2022</p>
              {/* <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul> */}
            </div>

            {/* <div className="col-md-8 item text">
              <h3>Wordle Game</h3>
              <p>
                Wordle is simple: You have six chances to guess the day’s secret
                five-letter word. Type in a word as a guess, and the game tells
                you which letters are or aren’t in the word. The aim is to
                figure out the secret word with the fewest guesses.
              </p>
            </div> */}
            <div className="col-md-6 col">
              <ul className="col item social">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;