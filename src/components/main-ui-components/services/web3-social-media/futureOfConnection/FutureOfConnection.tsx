"use client";

import { motion } from "framer-motion";
import { Users, Coins, Share2, Sparkles } from "lucide-react";
import Image from "next/image";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export default function FutureOfConnection() {
  const items = [
    {
      icon: <Users className="w-7 h-7 text-white" />,
      text: "Community-Owned Ecosystems",
      img: "/images/social1.png",
      gradient: "from-[#1e597c] to-[#2d7fa5]",
    },
    {
      icon: <Coins className="w-7 h-7 text-white" />,
      text: "Tokenized Engagement",
      img: "/images/social2.png",
      gradient: "from-[#1e597c] to-blue-500",
    },
    {
      icon: <Share2 className="w-7 h-7 text-white" />,
      text: "On-Chain Expression",
      img: "/images/social3.png",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-white" />,
      text: "AI-Powered Social Graph",
      img: "/images/social4.png",
      gradient: "from-cyan-400 to-[#1e597c]",
    },
  ];

  return (
    <section className="relative py-28 px-6 text-center bg-white text-black overflow-hidden">
      <motion.div {...fadeIn()} className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          The <span className="text-[#1e597c]">Future</span> of Connection
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          Web3 social networks empower people through ownership, transparency,
          and collaboration. Nova transforms every like, share, and post into a
          digital asset that truly belongs to you.
        </p>

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn(0.1 * i)}
              className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 w-64 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.text}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-30`}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center p-6 space-y-3">
                <div
                  className={`p-3 rounded-full bg-gradient-to-br ${item.gradient} shadow-md`}
                >
                  {item.icon}
                </div>
                <p className="font-semibold text-gray-800">{item.text}</p>
              </div>

              {/* Accent Glow Border */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                style={{
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
