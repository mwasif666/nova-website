// Stats.jsx
"use client";
import React from "react";
import styles from "./CtaBanner.module.css";
import CtaBannerUtil2 from "./CTABannerbutton";

export default function CtaBanner() {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `
          radial-gradient(1200px 700px at 22% 18%, rgba(41, 106, 146, 0.35), transparent 58%),
          radial-gradient(900px 520px at 78% 36%, rgba(41, 106, 146, 0.18), transparent 60%),
          radial-gradient(900px 700px at 50% 115%, rgba(0,0,0,0.55), transparent 60%),
          linear-gradient(135deg, #0a1630 0%, #08162b 45%, #07101f 100%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
      }}
    >
      {/* theme glows */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Nova Crest</span>
          <h2 className={styles.title}>
            Transforming Financial Systems Through Blockchain Innovation
          </h2>
        </div>

        <CtaBannerUtil2
          heading="Transforming Financial Systems Through Blockchain Innovation"
          button="Experience Nova Crest"
        />
      </div>
    </section>
  );
}
