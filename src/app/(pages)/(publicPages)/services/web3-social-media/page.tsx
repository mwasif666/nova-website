"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Coins,
  Network,
  Share2,
  Rocket,
  Cpu,
  Infinity,
} from "lucide-react";
import { easeInOut } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
import SocialFeedMock from "@/components/main-ui-components/services/web3-social-media/SocialFeed/SocialFeed";
import FaqPage from "@/components/main-ui-components/services/web3-social-media/Faqs/Faqs";
import HeroSection from "@/components/main-ui-components/services/web3-social-media/HeroSection/Hero";

export default function Web3SocialPage() {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: easeInOut },
    viewport: { once: true },
  });

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-b from-white via-[#f1f6fb] to-[#e8f1f7] text-gray-900">
        {/* Background Glows */}
        <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-gradient-to-tr from-[#1e597c]/15 to-blue-400/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[36rem] h-[36rem] bg-gradient-to-bl from-[#1e597c]/10 to-[#1e597c]/15 blur-[140px]" />

        {/* HERO SECTION */}
        <HeroSection />

        {/* FUTURE OF CONNECTION */}
        {/* <FutureOfConnection/> */}
        {/* HOW IT WORKS */}
        <section className="py-28 px-6 text-center relative">
          <motion.h2 {...fadeIn()} className="text-4xl font-semibold mb-6">
            How It <span className="text-[#1e597c]">Works</span>
          </motion.h2>
          <motion.p
            {...fadeIn(0.2)}
            className="text-gray-600 max-w-3xl mx-auto mb-20"
          >
            Every interaction on Nova’s social protocol is powered by
            decentralized smart contracts — ensuring fairness, transparency, and
            ownership.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {[
              {
                icon: <Wallet className="w-8 h-8 text-white" />,
                title: "Connect Wallet",
                desc: "Users log in with wallets like MetaMask, maintaining privacy and on-chain identity.",
                gradient: "from-[#1e597c] to-[#2d7fa5]",
              },
              {
                icon: <Share2 className="w-8 h-8 text-white" />,
                title: "Post On-Chain",
                desc: "All content is securely stored via IPFS, owned by creators, not corporations.",
                gradient: "from-[#1e597c] to-blue-400",
              },
              {
                icon: <Coins className="w-8 h-8 text-white" />,
                title: "Earn Tokens",
                desc: "Posts, engagement, and shares automatically generate on-chain token rewards.",
                gradient: "from-blue-400 to-cyan-400",
              },
              {
                icon: <Rocket className="w-8 h-8 text-white" />,
                title: "DAO Governance",
                desc: "Communities evolve into DAOs, where users vote and shape the platform’s direction.",
                gradient: "from-cyan-400 to-[#1e597c]",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                {...fadeIn(0.1 * i)}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-30 blur-xl rounded-3xl`}
                />
                <Card className="relative bg-white/90 backdrop-blur-lg border border-gray-100 rounded-3xl hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div
                      className={`mb-5 p-4 rounded-xl bg-gradient-to-br ${step.gradient} shadow-md`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🌐 THE FUTURE LAYER (Enhanced Futuristic Section) */}
        {/* 🌐 FUTURE LAYER — Refined Nova Style */}
        <section className="relative py-28 px-6 text-center overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f1f6fb] to-gray-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#1e597c]/10 via-transparent to-transparent blur-[120px]" />

          <motion.div
            {...fadeIn()}
            className="max-w-5xl mx-auto relative z-10 text-gray-900"
          >
            {/* Heading */}
            <motion.h2
              {...fadeIn(0.2)}
              className="text-4xl font-bold mb-6 leading-snug"
            >
              The <span className="text-[#1e597c]">Future Layer</span> of
              Digital Identity
            </motion.h2>

            <motion.p
              {...fadeIn(0.3)}
              className="text-gray-600 max-w-3xl mx-auto mb-16"
            >
              Nova blends{" "}
              <span className="text-[#1e597c] font-medium">AI, Blockchain</span>
              , and{" "}
              <span className="text-gray-800 font-medium">
                human creativity
              </span>{" "}
              — creating an evolving, decentralized identity that adapts to your
              digital presence.
            </motion.p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Cpu className="w-7 h-7 text-white" />,
                  title: "AI-Personalized Feeds",
                  desc: "Smart curation aligns with your digital interests — powered by transparent on-chain intelligence.",
                gradient: "from-[#1e597c] to-[#2d7fa5]",
                },
                {
                  icon: <Network className="w-7 h-7 text-white" />,
                  title: "Unified Identity",
                  desc: "A single decentralized profile that connects you across platforms, apps, and ecosystems.",
                gradient: "from-[#1e597c] to-cyan-400",
                },
                {
                  icon: <Infinity className="w-7 h-7 text-white" />,
                  title: "Open Ecosystem",
                  desc: "Your digital footprint evolves endlessly — interoperable, secure, and future-ready.",
                  gradient: "from-blue-400 to-[#1e597c]",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeIn(0.15 * i)}
                  className="p-[1px] rounded-2xl bg-gradient-to-br from-[#1e597c]/20 via-transparent to-transparent hover:from-[#1e597c]/30 transition-all duration-500"
                >
                  <Card className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-500">
                    <CardContent className="p-10 flex flex-col items-center text-center">
                      <div
                        className={`mb-5 p-3 rounded-xl bg-gradient-to-br ${item.gradient}`}
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SOCIAL FEED MOCK */}
        <SocialFeedMock />
        {/* Faqs */}
      </div>
      <FaqPage />
      {/* CTA SECTION */}
      <CtaBannerUtil
        heading="Build The Next Social Revolution"
        button=" Start With Nova"
      />
    </>
  );
}
