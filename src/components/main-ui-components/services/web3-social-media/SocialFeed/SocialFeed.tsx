"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Coins } from "lucide-react";
import Image from "next/image";

export default function SocialFeedMock() {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6 },
    viewport: { once: true },
  });

  const posts = [
    {
      user: "artnova.lens",
      wallet: "0x12A...7B9",
      avatar: "/social-logo.png",
      text: "Just minted my latest NFT collection on Nova — instant royalties, zero gas worries ",
      likes: 358,
      comments: 62,
      rewards: "+42 NOVA",
    },
    {
      user: "pixelverse.eth",
      wallet: "0x93D...4E1",
      avatar: "/ai-logo.enc",
      text: "My followers now earn tokens for engaging with my art — this is real Web3 social ",
      likes: 501,
      comments: 120,
      rewards: "+89 NOVA",
    },
    {
      user: "metadream.farcaster",
      wallet: "0x44C...9A7",
      avatar: "/ai-logo-2.jpg",
      text: "Posted my AI-art drop on Nova Social — community ownership just got real ",
      likes: 280,
      comments: 47,
      rewards: "+33 NOVA",
    },
  ];

  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-white via-[#f1f6fb] to-[#e8f1f7] text-center overflow-hidden">
      {/* Subtle background lighting */}
      <div className="absolute -top-32 left-0 w-[36rem] h-[36rem] bg-gradient-to-br from-[#1e597c]/10 to-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[36rem] h-[36rem] bg-gradient-to-tr from-[#1e597c]/10 to-blue-500/10 blur-[120px]" />

      <motion.h2 {...fadeIn()} className="text-4xl font-semibold mb-6">
        Experience <span className="text-[#1e597c]">Web3 Social Media</span>
      </motion.h2>
      <motion.p
        {...fadeIn(0.2)}
        className="text-gray-600 mb-16 max-w-3xl mx-auto text-lg"
      >
        Discover how decentralized engagement feels, transparent, rewarding, and
        truly user-owned.
      </motion.p>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mx-auto max-w-6xl ">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            {...fadeIn(0.1 * i)}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            {/* Glow ring behind card */}
            <div
              className={`absolute -inset-[2px] bg-gradient-to-br ${post.avatar} opacity-50 blur-lg rounded-3xl group-hover:opacity-80 transition-all duration-500`}
            />
            {/* Card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${post.avatar} flex items-center justify-center text-white font-semibold`}
                >
                  <Image
                    src={post.avatar}
                    alt="icon"
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">{post.user}</h4>
                  <p className="text-xs text-gray-500">{post.wallet}</p>
                </div>
              </div>

              {/* Post text */}
              <p className="text-gray-700 mb-6 leading-relaxed">{post.text}</p>

              {/* Engagement icons */}
              <div className="flex justify-between text-gray-500 text-sm">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-[#1e597c]" /> {post.likes}
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#1e597c]" />{" "}
                  {post.comments}
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Coins className="w-4 h-4 text-[#1e597c]" /> {post.rewards}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
