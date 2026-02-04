"use client";

import { motion } from "framer-motion";
import { Coins, Rocket, Repeat, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function RevenueSection() {
  const steps = [
    {
      icon: <Rocket className="w-7 h-7 text-white" />,
      title: "Mint & Launch",
      desc: "Your NFT collection goes live with optimized smart contracts and a global reach from day one.",
      gradient: "from-[#1e597c] to-[#2d7fa5]",
    },
    {
      icon: <Coins className="w-7 h-7 text-white" />,
      title: "Primary Sales",
      desc: "Earn instantly through secure minting and automated crypto payment systems handled by Nova.",
      gradient: "from-[#1e597c] to-blue-500",
    },
    {
      icon: <Repeat className="w-7 h-7 text-white" />,
      title: "Royalty Automation",
      desc: "Get paid automatically whenever your NFTs are resold  with full transparency and control.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Crown className="w-7 h-7 text-white" />,
      title: "Evolving Value",
      desc: "Enable dynamic NFTs and community-driven perks that grow engagement and long-term value.",
      gradient: "from-cyan-400 to-[#1e597c]",
    },
  ];

  return (
    <section className="py-28 px-6 relative overflow-hidden bg-gradient-to-b from-white via-[#f1f6fb] to-white">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1e597c]/5 via-transparent to-blue-400/5 blur-[80px]" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e597c] to-blue-600"
        >
          <span className="main-heading primary-color">
            Create / Launch / Earn
          </span>
        </motion.h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-20 text-lg leading-relaxed">
          With Nova, your creativity becomes a self-sustaining digital economy
          empowering artists to build, grow, and profit through blockchain
          innovation.
        </p>

        {/* Process Flow Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Subtle background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-40 blur-md rounded-3xl`}
              ></div>

              <Card className="relative  rounded-3xl transition-all duration-500">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div
                    className={`mb-5 p-4 rounded-xl bg-gradient-to-br ${step.gradient} shadow-md`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Minimal Flow Connectors */}
        <div className="hidden lg:flex justify-between mt-16">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="w-20 h-[2px]  to-transparent rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
