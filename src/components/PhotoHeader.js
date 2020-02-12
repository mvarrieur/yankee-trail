import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./PhotoHeader.module.scss";

export const PhotoHeader = ({ title, backgroundImageUrl }) => (
  <Fragment>
    <section
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div className={styles.HeaderContainer}>
        <h1
          className={`has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen ${styles.Header}`}
        >
          {title}
        </h1>
      </div>
    </section>
  </Fragment>
);

PhotoHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired
};

export default PhotoHeader;
