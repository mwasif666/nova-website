// "use client";

// import React, { JSX } from "react";
// import { motion } from "framer-motion";
// import {
//   ChartBar,
//   Globe,
//   Heart,
//   MessageCircle,
//   Share2,
//   Users,
//   Wallet,
//   Camera,
//   Video,
//   Star,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useDialogStore } from "@/store/useDialogStore";
// import Image from "next/image";

// const fadeIn = (delay = 0) => ({
//   initial: { opacity: 0, y: 24 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { delay, duration: 0.6 },
//   viewport: { once: true },
// });

// export default function HeroSection(): JSX.Element {
//     const {open} = useDialogStore()
//   return (
//     <section
//       className="relative overflow-hidden py-16 px-6 md:px-6 flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-b from-white via-[#faf7ff] to-white"
//       aria-label="Hero - Nova Web3 Social"
//     >
//       {/* BACKGROUND EFFECTS */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-gradient-radial from-[#1e597c]/18 via-transparent to-transparent blur-[100px]" />
//         <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-gradient-radial from-[#1e597c]/10 via-indigo-200/6 to-transparent blur-[120px]" />
//       </div>

//       {/* LEFT CONTENT */}
//       <motion.div
//         {...fadeIn()}
//         className="relative z-10 max-w-xl text-center lg:text-left space-y-6"
//       >
//         <h1 className="main-heading">
//           Decentralized{" "}
//           <span className="bg-clip-text text-transparent primary-color">
//             Social Media
//           </span>{" "}
//           by Nova
//         </h1>

//         <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto md:mx-0">
//           Experience the next evolution of digital connection — where content,
//           identity, and rewards belong to you. Built on blockchain, powered by
//           community, and designed for the future.
//         </p>

//         <div className="flex justify-center lg:justify-start gap-4 pt-4">
//           <Button variant="secondary" onClick={open} className="px-6 py-3 text-base font-medium">
//             Join Nova
//           </Button>
//         </div>
//       </motion.div>

//                 {/* RIGHT IMAGE */}
//                     <motion.div
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.3, duration: 0.8 }}
//                       className="flex justify-center "
//                     >

//                       <Image
//                         src="/ProductsTab/service5.jpeg"
//                         alt="Nova Crypto Trading Dashboard"
//                         width={700}
//                         height={500}
//                         className=" drop-shadow-2xl rounded-2xl"
//                       />
//                     </motion.div>
//     </section>
//   );
// }
"use client";

import ServiceHero from "@/components/reusablesComponents/ServiceHero/Hero";
import { useDialogStore } from "@/store/useDialogStore";

export default function CryptoTradingPage() {
  const { open } = useDialogStore();

  return (
    <ServiceHero
      title="Decentralized Social Media By NOVA"
      image="/ProductsTab/service5.webp"
      features={[
        "Full control of your digital identity.",
        "Earn rewards for your engagement.",
        "Connect freely across decentralized networks.",
      ]}
      buttonText="Join Nova"
      onClick={open}
    />
  );
}
