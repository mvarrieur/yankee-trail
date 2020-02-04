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
              <div className="columns">
                <div className="column is-6">
                  <h1>Contact</h1>
                  <p>
                    <strong>Yankee Trail Motel</strong>
                  </p>
                  <p>
                    430 Rte 3<br />
                    Holderness, New Hampshire
                    <br />
                    <a href="https://www.google.com/maps/dir//430+US-3,+Holderness,+NH+03245">
                      Get directions
                    </a>
                  </p>
                  <p>
                    <a href="mailto:yankeetrailmotel@gmail.com">
                      yankeetrailmotel@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+16033754331">(603) 375-4331</a>
                  </p>
                  <ReservationButton />
                </div>
                <div className="column is-6">
                  <iframe
                    width="100%"
                    height="576"
                    src="https://maphub.net/embed/82456?directions=1"
                    frameborder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
