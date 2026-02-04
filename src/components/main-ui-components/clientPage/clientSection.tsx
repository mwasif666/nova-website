"use client";

import React, { JSX, useEffect } from "react";
import GradientBackground from "@/components/reusablesComponents/GradientBackground/GradientBackground";
import {
  FaChartLine,
  FaServer,
  FaAtom,
  FaCode,
  FaRocket,
  FaExchangeAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { FaLandmark } from "react-icons/fa6";
import { Check } from "lucide-react";
import Image from "next/image";

type ClientCard = {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  icon: React.ReactNode;
};
const partners = [
  { logo: "/Partners/apple-pay.svg", name: "apple" },
  { logo: "/Partners/Kraken-logo.png", name: "kraken" },
  { logo: "/Partners/KUCOIN-logo.png", name: "Kucoin" },
  { logo: "/Partners/new-visa-logo.webp", name: "visa" },
  { logo: "/Partners/gpay.svg", name: "gpay" },
  { logo: "/Partners/new-Worldpay_logo.webp", name: "worldpay" },
  { logo: "/Partners/wire.svg", name: "wire" },
  { logo: "/Partners/new-mclogo.svg", name: "mclogo" },
  { logo: "/Partners/Trust-Wallet-Logo.png", name: "Trust" },
  { logo: "/Partners/sepa.svg", name: "sepa" },
];
const clients: ClientCard[] = [
  {
    id: "financial",
    title: "Financial Institutions",
    subtitle: "Compliance-first digital infrastructure",
    bullets: [
      "Enterprise-grade security & audit",
      "Custom KYC / AML pipelines",
      "Core banking connectors",
      "Reliable SLA-driven deployments",
    ],
    icon: <FaLandmark className="text-7xl md:text-8xl text-[#1e597c]" />,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platforms",
    subtitle: "Empowering digital payments and scalability",
    bullets: [
      "Seamless checkout and payment APIs",
      "Fraud detection and dispute management",
      "Multi-currency support and FX automation",
      "Scalable backend for seasonal traffic spikes",
    ],
    icon: <FaShoppingCart className="text-7xl md:text-8xl text-[#1e597c]" />,
  },
  {
    id: "trading",
    title: "Trading Firms",
    subtitle: "Low-latency execution & risk tools",
    bullets: [
      "Ultra-low latency order routing",
      "Algo/backtesting infrastructure",
      "Real-time P&L and risk dashboards",
      "Custom FIX & market adapters",
    ],
    icon: <FaChartLine className="text-7xl md:text-8xl text-[#1e597c]" />,
  },
  {
    id: "fintech",
    title: "Fintechs & Exchanges",
    subtitle: "Scalable payments & settlement",
    bullets: [
      "PCI & regulatory-ready integrations",
      "Scalable microservices architecture",
      "Real-time reconciliation and reporting",
      "White-label embeddable SDKs",
    ],
    icon: <FaServer className="text-7xl md:text-8xl text-[#1e597c]" />,
  },
  {
    id: "web3",
    title: "Web3 Companies",
    subtitle: "Blockchain-ready tooling & UX",
    bullets: [
      "Smart contract integration & audits",
      "Wallet management & custody UX",
      "On-chain telemetry & analytics",
      "Bridges, relayers and indexers",
    ],
    icon: <FaAtom className="text-7xl md:text-8xl text-[#1e597c]" />,
  },
  {
    id: "developers",
    title: "Developers",
    subtitle: "Build faster with robust APIs and SDKs",
    bullets: [
      "Comprehensive REST & WebSocket APIs",
      "Developer-friendly sandbox environments",
      "TypeScript and Python SDKs",
      "Extensive documentation and guides",
    ],
    icon: <FaCode className="text-7xl md:text-8xl text-[#1e597c]" />,
  },
  {
    id: "startups",
    title: "Startups",
    subtitle: "Launch and scale financial products quickly",
    bullets: [
      "Ready-to-deploy financial modules",
      "Flexible API-first architecture",
      "Affordable, usage-based pricing",
      "Support from fintech mentors and experts",
    ],
    icon: <FaRocket className="text-7xl md:text-8xl text-[#1e597c]" />,
  },
  {
    id: "currency",
    title: "Currency Exchange Houses",
    subtitle: "Secure and efficient FX infrastructure",
    bullets: [
      "Multi-currency wallet and ledger systems",
      "Real-time exchange rate integrations",
      "AML / KYC compliance tools",
      "Cross-border transaction monitoring",
    ],
    icon: <FaExchangeAlt className="text-7xl md:text-8xl text-[#1e597c]" />,
  },
];

export default function ClientsSection(): JSX.Element {
  // ✅ Scroll to section if URL has a hash (like #developers)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300); // slight delay for rendering
        }
      }
    }
  }, []);

  return (
    <section className="bg-white py-20">
      {/* Background SVG pattern */}
      <svg
        className="absolute top-0 left-0 w-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="url(#grad)"
          fillOpacity="1"
          d="M0,192L80,208C160,224,320,256,480,266.7C640,277,800,267,960,250.7C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1e597c" />
            <stop offset="100%" stopColor="#00b4ff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section  Heading*/}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:py-5 primary-color md:text-5xl font-extrabold  leading-relaxed">
            Empowering a Diverse Network of{" "}
            <span className="primary-color">Web3</span> and{" "}
            <span className="primary-color">Blockchain</span> Innovators
          </h2>
          <p className="mt-4 md:mt-6 lg:mt-8 text-lg text-color max-w-2xl mx-auto">
            We empower a diverse network of innovators from fintechs and trading
            firms to Web3 startups and global financial institutions delivering
            reliable infrastructure tailored to their unique needs.
          </p>
        </div>
        {/* Nova Crest network section */}
        <div className="grid gap-8 md:pt-10 pb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            The Nova Crest Network
          </h1>
          <div className="flex flex-wrap justify-center lg:py-10 items-center gap-8 lg:mx-20">
            {partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                width={110}
                height={120}
              />
            ))}
          </div>
        </div>
        {/* Alternating Rows */}
        {/* <h1 className="text-center py- main-heading">Our Clients</h1> */}
        <div className="space-y-20 lg:mx-20">
          {clients.map((c, index) => {
            const reverse = index % 2 !== 0;
            return (
              <div
                id={c.id} // ✅ anchor target for navigation
                key={c.id}
                className={`flex flex-col md:flex-row items-center gap-12 scroll-mt-28 ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-4xl font-bold  mb-3">{c.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{c.subtitle}</p>

                  <ul className="space-y-3 text-color">
                    {c.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-base hover:text-[#1e597c] transition-colors"
                      >
                        <span className="text-[#1e597c] mt-1">
                          <Check />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Icon / Image */}
                <GradientBackground className="flex-1 h-[300px]">
                  {c.icon}
                </GradientBackground>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
