"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, BookOpen } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    id: 1,
    title: "Understanding Blockchain Basics",
    category: "Blockchain",
    image: "/academy/blog-1.webp",
    date: "Oct 10, 2025",
    author: "Nova Team",
    content: `
Blockchain is a distributed ledger technology that records transactions across many computers so that the record cannot be altered retroactively. 

### 🔗 Why Blockchain Matters
It provides a secure, transparent, and decentralized way of storing data and value. Unlike traditional databases, blockchain is not controlled by a single entity — meaning users have true ownership.

### ⚙️ Core Concepts
1. **Blocks:** Units that contain transaction data.
2. **Hashing:** Cryptographic method to secure data.
3. **Consensus:** Ensures all participants agree on a single version of truth.

In the Web3 world, blockchain acts as the backbone of digital trust, enabling decentralized finance, NFTs, and beyond.
`,
  },
  {
    id: 2,
    title: "How DeFi is Changing Finance",
    category: "DeFi",
    image: "/academy/blog-2.webp",
    date: "Oct 12, 2025",
    author: "Nova Finance Team",
    content: `
DeFi, or Decentralized Finance, replaces traditional financial intermediaries like banks with smart contracts on the blockchain.

### 💸 How It Works
DeFi platforms allow users to lend, borrow, and trade assets directly without third parties.

### ⚡ Key Benefits
- **Transparency:** Everything is on-chain.
- **Accessibility:** Anyone with internet can participate.
- **Yield Opportunities:** Earn interest through staking, farming, and liquidity pools.

DeFi is the future of open, global, programmable money.
`,
  },
  {
    id: 3,
    title: "NFTs and the Future of Digital Ownership",
    category: "NFTs",
    image: "/academy/blog-3.webp",
    date: "Oct 15, 2025",
    author: "Nova Creators",
    content: `
NFTs (Non-Fungible Tokens) are unique digital assets stored on the blockchain, proving ownership and authenticity.

### 🎨 What Makes NFTs Special
Each NFT carries unique metadata and cannot be replaced or divided.

### 🌐 Beyond Art
NFTs are evolving beyond art — they're being used for virtual real estate, in-game assets, identity, and ticketing.

In the Nova ecosystem, NFTs represent creativity, proof of ownership, and new digital economies.
`,
  },
  {
    id: 4,
    title: "Web3: The Decentralized Internet Revolution",
    category: "Web3",
    image: "/academy/blog-4.jpg",
    date: "Oct 17, 2025",
    author: "Nova Labs",
    content: `
Web3 is the next evolution of the internet — decentralized, user-owned, and powered by blockchain.

### 🌍 Why Web3 Matters
It allows users to control their identity, data, and digital assets.

### 🧩 Core Technologies
- **Smart Contracts**
- **Decentralized Storage**
- **Tokenized Economies**

Web3 shifts power from corporations to individuals — a true democratization of the digital world.
`,
  },
  {
    id: 5,
    title: "Trading Crypto Like a Pro",
    category: "Trading",
    image: "/academy/blog-5.webp",
    date: "Oct 18, 2025",
    author: "Nova Trading Desk",
    content: `
Crypto trading combines strategy, psychology, and timing. Understanding technical analysis, market trends, and blockchain fundamentals is key.

### 📈 Trading Strategies
- **Scalping**
- **Swing Trading**
- **Long-term Holding (HODL)**

Risk management, discipline, and continuous learning define a successful trader in this dynamic ecosystem.
`,
  },
  {
    id: 6,
    title: "Smart Contracts Explained",
    category: "Blockchain",
    image: "/academy/blog-6.webp",
    date: "Oct 19, 2025",
    author: "Nova Devs",
    content: `
Smart contracts are self-executing programs that run on the blockchain when certain conditions are met.

### ⚙️ How They Work
They eliminate intermediaries by automating transactions securely and transparently.

### 🔐 Use Cases
- Payments
- NFTs
- DeFi lending protocols

They form the backbone of most Web3 and DeFi applications.
`,
  },
];

export default function BlogReadMore({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const article = blogs.find((b) => b.id === Number(id));

  if (!article) return notFound();

  const related = blogs
    .filter((b) => b.category === article.category && b.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Link
          href="/nova-academy"
          className="text-[#1e597c] hover:text-[#b366ff] flex items-center gap-2 mb-6"
        >
          <Button variant="secondary">
            {" "}
            <ArrowLeft size={18} /> Back to Academy
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-md"
        >
          <Image
            src={article.image}
            alt={article.title}
            width={900}
            height={400}
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
              <CalendarDays size={16} />
              <span>{article.date}</span>
              <BookOpen size={16} />
              <span>{article.category}</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#1e597c] to-[#b366ff] bg-clip-text text-transparent mb-4">
              {article.title}
            </h1>
            <p className="text-gray-600 text-sm mb-6">By {article.author}</p>

            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              {article.content.split("\n").map((para, idx) => (
                <p key={idx} className="mb-4">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">
              Related {article.category} Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/nova-academy/${r.id}`}
                  className="block rounded-2xl border border-gray-200 hover:border-[#1e597c60] hover:shadow-md overflow-hidden transition-all"
                >
                  <Image
                    src={r.image}
                    alt={r.title}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-[#1e597c] font-semibold uppercase">
                      {r.category}
                    </p>
                    <h3 className="text-lg font-bold mt-2 text-gray-800 line-clamp-2">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
