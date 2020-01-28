import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./PhotoHeader.module.scss";

export const PhotoHeader = ({
  title,
  backgroundImageUrl,
  photoLink,
  photoTitle,
  photoArtist,
  photoLicenseName,
  photoLicenseLink
}) => (
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
    <section>
      <div className={`container ${styles.AttributionContainer}`}>
        <a href={photoLink}>"{photoTitle}"</a> by {photoArtist} /{" "}
        <a href={photoLicenseLink}>{photoLicenseName}</a>
      </div>
    </section>
  </Fragment>
);

PhotoHeader.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired,
  photoLink: PropTypes.string.isRequired,
  photoTitle: PropTypes.string.isRequired,
  photoArtist: PropTypes.string.isRequired,
  photoLicenseName: PropTypes.string.isRequired,
  photoLicenseLink: PropTypes.string.isRequired
};

export default PhotoHeader;
