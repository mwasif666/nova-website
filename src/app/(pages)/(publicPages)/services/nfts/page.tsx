"use client";

import { motion } from "framer-motion";
import { Palette, Users, Coins, Sparkles, Rocket, Layers } from "lucide-react";

import NFTGallery from "@/components/main-ui-components/services/nfts/Gallery/Gallery";
import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
import RevenueSection from "@/components/main-ui-components/services/nfts/RevenueSection/Revenue";

export default function NFTServicePage() {
  return (
    <div className=" text-gray-900 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-24 text-center px-6 max-w-6xl mx-auto">
        {/* Background Glow */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[600px] h-[600px] bg-[#1e597c]/20 blur-[120px] rounded-full" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl md:text-6xl font-bold mb-6 z-10"
        >
          Unleash Creativity with{" "}
          <span className="text-[#1e597c]">Nova NFTs</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed z-10"
        >
          We merge art, technology, and community to create next-generation NFT
          collections turning your digital ideas into collectible masterpieces.
        </motion.p>

        {/* Floating NFT Preview Images */}
        <div className="relative flex justify-center mt-16 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl shadow-lg overflow-hidden w-44 md:w-56 rotate-[-5deg]"
          >
            <video
              src="/videos/nft-1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl shadow-lg overflow-hidden w-44 md:w-56 rotate-[5deg]"
          >
            <video
              src="/videos/nft-2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-28 px-6 relative overflow-hidden">
        {/* Soft light glows for futuristic atmosphere */}
        <div className="absolute top-0 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-[#1e597c]/30 via-[#1e597c]/12 to-blue-400/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-40 w-[450px] h-[450px] bg-gradient-to-bl from-blue-400/20 via-[#1e597c]/20 to-[#1e597c]/12 blur-[120px] rounded-full" />

        <div className="text-center mb-20 relative z-10">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            NFT Innovation at <span className="text-[#1e597c]">Every Step</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From concept to launch, Nova crafts immersive NFT experiences
            merging art, technology, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
          {[
            {
              icon: (
                <div className="p-3 rounded-xl bg-gradient-to-tr from-[#1e597c] via-[#2d7fa5] to-blue-400 shadow-lg shadow-[#1e597c]/30">
                  <Palette className="w-7 h-7 text-white" />
                </div>
              ),
              title: "Art Direction & Storytelling",
              desc: "We craft NFT worlds  rich with lore, style, and identity. From 2D art to cinematic universes.",
            },
            {
              icon: (
                <div className="p-3 rounded-xl bg-gradient-to-tr from-[#1e597c] via-[#2d7fa5] to-cyan-400 shadow-lg shadow-[#1e597c]/30">
                  <Layers className="w-7 h-7 text-white" />
                </div>
              ),
              title: "Generative Design Tools",
              desc: "Use AI and 3D creation tools like Blender, Midjourney, and Daz3D to generate entire collections.",
            },
            {
              icon: (
                <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-400 via-[#1e597c] to-[#2d7fa5] shadow-lg shadow-cyan-400/30">
                  <Rocket className="w-7 h-7 text-white" />
                </div>
              ),
              title: "Smart Launch Strategy",
              desc: "Strategic planning  whitelist drops, partnerships, influencer campaigns, and NFT marketplaces.",
            },
            {
              icon: (
                <div className="p-3 rounded-xl bg-gradient-to-tr from-[#1e597c] via-blue-400 to-[#2d7fa5] shadow-lg shadow-blue-400/30">
                  <Users className="w-7 h-7 text-white" />
                </div>
              ),
              title: "Community Building",
              desc: "Gamified engagement on Discord, X, and Telegram  loyalty programs, drops, and fan-driven rewards.",
            },
            {
              icon: (
                <div className="p-3 rounded-xl bg-gradient-to-tr from-amber-400 via-[#2d7fa5] to-[#1e597c] shadow-lg shadow-amber-400/30">
                  <Coins className="w-7 h-7 text-white" />
                </div>
              ),
              title: "Revenue Automation",
              desc: "Monetize through minting, royalties, and staking  fully automated with smart contracts.",
            },
            {
              icon: (
                <div className="p-3 rounded-xl bg-gradient-to-tr from-[#1e597c] via-[#2d7fa5] to-cyan-400 shadow-lg shadow-[#1e597c]/30">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
              ),
              title: "Smart Contract Security",
              desc: "Audited ERC-721 & ERC-1155 contracts with integrations for OpenSea, Blur, and Magic Eden.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateX: 5 }}
              className="rounded-3xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg hover:shadow-[#1e597c]/30 transition-all duration-300 p-8"
            >
              <div className="mb-5 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Gallery */}
      <NFTGallery />
      {/* REVENUE SECTION */}
      <RevenueSection />

      {/* CTA SECTION */}
      <CtaBannerUtil
        heading=" Ready to Launch Your NFT Collection?"
        button="Launch With Nova"
      />
    </div>
  );
}
