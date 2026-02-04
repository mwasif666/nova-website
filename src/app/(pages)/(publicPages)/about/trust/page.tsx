"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Lock, Layers, BarChart3, Coins, Users } from "lucide-react";

export default function TrustTransparencyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Background SVG pattern */}
      <svg
        className="absolute top-0 left-0 w-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="url(#grad)"
          fillOpacity="1"
          d="M0,192L80,208C160,224,320,256,480,266.7C640,277,800,267,960,250.7C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1e597c" />
            <stop offset="100%" stopColor="#00b4ff" />
          </linearGradient>
        </defs>
      </svg>
      {/* Hero Section */}
      <section className="text-center py-24 px-6 relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold primary-color"
        >
          Trust & Transparency
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Nova Crest Finance operates on the principles of transparency,
          security, and community trust — ensuring every transaction, pool, and
          contract is open for public validation.
        </p>
        <div className="absolute inset-0 bg-gradient-radial from-[#1e597c10] via-transparent to-transparent"></div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* On-chain Transparency */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <Eye className="text-[#1e597c]" size={38} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              On-Chain Transparency
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All core activities — including trading, liquidity movement, and
              NFT minting — are recorded on public blockchains. Anyone can
              verify the integrity of operations using on-chain explorers.
            </p>
          </motion.div>

          {/* Smart Contract Security */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <Lock className="text-[#1e597c]" size={38} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              Smart Contract Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every Nova smart contract undergoes independent security audits by
              leading blockchain firms. We publish our audit results and
              vulnerabilities openly to maintain accountability.
            </p>
          </motion.div>

          {/* Proof of Liquidity */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <Coins className="text-[#1e597c]" size={38} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              Proof of Liquidity
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our DeFi pools provide verifiable proof of reserves through
              blockchain data. Users can track real-time liquidity and token
              flow across trading pairs.
            </p>
          </motion.div>

          {/* Community Governance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <Users className="text-[#1e597c]" size={38} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              Community Governance
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nova Crest operates partially under DAO principles, allowing
              community-driven proposals and votes on key protocol upgrades,
              token listings, and ecosystem initiatives.
            </p>
          </motion.div>

          {/* Data & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <Layers className="text-[#1e597c]" size={38} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              Data Protection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We safeguard user data through decentralized identity protocols
              (DID) and zero-knowledge verification, ensuring privacy without
              compromising transparency or compliance.
            </p>
          </motion.div>

          {/* Public Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <BarChart3 className="text-[#1e597c]" size={38} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              Open Performance Metrics
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Real-time metrics such as trading volume, liquidity depth, and
              user participation rates are published publicly — allowing users
              to track Nova’s health transparently.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-20 text-sm text-gray-600">
          Built on transparency. Driven by trust.
          <br />© {new Date().getFullYear()} Nova Crest Finance — Empowering
          Decentralized Finance Globally.
        </div>
      </section>
    </div>
  );
}
