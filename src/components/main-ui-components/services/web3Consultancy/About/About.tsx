"use client";

import { motion } from "framer-motion";
import { Network, ShieldCheck, Cpu } from "lucide-react"; // futuristic icons
import Image from "next/image";
import React from "react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export default function AboutConsultancy() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-16 items-center relative">
      {/* LEFT SIDE – Key Consultancy Highlights */}
      <motion.div {...fadeIn(0.2)} className="z-10 space-y-8">
        <h2 className="text-4xl font-bold primary-color">
          About Our Consultancy
        </h2>

        <div className="space-y-6 mt-8">
          {[
            {
              icon: <Network className="w-6 h-6" />,
              title: "Blockchain Development",
              desc: "We architect and deploy scalable blockchain infrastructures to power modern digital ecosystems.",
            },
            {
              icon: <Cpu className="w-6 h-6" />,
              title: "Smart Contract Engineering",
              desc: "Audited, secure, and automated contract solutions that ensure transparency and reliability.",
            },
            // {
            //   icon: <BarChart3 className="w-6 h-6" />,
            //   title: "DeFi Strategy & Analytics",
            //   desc: "Data-driven market insights to help you maximize ROI and optimize decentralized finance operations.",
            // },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Compliance & Risk Management",
              desc: "Navigate complex regulations confidently with expert advisory and compliance frameworks.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn(0.2 * i)}
              className="flex items-start space-x-4"
            >
              <div className="p-3 rounded-xl bg-gradient-to-r from-[#1e597c] to-[#00b4ff] text-white shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="font-medium md:font-semibold text-md lg:text-lg  text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT SIDE – Futuristic Web3 SVG */}
      <motion.div
        {...fadeIn(0.4)}
        className="relative flex justify-center items-center "
      >
        <div>
          <Image
            className="rounded-lg "
            src={"/web3-consultancy.webp"}
            alt="web3 Consultancy"
            width={700}
            height={400}
          />
        </div>
      </motion.div>
    </section>
  );
}
