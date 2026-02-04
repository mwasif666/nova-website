"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useDialogStore } from "@/store/useDialogStore";

type CtaBannerProps = {
  heading: string;
  button: string;
};

const CtaBannerUtil2: React.FC<CtaBannerProps> = ({ button }) => {
  const { open } = useDialogStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ✨ Subtle Animated Glow Layer */}
      <motion.div
        animate={{
          x: ["-100%", "100%"],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-3xl"
      />

      {/* Content */}
      <div className="relative container mx-auto text-center grid gap-3 sm:gap-6 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Button
            onClick={open}
            className="font-semibold bg-white text-black  
            hover:bg-gradient-to-r   
            shadow-lg  transition-all duration-300"
          >
            {button}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CtaBannerUtil2;
