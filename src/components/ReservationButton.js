import React from "react";
import styles from "./ReservationButton.module.scss";

export default () => (
  <section className={styles.ButtonContainer}>
    <a className={styles.Button} href="#">
      {/* TODO: Update link to online booking site */}
      Make a Reservation
    </a>
  </section>
);
