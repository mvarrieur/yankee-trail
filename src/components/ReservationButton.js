import React from "react";
import styles from "./ReservationButton.module.scss";

export default () => (
  <section className={styles.ButtonContainer}>
    <a
      className={styles.Button}
      href="https://via.eviivo.com/YankeeTrailMotel03245"
      target="_blank"
    >
      Make a Reservation
    </a>
  </section>
);
