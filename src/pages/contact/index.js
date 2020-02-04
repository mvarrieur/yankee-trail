import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import ReservationButton from "../../components/ReservationButton";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Contact</h1>
              <div className="columns">
                <div className="column is-6"></div>
                <div className="column is-6">
                  <iframe
                    width="100%"
                    height="576"
                    src="https://maphub.net/embed/82456?directions=1"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
              <ReservationButton />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
