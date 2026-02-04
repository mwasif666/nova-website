"use client";

import ServiceHero from "@/components/reusablesComponents/ServiceHero/Hero";
import { useDialogStore } from "@/store/useDialogStore";

export default function HeroDefi() {
  const { open } = useDialogStore();

  return (
    <ServiceHero
      title="Decentalized Finance by Nova"
      image="/ProductsTab/service3.webp"
      features={[
        "Earn passive income through staking and liquidity pools",
        "Access decentralized lending and borrowing without intermediaries",
        
        "Non-custodial  you always control your assets and private keys",
      ]}
      buttonText="Explore DeFi Solutions"
      onClick={open}
    />
  );
}
