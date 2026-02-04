"use client";

import { motion } from "framer-motion";
import { FaWallet, FaChartLine, FaArrowTrendUp } from "react-icons/fa6";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          How <span className="text-[#1e597c]">Nova Trading</span> Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaWallet className="text-4xl text-[#1e597c]" />,
              title: "Connect Wallet",
              desc: "Securely link your Web3 wallet and get started instantly.",
            },
            {
              icon: <FaChartLine className="text-4xl text-[#1e597c]" />,
              title: "Execute Trades",
              desc: "Buy, sell, and manage digital assets with real-time analytics.",
            },
            {
              icon: <FaArrowTrendUp className="text-4xl text-[#1e597c]" />,
              title: "Earn & Grow",
              desc: "Monitor profits, optimize strategies, and grow your portfolio.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#256a8e12] mb-4">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm max-w-[250px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
