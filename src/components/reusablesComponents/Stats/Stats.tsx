// Stats.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Stats.module.css";

export default function Stats() {
  const stats = [
    { number: "24/7", label: "Crypto-to-fiat conversion" },
    { number: "2 Cards", label: "Virtual + physical options" },
    { number: "3 Ways", label: "Online, in-store, and ATM access" },
    { number: "1 App", label: "Wallet, cards, and transactions" },
  ];

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
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Nova App</span>
          <h2 className={styles.title}>Crypto spending, simplified</h2>
          <p className={styles.subtitle}>
            Real-time conversion, card access, and app control in one platform.
          </p>
        </div>

        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.card}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardInner}>
                <h3 className={styles.number}>{stat.number}</h3>
                <p className={styles.label}>{stat.label}</p>
              </div>
              <span className={styles.cardGlow} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
