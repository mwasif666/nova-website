"use client";
import EpayHeroSection from "@/components/FutureBanner/FutureBanner";
import Clients from "@/components/main-ui-components/LandingPage/clients/Clients";
import CtaBanner from "@/components/main-ui-components/LandingPage/CtaBanner/CtaBanner";
import DevSection from "@/components/main-ui-components/LandingPage/DeveloperBanner/Developer";
import Faqs from "@/components/main-ui-components/LandingPage/Faqs/Faqs";
import FeaturedSlider from "@/components/main-ui-components/LandingPage/FeaturedIn/FeaturedIn";
import HeroSection from "@/components/main-ui-components/LandingPage/HeroSection/HeroSection";
import ProductTab from "@/components/main-ui-components/LandingPage/ProductsTab/ProductTab";

import Trust from "@/components/main-ui-components/LandingPage/TrustSection/Trust";
import AboutPaymentsSection from "@/components/MobileAboutus/MobileAboutus";
import Stats from "@/components/reusablesComponents/Stats/Stats";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const DeveloperSection = dynamic(
  () =>
    import("@/components/main-ui-components/LandingPage/DeveloperBanner/Developer"),
  { loading: () => <p>Loading...</p>, ssr: false },
);
const Page = () => {
  const pathname = usePathname();

  // ✅ Scroll to top whenever user navigates to home
  useEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);
  return (
    <div className="">
      <HeroSection />
      <FeaturedSlider />
      
      <EpayHeroSection />
      <ProductTab />
      <DeveloperSection />
      <Clients />
      <Trust />
      <Stats />
      <Faqs />
      <CtaBanner />
    </div>
  );
};

export default Page;
