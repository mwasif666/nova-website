import CtaBannerUtil from "@/components/reusablesComponents/ctaBanner/CtaBannerReusable";
import HowItWorks from "@/components/main-ui-components/services/cryptoTrading/howItWorks/page";
import WhyChooseNova from "@/components/main-ui-components/services/cryptoTrading/whyChooseNova/WhyChooseNova";
import FaqPage from "@/components/main-ui-components/services/cryptoTrading/Faqs/Faqs";

import ProductHero from "@/components/main-ui-components/services/cryptoTrading/Hero/Hero";

import { Metadata } from "next";
import Features from "@/components/main-ui-components/services/cryptoTrading/Features/Features";
import CryptoChartWrapper from "@/components/Wrapper/CryptoChartWrapper";


export const metadata:Metadata = {
  title: "Crypto Trading",
  description: "Trade with real-time charts and AI-powered analytics.",
};

export default function CryptoTrading() {
  return (
    <div className=" text-gray-900">
      {/* 🟣 HERO SECTION */}
      
      <ProductHero/>

      {/* 🧠 OVERVIEW SECTION */}
     <CryptoChartWrapper/>

      {/* ⚙️ HOW IT WORKS */}
    <HowItWorks/>
      

      {/* 🧩 FEATURES SECTION */}
     <Features/>

      {/* 🏆 WHY CHOOSE NOVA */}
      <WhyChooseNova/>

      {/* Faqs */}
      <FaqPage/>
      {/* 🚀 FINAL CTA */}
      <CtaBannerUtil heading="The Future of Crypto Trading" button="Begin Today"/>
     
    </div>
  );
}
