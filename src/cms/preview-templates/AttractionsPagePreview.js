import React from "react";
import PropTypes from "prop-types";
import { AttractionsPageTemplate } from "../../templates/attractions-page";

const AttractionsPagePreview = ({ entry, widgetFor }) => (
  <AttractionsPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

AttractionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AttractionsPagePreview;
