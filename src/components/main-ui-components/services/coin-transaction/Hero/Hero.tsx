"use client";

import ServiceHero from "@/components/reusablesComponents/ServiceHero/Hero";
import { useDialogStore } from "@/store/useDialogStore";

export default function HeroCoinTransactions() {
  const { open } = useDialogStore();

  return (
    <ServiceHero
      title="  The Future of Coin Transactions"
      image="/ProductsTab/service2.webp"
      features={[
        "Instant transfers across wallets and exchanges.",
        "No hidden fees or intermediaries.",
        "Real-time blockchain tracking and confirmation.",
      ]}
      buttonText="Start Transactions "
      onClick={open}
    />
  );
}
