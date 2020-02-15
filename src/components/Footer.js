import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./Footer.scss";
import styles from "./Footer.module.scss";
import Logo from "../img/yankee-logo.inline.svg";
import facebook from "../img/social/facebook.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Logo id="footer-logo" />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/attractions">
                        Attractions
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/gallery">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      {/* TODO: Update link */}
                      <a href="#" className="navbar-item">
                        Reservations
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className={`menu-list ${styles.MenuList}`}>
                    <li>430 Rte 3 Holderness, New Hampshire</li>
                    <li>
                      <a className={styles.TelLink} href="tel:+16033754331">
                        (603) 375-4331
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a
                  title="facebook"
                  href="https://www.facebook.com/YankeeTrailMotelBreakfastRestaurant/"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {this.props.hero.title && (
          <div
            className={`content has-text-white-ter ${styles.AttributionContainer}`}
          >
            Header photo:{" "}
            <a href={this.props.hero.link}>"{this.props.hero.title}"</a> by{" "}
            {this.props.hero.artist}
            {this.props.hero.license.link &&
              this.props.hero.license.name && [
                <span> / </span>,
                <a href={this.props.hero.license.link}>
                  {this.props.hero.license.name}
                </a>
              ]}
            {this.props.hero.modifications &&
              ` / ${this.props.hero.modifications}`}
          </div>
        )}
      </footer>
    );
  }
};

Footer.propTypes = {
  hero: PropTypes.object.isRequired
};

export default Footer;
