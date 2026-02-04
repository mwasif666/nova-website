"use client";

// import StickyPhoneShowcase from "../gsap/gsap";
import GsapPhone from "../about/gsap/gsapPhone";
import VideosSec from "../../../../components/VideosSec/videosSec";
import CardCarousel from "../../../../components/CardCarousel/cardCarousel";
import PhoneData from "../../../../components/PhoneData/phoneData";
import Banner from "../../../../components/Banner/banner";
import FutureBanner from "../../../../components/FutureBanner/FutureBanner";
import MobileAbout from "../../../../components/MobileAbout/MobileAbout";
import MobileAboutus from "../../../../components/MobileAboutus/MobileAboutus";

import React from "react";

import Stats from "@/components/reusablesComponents/Stats/Stats";

export default function OurCompanyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* sticky section  */}

      {/* Banner */}
      <Banner />

      {/* MobileAboutus */}
      <MobileAboutus />

      {/* <StickyPhoneShowcase /> */}
      <GsapPhone />

      {/* CardCarousel */}
      <CardCarousel />

      {/* VideosSec */}
      <VideosSec />

      {/* Phone Data */}
      <PhoneData />

      {/* MobileGrid */}
      {/* <MobileGrid /> */}

      {/* FutureBanner */}
      <FutureBanner />

      {/* MobileAbout */}
      <MobileAbout />

      {/* Stats Section */}
      <Stats />

      {/* Leadership Team Section */}

      {/* Footer */}
      <div className="text-center py-10 text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} Nova Crest Finance. All rights reserved.
      </div>
    </div>
  );
}
