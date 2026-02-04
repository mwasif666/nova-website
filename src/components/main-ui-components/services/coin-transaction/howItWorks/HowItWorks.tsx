"use client";
import { motion } from "framer-motion";
import {
  Wallet,
  Send,
  CheckCircle2,
  Shield,
  BarChart3,
  Clock,
} from "lucide-react";

export default function HowNovaTransactionsWork() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* 🟣 Section Heading */}
      <h2 className="text-4xl main-heading font-bold text-center mb-12  bg-clip-text ">
        How Nova<span className="primary-color"> Coin Transactions </span>Work
      </h2>

      {/* ⚙️ Step-by-Step Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Wallet className="w-10 h-10 text-[#1e597c]" />,
            title: "1. Connect Your Wallet",
            desc: "Start by connecting your Web3 wallet such as MetaMask, Trust Wallet, or Nova Wallet. Your assets stay fully decentralized and under your control.",
          },
          {
            icon: <BarChart3 className="w-10 h-10 text-[#1e597c]" />,
            title: "2. Choose Coin & Network",
            desc: "Select the coin and blockchain network you want to transact on. Nova automatically optimizes routes for the best speed and lowest network fees.",
          },
          {
            icon: <Send className="w-10 h-10 text-[#1e597c]" />,
            title: "3. Enter Amount & Receiver",
            desc: "Input the recipient’s wallet address and the amount to send. Nova validates all inputs to prevent failed or incorrect transfers.",
          },
          {
            icon: <Shield className="w-10 h-10 text-[#1e597c]" />,
            title: "4. Verify Transaction Security",
            desc: "Before sending, Nova’s smart security layer double-checks wallet permissions and network status to ensure a safe transfer.",
          },
          {
            icon: <Clock className="w-10 h-10 text-[#1e597c]" />,
            title: "5. Send & Track in Real-Time",
            desc: "Confirm the transaction, and watch live blockchain updates as it gets verified within seconds through Nova’s real-time tracking dashboard.",
          },
          {
            icon: <CheckCircle2 className="w-10 h-10 text-[#1e597c]" />,
            title: "6. Transaction Complete",
            desc: "Once verified on-chain, both sender and receiver receive instant confirmation  fast, transparent, and permanently recorded on blockchain.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-gray-200  hover:shadow-lg transition-all shadow-sm text-left"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
