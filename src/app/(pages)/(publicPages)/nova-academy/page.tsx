"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, PlayCircle, BookOpen, Tag, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = ["All", "Blockchain", "DeFi", "NFTs", "Web3", "Trading"];
const ACCENT = "#133e5b";

const blogs = [
  {
    id: 1,
    title: "Understanding Blockchain Basics",
    category: "Blockchain",
    image: "/academy/blog-1.webp",
    excerpt:
      "Learn the principles behind blockchain technology and how it's reshaping industries globally.",
    date: "Oct 10, 2025",
  },
  {
    id: 2,
    title: "How DeFi is Changing Finance",
    category: "DeFi",
    image: "/academy/blog-2.webp",
    excerpt:
      "Dive into decentralized finance — understand yield farming, liquidity pools, and why DeFi matters.",
    date: "Oct 12, 2025",
  },
  {
    id: 3,
    title: "NFTs and the Future of Digital Ownership",
    category: "NFTs",
    image: "/academy/blog-3.webp",
    excerpt:
      "Discover how NFTs redefine creativity, digital ownership, and new asset classes.",
    date: "Oct 15, 2025",
  },
  {
    id: 4,
    title: "Web3: The Decentralized Internet Revolution",
    category: "Web3",
    image: "/academy/blog-4.jpg",
    excerpt:
      "Explore the core ideas behind Web3 — decentralization, identity, and user-owned ecosystems.",
    date: "Oct 17, 2025",
  },
  {
    id: 5,
    title: "Trading Crypto Like a Pro",
    category: "Trading",
    image: "/academy/blog-5.webp",
    excerpt:
      "Advanced trading strategies, market psychology, and risk management tips for serious traders.",
    date: "Oct 18, 2025",
  },
  {
    id: 6,
    title: "Smart Contracts Explained",
    category: "Blockchain",
    image: "/academy/blog-6.webp",
    excerpt:
      "Understand how smart contracts automate trustless transactions across Web3 applications.",
    date: "Oct 19, 2025",
  },
];

const videos = [
  {
    id: 1,
    title: "Introduction to Web3",
    category: "Blockchain Basics",
    thumbnail: "/academy/web3.webp",
    src: "/academy/web3.mp4",
  },
  {
    id: 2,
    title: "Understanding DeFi",
    category: "DeFi Education",
    thumbnail: "/academy/defi.webp",
    src: "/academy/defi.mp4",
  },
  {
    id: 3,
    title: "What is Blockchain",
    category: "Blockchain Basics",
    thumbnail: "/academy/blockchain.webp",
    src: "/academy/blockchain.mp4",
  },
];

export default function NovaAcademyPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredBlogs = useMemo(() => {
    const q = search.toLowerCase().trim();
    return blogs.filter(
      (b) =>
        (selectedCategory === "All" || b.category === selectedCategory) &&
        b.title.toLowerCase().includes(q),
    );
  }, [selectedCategory, search]);

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* soft theme glow on white */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(41,106,146,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute top-20 right-[-200px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(41,106,146,0.14),transparent_60%)]" />

      {/* Hero Section */}
      <section className="text-center py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="flex justify-center">
            <div
              className="inline-flex items-center gap-3 rounded-full border px-6 py-2"
              style={{ borderColor: `${ACCENT}55`, backgroundColor: `${ACCENT}18` }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <span
                className="text-[12px] font-semibold uppercase tracking-[0.28em]"
                style={{ color: ACCENT }}
              >
                Learn & Level Up
              </span>
            </div>
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-slate-950">
            Nova Academy
            <span style={{ color: ACCENT }}>.</span>
          </h1>

          <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto text-slate-700">
            Learn Blockchain, Web3, NFTs, and DeFi — all in one place. Knowledge
            powered by Nova.
          </p>
        </motion.div>
      </section>

      {/* Search + Filter */}
      <div className="max-w-6xl mx-auto px-4 mt-2 flex flex-col items-center justify-between gap-4 relative z-10">
        {/* Search */}
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search blogs or videos..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white
              border border-slate-300 text-slate-900 placeholder-slate-500
              focus:outline-none
              shadow-[0_10px_30px_rgba(17,24,39,0.06)]
              transition-all"
            style={{ outlineColor: ACCENT, caretColor: ACCENT }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <Button
                key={cat}
                variant="outline"
                className={`rounded-full px-5 py-2 transition-all duration-300 border
                  ${
                    active
                      ? "text-white hover:opacity-95"
                      : "bg-white border-slate-300 text-slate-800"
                  }`}
                style={
                  active
                    ? {
                        backgroundColor: ACCENT,
                        borderColor: ACCENT,
                      }
                    : {
                        borderColor: `${ACCENT}55`,
                        color: ACCENT,
                      }
                }
                onClick={() => setSelectedCategory(cat)}
              >
                <Tag size={14} className="mr-1" /> {cat}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Blogs Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-[#296a92]" size={28} />
          <h2 className="text-3xl font-semibold text-gray-900">Latest Blogs</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -2 }}
              className="rounded-2xl overflow-hidden bg-white
                border border-gray-200
                shadow-[0_16px_40px_rgba(17,24,39,0.08)]
                hover:shadow-[0_22px_60px_rgba(41,106,146,0.16)]
                hover:border-[#296a92]/35
                transition-all duration-300"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <p className="text-sm text-[#296a92] font-semibold uppercase tracking-wide">
                  {blog.category}
                </p>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span>{blog.date}</span>
                  <Link
                    href={`/nova-academy/${blog.id}`}
                    className="text-[#296a92] hover:text-[#1e597c] font-semibold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="max-w-6xl mx-auto px-4 pb-24 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <PlayCircle className="text-[#296a92]" size={28} />
          <h2 className="text-3xl font-semibold text-gray-900">
            Educational Videos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -2 }}
              className="rounded-2xl overflow-hidden bg-white cursor-pointer
                border border-gray-200
                shadow-[0_16px_40px_rgba(17,24,39,0.08)]
                hover:shadow-[0_22px_60px_rgba(41,106,146,0.16)]
                hover:border-[#296a92]/35
                transition-all"
              onClick={() => setSelectedVideo(video.src)}
            >
              <div className="relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle size={52} className="text-white" />
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm text-[#296a92] font-semibold uppercase tracking-wide">
                  {video.category}
                </p>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-white">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto bg-black"
              />
              <Button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 bg-white/95 hover:bg-white text-gray-800 rounded-full p-2 transition shadow"
              >
                <X size={22} />
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
