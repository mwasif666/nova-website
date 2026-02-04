"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useDialogStore } from "@/store/useDialogStore";

type CtaBannerProps = {
  heading: string;
  button: string;
};

const CtaBannerUtil: React.FC<CtaBannerProps> = ({ heading, button }) => {
  const { open } = useDialogStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="CTA-services relative mt-4 md:mt-10 overflow-hidden rounded-2xl py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10"
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
        boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
        margin: "0px 80px",
      }}
    >
      {/* ✨ subtle glass highlight */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />

      {/* ✨ moving light streak (same as your old glow, but theme-friendly) */}
      <motion.div
        animate={{ x: ["-120%", "120%"], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-3xl"
      />

      {/* Content */}
      <div className="relative container mx-auto text-center grid gap-3 sm:gap-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-md mb-6 leading-snug sm:leading-tight md:leading-tight"
        >
          {heading}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button
            onClick={open}
            className="font-semibold bg-white text-black
              hover:bg-white/90
              shadow-lg hover:shadow-[0_0_25px_rgba(41,106,146,0.55)]
              transition-all duration-300"
          >
            {button}
          </Button>
        </motion.div>
      </div>

      {/* subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />
    </motion.div>
  );
};

export default CtaBannerUtil;
