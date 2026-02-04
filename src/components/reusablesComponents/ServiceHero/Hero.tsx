"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  features: string[];
  image: string;
  buttonText?: string;
  onClick?: () => void;
}

export default function ServiceHero({
  title,
  features,
  image,
  buttonText = "Learn More",
  onClick,
}: ServiceHeroProps) {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-16 grid lg:grid-cols-2 items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="text-left mt-8 md:-mt-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="main-heading bg-clip-text mb-6 text-[#1e597c]"
        >
          {title}
        </motion.h1>

        {/* 🔹 Key Highlights */}
        <ul className="space-y-3 my-8 text-gray-700 mb-10">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 leading-relaxed sm:items-center"
            >
              <span className="flex-shrink-0 pt-1 sm:pt-0">
                <CheckCircle2 className="text-[#1e597c] w-5 h-5 sm:w-5 sm:h-5" />
              </span>
              <span className="text-[15px] sm:text-[16px] font-medium">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        {buttonText && (
          <Button onClick={onClick} variant="secondary">
            {buttonText}
          </Button>
        )}
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className=""
        >
          <div className="h-[300px] sm:h-[400px] relative overflow-hidden rounded-2xl shadow-2xl bg-gray-50 dark:bg-gray-800">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover hover:brightness-110 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
