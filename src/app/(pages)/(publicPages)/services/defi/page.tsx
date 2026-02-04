"use client";
import { motion } from "framer-motion";

import { Shield, Coins, Zap } from "lucide-react";
import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
import WhyChooseNova from "@/components/main-ui-components/services/defi/whychooseNova/WhyChooseNova";
import FaqPage from "@/components/main-ui-components/services/defi/faqs/Faqs";
import HeroDefi from "@/components/main-ui-components/services/defi/Hero/Hero";

export default function DeFiServicePage() {
  return (
    <div className=" text-gray-900 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <HeroDefi />

      {/* How It Works */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-semibold mb-12">How Nova’s DeFi Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Coins,
              title: "Connect Wallet",
              desc: "Link your wallet to Nova’s secure platform and access decentralized services instantly.",
            },
            {
              icon: Shield,
              title: "Smart Contracts",
              desc: "All processes are governed by transparent, audited smart contracts ensuring complete security.",
            },
            {
              icon: Zap,
              title: "Earn & Borrow",
              desc: "Supply liquidity, stake your assets, or take decentralized loans  all in one place.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <item.icon className="mx-auto mb-4 text-[#1e597c]" size={48} />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <WhyChooseNova />

      {/* FAQS  */}
      <FaqPage />
      {/* CTA */}
      <CtaBannerUtil
        heading="Ready to Step into the Future of Finance?"
        button="Get Started with Nova DeFi"
      />
    </div>
  );
}
