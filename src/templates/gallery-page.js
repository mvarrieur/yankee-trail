import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PhotoHeader from "../components/PhotoHeader";
import ReservationButton from "../components/ReservationButton";

export const GalleryPageTemplate = ({ heading, description, images }) => (
  <div className="content">
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="has-text-weight-semibold is-size-2">{heading}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Features gridItems={images} maxWidth="100%" />
              <ReservationButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

GalleryPageTemplate.propTypes = {
  hero: PropTypes.object,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array
};

const GalleryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <GalleryPageTemplate
        heading={frontmatter.heading}
        description={frontmatter.description}
        images={frontmatter.images}
      />
    </Layout>
  );
};

GalleryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default GalleryPage;

export const galleryPageQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        heading
        description
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
      }
    }
  }
`;
