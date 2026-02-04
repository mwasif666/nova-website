"use client";

import StickyPhoneShowcase from "../gsap/gsap";
import GsapPhone from "../gsap/gsapPhone"
import CardCarousel from "../../../../../components/CardCarousel/cardCarousel"
import VideosSec from "../../../../../components/VideosSec/videosSec"
import PhoneData from "../../../../../components/PhoneData/phoneData"
import Banner from "../../../../../components/Banner/banner"
import React from "react";
import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  Rocket,
  ShieldCheck,
  Cpu,
  Coins,
  Target,
  HeartHandshake,
  LinkedinIcon,
} from "lucide-react";
import Image from "next/image";
import Stats from "@/components/reusablesComponents/Stats/Stats";

export default function OurCompanyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
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
      {/* Hero Section */}
      <section className="text-center py-24 px-6 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold primary-color"
        >
          About Nova Crest Finance
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Empowering the next generation of decentralized finance and blockchain
          innovation with transparency, trust, and technology.
        </p>
        <div className="absolute inset-0 bg-gradient-radial from-[#1e597c10] via-transparent to-transparent"></div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {[
          {
            icon: <Target size={36} className="text-[#1e597c]" />,
            title: "Our Mission",
            desc: "To simplify access to finance, digital assets, and blockchain applications by creating a transparent and secure ecosystem for everyone.",
          },
          {
            icon: <Rocket size={36} className="text-[#1e597c]" />,
            title: "Our Vision",
            desc: "To become a global leader in Web3 finance — bridging traditional and economies through innovation, education, and community trust.",
          },
          {
            icon: <HeartHandshake size={36} className="text-[#1e597c]" />,
            title: "Our Values",
            desc: "Integrity, innovation, and inclusion. We believe in open systems, user empowerment, and financial freedom through blockchain.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            {item.icon}
            <h2 className="text-2xl font-semibold mt-4 mb-2">{item.title}</h2>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>



{/* sticky section  */}


 {/* <StickyPhoneShowcase /> */}
 {/* <GsapPhone /> */}

{/* CardCarousel */}
{/* <CardCarousel /> */}


{/* VideosSec */}
{/* <VideosSec/> */}

{/* Phone Data */}
{/* <PhoneData/> */}

{/* Banner */}
{/* <Banner/> */}




      {/* What We Do */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center primary-color mb-10"
        >
          What We Do
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Coins size={36} className="text-[#1e597c]" />,
              title: "Crypto Trading",
              desc: "Offering secure, high-speed trading tools with advanced analytics to empower both beginners and professionals.",
            },
            {
              icon: <Cpu size={36} className="text-[#1e597c]" />,
              title: "Blockchain Development",
              desc: "Building and deploying decentralized applications, smart contracts, and Web3 integrations.",
            },
            {
              icon: <ShieldCheck size={36} className="text-[#1e597c]" />,
              title: "DeFi & NFTs",
              desc: "Creating decentralized financial solutions and NFT platforms that prioritize transparency and community ownership.",
            },
            {
              icon: <Globe2 size={36} className="text-[#1e597c]" />,
              title: "Web3 Social Media",
              desc: "Developing decentralized social ecosystems where users own their data, identity, and engagement.",
            },
            {
              icon: <Users size={36} className="text-[#1e597c]" />,
              title: "Community & Education",
              desc: "Empowering users through Nova Academy — a hub for blockchain learning, news, and global community events.",
            },
            {
              icon: <Rocket size={36} className="text-[#1e597c]" />,
              title: "FinTech Solutions",
              desc: "Innovating in digital payments, staking, and cross-border transactions with blockchain-backed security.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Leadership Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-clip-text text-transparent mb-16"
        >
          Leadership Team
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 justify-center">
          {[
            {
              name: "Muhammad Azeem Ur Rehman",
              role: "Director",
              image: "/ceo.webp",
              linkedin: "/#",
              quote:
                "Our vision is to make decentralized finance accessible, transparent, and truly global — redefining how people interact with digital assets.",
            },
            {
              name: "Ahmad Saeed Qadir",
              role: "Director (Operations)",
              image: "/manager.webp",
              linkedin: "/#",
              quote:
                "Nova Crest Finance is built on innovation, trust, and community. Together, we’re shaping the new financial era through blockchain.",
            },
          ].map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden max-w-md mx-auto"
            >
              {/* Image Section (background wrapper) */}
              <div className="relative w-full flex flex-col items-center py-10  group transition-all duration-500">
                {/* Circular Image (still centered) */}
                <div className="relative w-56 h-56 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-[#1e597c20] shadow-md group-hover:border-[#1e597c50] transition-all duration-500">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={240}
                    height={240}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
                </div>

                {/* LinkedIn icon placed relative to the background wrapper */}
                <div className="absolute bottom-4 right-4 group/icon">
                  <p
                    // href={""}

                    rel="noopener noreferrer"
                    className="relative flex justify-center items-center w-10 h-10 rounded-full bg-[#E8F3FF] shadow-md hover:shadow-lg transition-all  "
                    aria-label={`Connect with ${person.name} on LinkedIn`}
                  >
                    <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
                  </p>

                  {/* Tooltip */}
                  <span className="absolute bottom-12 right-0 bg-[#0A66C2] text-white text-xs font-medium py-1 px-2 rounded-md opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Connect on LinkedIn
                  </span>
                </div>
              </div>

              {/* Text Section */}
              <div className="p-8 text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-[#1e597c] font-medium text-sm uppercase tracking-wide mt-1">
                  {person.role}
                </p>
                <p className="text-gray-600 italic mt-4 leading-relaxed">
                  “{person.quote}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="text-center py-10 text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} Nova Crest Finance. All rights reserved.
      </div>
    </div>
  );
}
