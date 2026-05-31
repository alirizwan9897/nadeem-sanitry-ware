import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.aboutPage}>
      
      <div className={styles.aboutHero}>
        <div className="container text-center">

          <h1>NADEEM SANITARY WARE</h1>

          <p>
            Delivering quality sanitary solutions with trust and excellence.
          </p>

        </div>
      </div>

      <div className="container py-5">

        <div className="row align-items-center">

          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1584622781564-1d987ba8c9d2?q=80&w=1200&auto=format&fit=crop"
              alt="Sanitary Ware"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-6">
            <h2 className={styles.marginTop}>Who We Are</h2>
            <p className={styles.aboutText}>
              NADEEM SANITARY WARE provides premium sanitary products
              for homes and commercial projects.
            </p>

            <button className="btn btn-primary">
              Contact Us
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;