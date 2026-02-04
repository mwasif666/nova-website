"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, ShieldCheck, Eye, Globe2 } from "lucide-react";

export default function WhyChooseNova() {
  return (
    <section className="py-28 px-6 text-center bg-gradient-to-b from-white to-[#f8f6ff] relative overflow-hidden">
      {/* Decorative glow circles */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-[#1e597c]/10 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#1e597c]/10 blur-3xl rounded-full -z-10" />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        Why Choose Nova DeFi?
      </motion.h2>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: (
              <DollarSign size={42} className="text-[#1e597c] mb-4 mx-auto" />
            ),
            title: "High Yields",
            desc: "Access top-tier liquidity pools and earn competitive APYs ",
          },
          {
            icon: (
              <ShieldCheck size={42} className="text-[#1e597c] mb-4 mx-auto" />
            ),
            title: "Secure Protocols",
            desc: "Our systems are non-custodial and fully audited, giving you total control.",
          },
          {
            icon: <Eye size={42} className="text-[#1e597c] mb-4 mx-auto" />,
            title: "Transparency",
            desc: "Every transaction is visible on-chain. What you see is what’s happening.",
          },
          {
            icon: <Globe2 size={42} className="text-[#1e597c] mb-4 mx-auto" />,
            title: "Global Access",
            desc: "Enjoy decentralized financial freedom  anytime, anywhere, without barriers.",
          },
        ].map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="relative bg-white rounded-3xl border border-gray-200  transition-all duration-500 group overflow-hidden">
              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r blur-md" />
              <CardContent className="relative p-8 z-10">
                <div>{benefit.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-[#1e597c]">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
