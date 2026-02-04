"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  ShieldCheck,
  Users,
  ChartBar,
  ArrowRightCircle,
  Rocket,
  Workflow,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
import FaqPage from "@/components/main-ui-components/services/web3Consultancy/Faqs/Faqs";
import AboutConsultancy from "@/components/main-ui-components/services/web3Consultancy/About/About";
import { useDialogStore } from "@/store/useDialogStore";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export default function Web3ConsultancyPage() {
  const { open } = useDialogStore();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f1f6fb] to-white text-gray-900 overflow-hidden">
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

      {/* HERO SECTION */}
      <section className="relative text-center py-28 px-6 z-10">
        <motion.h1
          {...fadeIn(0.1)}
          className="text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent primary-color"
        >
          Web3 Consultancy
        </motion.h1>
        <motion.p
          {...fadeIn(0.3)}
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
        >
          Empowering businesses to enter the decentralized world with clarity,
          innovation, and confidence guided by Nova’s Web3 experts.
        </motion.p>
        <motion.div {...fadeIn(0.5)} className="mt-10">
          <Button variant="secondary" onClick={open}>
            Get Consultancy
          </Button>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}

      <AboutConsultancy />
      {/* EXPERTISE SECTION */}
      <section className="bg-[#f9f9fb] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 {...fadeIn(0.1)} className="main-heading mb-14">
            Core Expertise Areas
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Brain className="w-10 h-10" />,
                title: "Blockchain Strategy",
                desc: "We build clear, scalable blockchain roadmaps aligned with your vision.",
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "DApp & Protocol Design",
                desc: "From concept to deployment, we guide your decentralized product journey.",
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "Security & Audit Support",
                desc: "We ensure compliance, smart contract safety, and long-term sustainability.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn(0.2 * i)}
                className="bg-white rounded-3xl border border-gray-100 p-10 shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-[#1e597c] to-[#00b4ff] text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION - CONSULTANCY PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2 {...fadeIn(0.1)} className="main-heading mb-14">
          Our Web3 Consultancy Process
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              icon: <Workflow className="w-10 h-10" />,
              step: "01",
              title: "Discovery & Analysis",
              desc: "We analyze your business model, industry, and goals to find Web3 opportunities.",
            },
            {
              icon: <Brain className="w-10 h-10" />,
              step: "02",
              title: "Strategic Planning",
              desc: "We design a blockchain adoption roadmap including DAO, tokenomics, and ecosystem design.",
            },
            {
              icon: <Target className="w-10 h-10" />,
              step: "03",
              title: "Execution & Integration",
              desc: "Our experts guide your team through blockchain deployment, partnerships, and scaling.",
            },
            {
              icon: <Rocket className="w-10 h-10" />,
              step: "04",
              title: "Growth & Monitoring",
              desc: "We provide ongoing insights, audits, and market updates to ensure your project’s success.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn(0.2 * i)}
              className="bg-white rounded-3xl border border-[#1e597c]/10 p-8 shadow-lg hover:shadow-[#1e597c]/20 transition"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-[#1e597c] to-[#00b4ff] rounded-full text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#1e597c] mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE NOVA */}
      <section className="bg-[#f9f9fb] py-20 text-center">
        <motion.h2 {...fadeIn(0.1)} className="main-heading  mb-14">
          Why Choose Nova?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <Users />,
              title: "Global Web3 Experts",
              desc: "Our advisors have hands-on experience with blockchain ecosystems worldwide.",
            },
            {
              icon: <ChartBar />,
              title: "Result-Focused Consulting",
              desc: "We measure performance by outcomes growth, scalability, and trust.",
            },
            {
              icon: <ArrowRightCircle />,
              title: "Innovation Partnership",
              desc: "Nova becomes an extension of your team, driving long-term decentralized success.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn(0.2 * i)}
              className="bg-white rounded-3xl border border-gray-100 p-10 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-[#1e597c] to-[#00b4ff] rounded-full text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Faqs */}
      <FaqPage />

      {/* CTA */}
      <CtaBannerUtil
        heading="Start Your Web3 Journey with Nova "
        button="Book a Consultation"
      />
    </div>
  );
}
