"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Scale,
  GlobeLock,
  AlertTriangle,
} from "lucide-react";

export default function LegalPage() {
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
          Legal Framework
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Protecting our users, ensuring compliance, and building trust in the
          decentralized era.
        </p>
        <div className="absolute inset-0 bg-gradient-radial from-[#1e597c10] via-transparent to-transparent"></div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2  gap-10">
          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <ShieldCheck className="text-[#1e597c]" size={40} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              Regulatory Compliance
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nova Crest Finance operates in alignment with international
              standards, including
              <strong> AML (Anti-Money Laundering)</strong> and{" "}
              <strong>KYC (Know Your Customer)</strong> protocols. Our systems
              integrate smart contract-based verification, ensuring users
              interact safely within decentralized ecosystems.
            </p>
          </motion.div>

          {/* Terms of Use */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <FileText className="text-[#1e597c]" size={40} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">Terms of Use</h2>
            <p className="text-gray-600 leading-relaxed">
              Users must engage in lawful trading and DeFi activity. Nova Crest
              Finance provides a decentralized gateway — not financial advice or
              custodial wallet services. Each user maintains{" "}
              <strong>100% control of their crypto assets</strong> via personal
              wallets.
            </p>
          </motion.div>

          {/* Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <GlobeLock className="text-[#1e597c]" size={40} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              Privacy & Data Protection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use end-to-end encryption for all sensitive data. Nova Crest
              Finance does not store private keys or seed phrases. User
              identities are pseudonymous by design, with minimal data
              collection strictly for compliance and platform integrity.
            </p>
          </motion.div>

          {/* Risk Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <Scale className="text-[#1e597c]" size={40} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              Risk Disclosure
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Digital assets and decentralized finance products carry inherent
              risk, including volatility and potential loss of funds. Nova Crest
              Finance does not guarantee investment outcomes. Users should
              exercise independent judgment and consult licensed advisors when
              necessary.
            </p>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
          >
            <AlertTriangle className="text-[#1e597c]" size={40} />
            <h2 className="text-2xl font-semibold mt-4 mb-2">
              Intellectual Property Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All Nova Crest Finance trademarks, logos, and proprietary smart
              contracts are protected under applicable IP laws. Unauthorized
              reproduction, redistribution, or modification of Nova technologies
              is strictly prohibited.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-20 text-sm text-gray-600">
          © {new Date().getFullYear()} Nova Crest Finance.
          <br />
          Registered in decentralized jurisdictions.
          <br />
          All rights reserved.
        </div>
      </section>
    </div>
  );
}
