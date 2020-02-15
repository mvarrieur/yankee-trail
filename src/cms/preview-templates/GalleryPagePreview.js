import React from "react";
import PropTypes from "prop-types";
import { GalleryPageTemplate } from "../../templates/gallery-page";

const GalleryPagePreview = ({ entry, getAsset }) => {
  const heading = entry.getIn(["data"]).toJS();

  const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  return (
    <GalleryPageTemplate
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
      images={entry.getIn(["data", "images"])}
    />
  );
};

GalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default GalleryPagePreview;
