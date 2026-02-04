"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import styles from "./ProductTab.module.css";

export default function ProductTab() {
  const [currentTab, setCurrentTab] = useState<string>("Crypto Trading");

  const sectionKicker = "POWERING THE FUTURE OF";
  const sectionTitle = "Industries we serve";

  const tabsName = useMemo(
    () => [
      "Crypto Trading",
      "Coin Transactions",
      "Decentralized Finance",
      "Nfts",
      "Web3 Social Media",
      "Web3 Consultancy",
    ],
    [],
  );

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const didMount = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setCurrentTab(tabsName[index]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabsName]);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    const activeIndex = tabsName.indexOf(currentTab);
    if (activeIndex !== -1 && tabRefs.current[activeIndex]) {
      tabRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [currentTab, tabsName]);

  const content: Record<
    string,
    {
      sub: string;
      href: string;
      heading: string;
      paragraph: string;
      imageSrc: string;
    }
  > = {
    "Crypto Trading": {
      sub: "Crypto Trading",
      href: "/services/crypto-trading",
      heading: "Digital Asset Trading",
      paragraph:
        "Seamless crypto buying, selling, and storage through secure global exchanges.",
      imageSrc: "/ProductsTab/service1.webp",
    },
    "Coin Transactions": {
      sub: "Coin Transactions",
      href: "/services/coin-transactions",
      heading: "Digital Coin Transfers",
      paragraph:
        "Fast, verified, and secure crypto transactions with full tracking and wallet integration.",
      imageSrc: "/ProductsTab/service2.webp",
    },
    "Decentralized Finance": {
      sub: "Decentralized Finance (DeFi)",
      href: "/services/defi",
      heading: "Decentralized Finance",
      paragraph:
        "Access borderless lending, staking, and trading — powered by secure smart contracts.",
      imageSrc: "/ProductsTab/service3.webp",
    },
    Nfts: {
      sub: "NFTs",
      href: "/services/nfts",
      heading: "NFT Ecosystem",
      paragraph:
        "Build, mint, and grow your NFT brand with automated royalties and global exposure.",
      imageSrc: "/ProductsTab/service4.webp",
    },
    "Web3 Social Media": {
      sub: "Web3 Social Media",
      href: "/services/web3-social-media",
      heading: "Decentralized Social Platform",
      paragraph:
        "Empower users to earn, post, and connect through blockchain-based social engagement.",
      imageSrc: "/ProductsTab/service5.webp",
    },
    "Web3 Consultancy": {
      sub: "Web3 Consultancy",
      href: "/services/web3-consultancy",
      heading: "Web3 Development",
      paragraph:
        "Nova-Crest builds your Web3 journey with tailored blockchain solutions and end-to-end dApp support.",
      imageSrc: "/ProductsTab/service6.webp",
    },
  };

  return (
    <section className={styles.section} id="servicesTab">
      <div className={styles.inner}>
        {/* Top Heading Block */}
        <div className={styles.topHead}>
          <div className={styles.kickerWrap}>
            <span className={styles.kickerLine} />
            <span className={`${styles.kickerText} ${styles.kickerFont}`}>
              {sectionKicker}
            </span>
            <span className={styles.kickerLine} />
          </div>

          <h2 className={`${styles.sectionTitle} ${styles.headingFont}`}>
            {sectionTitle}
          </h2>
        </div>

        {/* Content Sections */}
        {tabsName.map((tab, index) => {
          const { sub, heading, paragraph, imageSrc, href } = content[tab];
          const isEven = index % 2 === 0;

          return (
            <div
              key={tab}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className={styles.row}
            >
              {/* Content Block */}
              <div
                className={`${styles.content} ${isEven ? styles.orderA : styles.orderB}`}
              >
                <div className={styles.subRow}>
                  <span className={styles.dotOuter}>
                    <span className={styles.dotInner} />
                  </span>

                  <h3 className={`${styles.subTitle} ${styles.subFont}`}>
                    {sub}
                  </h3>
                </div>

                <h1 className={`${styles.bigHeading} ${styles.headingFont}`}>
                  {heading}
                </h1>

                <p className={styles.paragraph}>{paragraph}</p>

                <Link href={href}>
                  <Button
                    showArrow
                    variant="secondary"
                    className={styles.btnFix}
                  >
                    Explore now
                  </Button>
                </Link>
              </div>

              {/* Image Block */}
              <div
                className={`${styles.imageCol} ${isEven ? styles.orderB : styles.orderA}`}
              >
                <div className={styles.imageCard}>
                  <Image
                    src={imageSrc}
                    alt={heading}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* Sticky Bottom Tab Bar */}
        <div className={styles.stickyBar}>
          <div className={styles.tabsScroller}>
            {tabsName.map((tab, index) => {
              const isActive = currentTab === tab;

              return (
                <button
                  key={tab}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  onClick={() => {
                    setCurrentTab(tab);
                    sectionRefs.current[index]?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className={`${styles.tabBtn} ${isActive ? styles.tabActive : styles.tabIdle}`}
                  type="button"
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
