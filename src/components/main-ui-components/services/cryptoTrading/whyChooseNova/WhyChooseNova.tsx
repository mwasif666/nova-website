"use client";

import { motion } from "framer-motion";
import { FaBolt, FaHeadset } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

export default function WhyChooseNova() {
  return (
    <section
      className="py-20 text-white text-center relative overflow-hidden"
      style={{
        backgroundImage: `
      radial-gradient(1200px 700px at 22% 18%, rgba(41, 106, 146, 0.35), transparent 58%),
      radial-gradient(900px 520px at 78% 36%, rgba(41, 106, 146, 0.18), transparent 60%),
      radial-gradient(900px 700px at 50% 115%, rgba(0,0,0,0.55), transparent 60%),
      linear-gradient(135deg, #0a1630 0%, #08162b 45%, #07101f 100%)
    `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional subtle overlay (keep or remove) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent)]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Why Choose <span className="text-white">Nova?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/90 mb-12"
        >
          With Nova, you get cutting-edge technology, transparent transactions,
          and global reach empowering you to trade like a pro.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaShieldAlt className="text-5xl text-white" />,
              title: "Trusted by Thousands",
              desc: "Built with military-grade security and full transparency.",
            },
            {
              icon: <FaBolt className="text-5xl text-white" />,
              title: "Lightning-Fast Execution",
              desc: "Experience trades that execute in milliseconds with deep liquidity.",
            },
            {
              icon: <FaHeadset className="text-5xl text-white" />,
              title: "24/7 Global Support",
              desc: "Round-the-clock expert assistance from our global Nova team.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(39, 100, 138, 0.35)",
              }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg border border-white/20 flex flex-col items-center hover:bg-white/20 transition"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-white/80 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
