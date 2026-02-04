import React from "react";
import TypewriterHeading from "./TypeWriterHeading";
import styles from "./Clients.module.css";
import {
  BadgeDollarSign,
  ChartCandlestick,
  ChartNoAxesCombined,
  Gamepad2,
  Landmark,
  MapPinHouse,
} from "lucide-react";

type ClientCard = {
  title: string;
  description: string;
  Icon: React.ElementType;
};

const CLIENT_CARDS: ClientCard[] = [
  {
    title: "Financial Enterprises",
    description:
      "Robust infrastructure for seamless banking and fintech services.",
    Icon: Landmark,
  },
  {
    title: "Trading Platforms",
    description: "Flexible financial services for CFD and brokerage providers.",
    Icon: ChartNoAxesCombined,
  },
  {
    title: "Commodity Exchange Firms",
    description: "Advanced solutions for seamless global commodity trading.",
    Icon: ChartCandlestick,
  },
  {
    title: "Digital Payment Firms",
    description: "Robust, secure technology for evolving payment ecosystems.",
    Icon: BadgeDollarSign,
  },
  {
    title: "Real Estate",
    description:
      "Next-gen infrastructure for cross-border real estate investments.",
    Icon: MapPinHouse,
  },
  {
    title: "Digital Gaming Enterprises",
    description:
      "Powering gaming platforms with seamless digital finance integration.",
    Icon: Gamepad2,
  },
];

export default function Clients() {
  return (
    <section
      className={styles.clientsSection}
      aria-labelledby="clients-heading"
    >
      <div className={styles.clientsContainer}>
        <header className={styles.clientsHeader}>
          <div className={styles.clientsKicker}>
            <span className={styles.clientsKickerLine} aria-hidden="true" />
            <p className={styles.clientsKickerText}>Powering the future of</p>
            <span
              className={`${styles.clientsKickerLine} ${styles.clientsKickerLineReverse}`}
              aria-hidden="true"
            />
          </div>

          <div className={styles.clientsTitleWrap}>
            <h2 id="clients-heading" className={styles.clientsTitle}>
              <span className={styles.clientsTitleStatic}>
                Industries we serve
              </span>
            </h2>

            <TypewriterHeading
              words={[
                "Digital Gaming Enterprises",
                "Real Estate",
                "Digital Payment Firms",
                "Commodity Exchange Firms",
                "Trading Platforms",
                "Financial Enterprises",
              ]}
              className={styles.clientsTypewriter}
            />
          </div>

          <p className={styles.clientsSubtitle}>
            Purpose-built platforms and infrastructure designed for security,
            scale, and modern user experiences.
          </p>
        </header>

        <div className={styles.clientsGrid}>
          {CLIENT_CARDS.map(({ title, description, Icon }) => (
            <article className={styles.clientsCard} key={title}>
              <div className={styles.clientsCardInner}>
                <div className={styles.clientsIconWrap} aria-hidden="true">
                  <Icon size={30} className={styles.clientsIcon} />
                </div>

                <div className={styles.clientsTextWrap}>
                  <h3 className={styles.clientsCardTitle}>{title}</h3>
                  <p className={styles.clientsCardText}>{description}</p>
                </div>

                <span className={styles.clientsCardGlow} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
