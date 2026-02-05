// app/components/Header/Header.tsx  (or wherever you keep it)
"use client";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaLandmark,
  FaShoppingCart,
  FaChartLine,
  FaServer,
  FaAtom,
  FaCode,
  FaRocket,
  FaExchangeAlt,
  FaInfoCircle,
  FaShieldAlt,
  FaBalanceScale,
  FaWallet,
  FaLightbulb,
  FaShareAlt,
  FaImages,
} from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/store/useDialogStore";
import styles from "./Header.module.css";

type DropdownItem = {
  isCategory?: boolean;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  desc?: string;
};

type NavItem = {
  label: string;
  href?: string;
  dropdownColumns?: DropdownItem[][];
  dropdown?: DropdownItem[];
};

export default function Header() {
  const { open } = useDialogStore();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const dropdownItemRefs = useRef<Record<string, HTMLElement[]>>({});
  const closingDropdownRef = useRef<string | null>(null);

  const navItems: NavItem[] = useMemo(
    () => [
      {
        label: "Nova Services",
        dropdownColumns: [
          [
            { label: "Blockchain Finance", isCategory: true },
            {
              label: "Crypto Trading",
              href: "/services/crypto-trading",
              desc: "Smart and secure trading.",
              icon: <FaChartLine size={14} className={styles.iconAccent} />,
            },
            {
              label: "Coin Transactions",
              href: "/services/coin-transactions",
              desc: "Fast crypto-fiat transfers.",
              icon: (
                <FaArrowRightArrowLeft
                  size={14}
                  className={styles.iconAccent}
                />
              ),
            },
            {
              label: "Decentralized Finance (DeFi)",
              href: "/services/defi",
              desc: "Lending, staking, and yields.",
              icon: <FaWallet size={14} className={styles.iconAccent} />,
            },
          ],
          [
            { label: "Web3 Innovation", isCategory: true },
            {
              label: "NFTs (Non-Fungible Tokens)",
              href: "/services/nfts",
              desc: "Create and trade NFTs.",
              icon: <FaImages size={14} className={styles.iconAccent} />,
            },
            {
              label: "Web3 Social Media",
              href: "/services/web3-social-media",
              desc: "Earn and engage socially.",
              icon: <FaShareAlt size={14} className={styles.iconAccent} />,
            },
            {
              label: "Consultancy in Web3 DApps",
              href: "/services/web3-consultancy",
              desc: "Expert Web3 guidance.",
              icon: <FaLightbulb size={14} className={styles.iconAccent} />,
            },
          ],
           [
            { label: "Nova Wallet", isCategory: true },
            {
              label: "Nova App",
              href: "/services/nfts",
              desc: "Create and trade NFTs.",
              icon: <FaImages size={14} className={styles.iconAccent} />,
            },
            
          ],
        ],
      },
      {
        label: "Industries",
        href: "/industries",
        dropdownColumns: [
          [
            {
              label: "Financial Institutions",
              icon: <FaLandmark size={14} className={styles.iconAccent} />,
              href: "/industries#financial",
            },
            {
              label: "E-Commerce Platforms",
              icon: <FaShoppingCart size={14} className={styles.iconAccent} />,
              href: "/industries#ecommerce",
            },
            {
              label: "Trading Firms",
              icon: <FaChartLine size={14} className={styles.iconAccent} />,
              href: "/industries#trading",
            },
            {
              label: "Fintechs & Exchanges",
              icon: <FaServer size={14} className={styles.iconAccent} />,
              href: "/industries#fintech",
            },
          ],
          [
            {
              label: "Web3 Companies",
              icon: <FaAtom size={14} className={styles.iconAccent} />,
              href: "/industries#web3",
            },
            {
              label: "Developers",
              icon: <FaCode size={14} className={styles.iconAccent} />,
              href: "/industries#developers",
            },
            {
              label: "Startups",
              icon: <FaRocket size={14} className={styles.iconAccent} />,
              href: "/industries#startups",
            },
            {
              label: "Currency Exchange Houses",
              icon: <FaExchangeAlt size={14} className={styles.iconAccent} />,
              href: "/industries#currency",
            },
          ],
        ],
      },
      { label: "Nova Academy", href: "/nova-academy" },
      {
        label: "About Nova",
        dropdown: [
          {
            label: "Our Company",
            icon: <FaInfoCircle size={14} className={styles.iconAccent} />,
            href: "/about/company",
          },
          {
            label: "Trust & Transparency",
            icon: <FaShieldAlt size={14} className={styles.iconAccent} />,
            href: "/about/trust",
          },
          {
            label: "Legal Overview",
            icon: <FaBalanceScale size={14} className={styles.iconAccent} />,
            href: "/about/legal",
          },
        ],
      },
    ],
    [],
  );

  // ---- GSAP helpers (desktop dropdown) ----
  const animateDropdownIn = (label: string) => {
    const el = dropdownRefs.current[label];
    if (!el) return;

    const items = dropdownItemRefs.current[label] || [];
    gsap.killTweensOf([el, ...items]);

    gsap.set(el, { display: "block", pointerEvents: "auto" });
    gsap.fromTo(
      el,
      { opacity: 0, y: 10, scale: 0.98, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.22,
        ease: "power2.out",
      },
    );

    if (items.length) {
      gsap.fromTo(
        items,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.22,
          ease: "power2.out",
          stagger: 0.035,
          delay: 0.05,
        },
      );
    }
  };

  const animateDropdownOut = (label: string, onDone?: () => void) => {
    const el = dropdownRefs.current[label];
    if (!el) {
      onDone?.();
      return;
    }

    const items = dropdownItemRefs.current[label] || [];
    gsap.killTweensOf([el, ...items]);

    gsap.to(items, {
      opacity: 0,
      y: 6,
      duration: 0.14,
      ease: "power2.in",
      stagger: 0.02,
    });

    gsap.to(el, {
      opacity: 0,
      y: 8,
      scale: 0.985,
      filter: "blur(6px)",
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        gsap.set(el, { display: "none", pointerEvents: "none" });
        onDone?.();
      },
    });
  };

  const setDropdown = (label: string | null) => {
    if (label === openDropdown) return;

    // close current (with animation)
    if (openDropdown) {
      const closing = openDropdown;
      closingDropdownRef.current = closing;
      animateDropdownOut(closing, () => {
        if (closingDropdownRef.current === closing)
          closingDropdownRef.current = null;
      });
    }

    setOpenDropdown(label);

    // open next (next tick so refs exist)
    if (label) {
      requestAnimationFrame(() => animateDropdownIn(label));
    }
  };

  const closeMobile = () => {
    setMobileDropdown(null);
    setSidebarOpen(false);
  };

  const handleMobileCTA = () => {
    closeMobile();
    open();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Nova Home">
          <span className={styles.logoMobile}>
            <Image
              src="/Logo/logo-mobile.png"
              alt="Logo"
              width={100}
              height={50}
              priority
            />
          </span>
          <span className={styles.logoDesktop}>
            <Image
              src="/Logo/logo-main.png"
              alt="Logo"
              width={145}
              height={60}
              priority
            />
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.nav}>
          {navItems.map((item) => {
            const hasDropdown = !!(item.dropdown || item.dropdownColumns);
            const isOpen = openDropdown === item.label;
            if (hasDropdown) {
              dropdownItemRefs.current[item.label] = [];
            }

            return (
              <li
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => hasDropdown && setDropdown(item.label)}
                onMouseLeave={() => hasDropdown && setDropdown(null)}
              >
                {/* Simple links */}
                {item.href && !hasDropdown ? (
                  <Link className={styles.navLink} href={item.href}>
                    {item.label}
                  </Link>
                ) : item.label === "Industries" ? (
                  // Industries clickable + dropdown
                  <Link
                    className={styles.navLink}
                    href={item.href ?? "#"}
                    onClick={() => setDropdown(null)}
                  >
                    <span className={styles.navLabel}>{item.label}</span>
                    <span className={styles.chev} aria-hidden>
                      {isOpen ? (
                        <FaChevronUp size={12} />
                      ) : (
                        <FaChevronDown size={12} />
                      )}
                    </span>
                  </Link>
                ) : (
                  // Dropdown-only buttons
                  <button
                    type="button"
                    className={styles.navButton}
                    onClick={() =>
                      isOpen ? setDropdown(null) : setDropdown(item.label)
                    }
                  >
                    <span className={styles.navLabel}>{item.label}</span>
                    <span className={styles.chev} aria-hidden>
                      {isOpen ? (
                        <FaChevronUp size={12} />
                      ) : (
                        <FaChevronDown size={12} />
                      )}
                    </span>
                  </button>
                )}

                {/* Dropdown panel (always mounted for smooth out animation) */}
                {hasDropdown && (
                  <div
                    className={styles.dropdown}
                    ref={(node) => {
                      dropdownRefs.current[item.label] = node;
                    }}
                    style={{ display: "none", pointerEvents: "none" }}
                  >
                    <div className={styles.dropdownInner}>
                      {item.dropdownColumns ? (
                        <div
                          className={styles.dropdownGrid}
                          style={
                            {
                              ["--cols"]: item.dropdownColumns.length,
                            } as React.CSSProperties
                          }
                        >

                          {item.dropdownColumns.map((col, colIdx) => {
  const isNovaWalletCol =
    item.label === "Nova Services" &&
    col.some((x) => x.isCategory && x.label === "Nova Wallet");

  return (
    <ul key={colIdx} className={styles.dropdownCol}>
      {col.map((d, i) =>
        d.isCategory ? (
          <li key={`${colIdx}-${i}`} className={styles.category}>
            {d.label}
          </li>
        ) : (
          <li
            key={`${colIdx}-${i}`}
            ref={(node) => {
              if (!node) return;
              const arr = dropdownItemRefs.current[item.label] || [];
              arr.push(node);
              dropdownItemRefs.current[item.label] = arr;
            }}
          >
            <Link
              href={d.href ?? "#"}
              className={styles.dropdownLink}
              onClick={() => setDropdown(null)}
            >
              <span className={styles.iconBox}>{d.icon}</span>
              <span className={styles.linkText}>
                <span className={styles.linkTitle}>{d.label}</span>
                {d.desc ? <span className={styles.linkDesc}>{d.desc}</span> : null}
              </span>
            </Link>

            {/* ✅ Buttons: only under Nova App inside Nova Wallet column */}
            {isNovaWalletCol && d.label === "Nova App" && (
              <div className={styles.storeActions}>
                <a
                  className={`${styles.storeBtn} ${styles.storeBtnApple}`}
                  href="#download-ios"
                  aria-label="Download on the App Store"
                  onClick={() => setDropdown(null)}
                >
                  <span className={styles.storeIcon}>
                    <FaApple size={16} aria-hidden="true" />
                  </span>
                  <span className={styles.storeText}>
                    <span className={styles.storeLabel}>Download on the</span>
                    <span className={styles.storeName}>App Store</span>
                  </span>
                </a>

                <a
                  className={`${styles.storeBtn} ${styles.storeBtnGoogle}`}
                  href="#download-android"
                  aria-label="Get it on Google Play"
                  onClick={() => setDropdown(null)}
                >
                  <span className={styles.storeIcon}>
                    <FaGooglePlay size={16} aria-hidden="true" />
                  </span>
                  <span className={styles.storeText}>
                    <span className={styles.storeLabel}>Get it on</span>
                    <span className={styles.storeName}>Google Play</span>
                  </span>
                </a>
              </div>
            )}
          </li>
        )
      )}
    </ul>
  );
})}

                        </div>
                      ) : (
                        <ul className={styles.dropdownList}>
                          {(item.dropdown || []).map((d, idx) => (
                            <li
                              key={idx}
                              ref={(node) => {
                                if (!node) return;
                                const arr =
                                  dropdownItemRefs.current[item.label] || [];
                                arr.push(node);
                                dropdownItemRefs.current[item.label] = arr;
                              }}
                            >
                              <Link
                                href={d.href ?? "#"}
                                className={styles.dropdownLink}
                                onClick={() => setDropdown(null)}
                              >
                                <span className={styles.iconBox}>{d.icon}</span>
                                <span className={styles.linkText}>
                                  <span className={styles.linkTitle}>
                                    {d.label}
                                  </span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className={styles.cta}>
          <Button variant="secondary" onClick={open}>
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <Button
          size="icon"
          className={styles.mobileToggleBtn}
          type="button"
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <FaBars />
        </Button>
      </div>

      {/* Mobile overlay */}
      <div
        className={styles.mobileOverlay}
        onClick={closeMobile}
        data-open={sidebarOpen}
      />

      {/* Mobile sheet */}
      <div
        className={styles.mobileSheet}
        aria-hidden={!sidebarOpen}
        data-open={sidebarOpen}
      >
        <button
          className={styles.mobileClose}
          type="button"
          onClick={closeMobile}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <nav className={styles.mobileNav}>
          {navItems.map((item) => {
            const hasDropdown = !!(item.dropdown || item.dropdownColumns);

            return (
              <div key={item.label} className={styles.mobileSection}>
                {!hasDropdown && item.href ? (
                  <Link
                    className={styles.mobileLink}
                    href={item.href}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div
                      className={styles.mobileRow}
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label,
                        )
                      }
                    >
                      {item.label === "Industries" ? (
                        <Link
                          href={item.href ?? "#"}
                          className={styles.mobileTitleLink}
                          onClick={(e) => {
                            e.stopPropagation();
                            closeMobile();
                          }}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className={styles.mobileTitle}>{item.label}</span>
                      )}

                      <span className={styles.mobileChev} aria-hidden>
                        {mobileDropdown === item.label ? (
                          <FaChevronUp size={14} />
                        ) : (
                          <FaChevronDown size={14} />
                        )}
                      </span>
                    </div>

                    {mobileDropdown === item.label && (
                      <div className={styles.mobileDropdown}>
                        {item.dropdownColumns
                          ? item.dropdownColumns.flat().map((d, idx) =>
                              d.isCategory ? (
                                <div
                                  key={idx}
                                  className={styles.mobileCategory}
                                >
                                  {d.label}
                                </div>
                              ) : (
                                <Link
                                  key={idx}
                                  href={d.href ?? "#"}
                                  className={styles.mobileDropLink}
                                  onClick={closeMobile}
                                >
                                  <span className={styles.mobileIcon}>
                                    {d.icon}
                                  </span>
                                  <span className={styles.mobileDropText}>
                                    <span className={styles.mobileDropTitle}>
                                      {d.label}
                                    </span>
                                    {d.desc ? (
                                      <span className={styles.mobileDropDesc}>
                                        {d.desc}
                                      </span>
                                    ) : null}
                                  </span>
                                </Link>
                              ),
                            )
                          : (item.dropdown || []).map((d, idx) => (
                              <Link
                                key={idx}
                                href={d.href ?? "#"}
                                className={styles.mobileDropLink}
                                onClick={closeMobile}
                              >
                                <span className={styles.mobileIcon}>
                                  {d.icon}
                                </span>
                                <span className={styles.mobileDropText}>
                                  <span className={styles.mobileDropTitle}>
                                    {d.label}
                                  </span>
                                </span>
                              </Link>
                            ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}

          <div className={styles.mobileCtaWrap}>
            <Button
              className={styles.mobileCta}
              variant="secondary"
              onClick={handleMobileCTA}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
