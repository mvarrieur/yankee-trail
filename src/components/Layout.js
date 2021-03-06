import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/all.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const Layout = ({ children, hero }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <script type="application/ld+json">
          {`{
              "@context": "http://schema.org",
              "@type": "Motel",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Holderness",
                "addressRegion": "New Hampshire",
                "postalCode": "03245",
                "streetAddress": "430 Rte 3"
              },
              "name": "Yankee Trail Motel",
              "url": "https://www.yankeetrail.com/",
              "email": "yankeetrailmotel@gmail.com",
              "telephone": "16033754331",
              "openingHours": [
                "00:00-23:59",
                "00:00-23:59",
                "00:00-23:59",
                "00:00-23:59",
                "00:00-23:59",
                "00:00-23:59",
                "00:00-23:59"
              ],
              "paymentAccepted": "Visa, Master Card, Discover, Amex"
          }`}
        </script>

        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href={`${withPrefix("/")}img/apple-touch-icon-57x57.png`}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href={`${withPrefix("/")}img/apple-touch-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href={`${withPrefix("/")}img/apple-touch-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href={`${withPrefix("/")}img/apple-touch-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href={`${withPrefix("/")}img/apple-touch-icon-60x60.png`}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href={`${withPrefix("/")}img/apple-touch-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href={`${withPrefix("/")}img/apple-touch-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href={`${withPrefix("/")}img/apple-touch-icon-152x152.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-196x196.png`}
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-96x96.png`}
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-128.png`}
          sizes="128x128"
        />
        <meta name="application-name" content="Yankee Trail" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content={`${withPrefix("/")}/img/mstile-144x144.png`}
        />
        <meta
          name="msapplication-square70x70logo"
          content={`${withPrefix("/")}/img/mstile-70x70.png`}
        />
        <meta
          name="msapplication-square150x150logo"
          content={`${withPrefix("/")}/img/mstile-150x150.png`}
        />
        <meta
          name="msapplication-wide310x150logo"
          content={`${withPrefix("/")}/img/mstile-310x150.png`}
        />
        <meta
          name="msapplication-square310x310logo"
          content={`${withPrefix("/")}/img/mstile-310x310.png`}
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://www.yankeetrail.com/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer hero={hero ? hero : {}} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hero: PropTypes.object,
};

export default Layout;
