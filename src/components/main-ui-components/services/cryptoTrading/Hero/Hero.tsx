"use client";

import ServiceHero from "@/components/reusablesComponents/ServiceHero/Hero";
import { useDialogStore } from "@/store/useDialogStore";

export default function CryptoTradingPage() {
  const { open } = useDialogStore();

  return (
    <ServiceHero
      title="Your Gateway to Smarter Crypto Trades"
      image="/ProductsTab/service1.webp"
      features={[
        "Real-time analytics for every trade decision.",
        "Secure transactions with blockchain-grade encryption.",
        "Smart market insights powered by AI-driven trends.",
      ]}
      buttonText="Start Trading Now"
      onClick={open}
    />
  );
}
