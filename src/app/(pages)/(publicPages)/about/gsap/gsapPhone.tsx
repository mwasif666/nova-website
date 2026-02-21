"use client";

import React, { useMemo } from "react";

type Step = {
  kicker: string;
  title: string;
  desc: string;
  href: string;
  sr: string;
  image: string;
};

export default function StickyPhoneShowcase() {
  const steps: Step[] = useMemo(() => {
    return [
      {
        kicker: "Wallet Overview",
        title: "See your balance and move funds in one place",
        desc: "Get a clean snapshot of your portfolio, recent activity, and essential money actions so daily crypto finance stays simple and fast.",
        href: "#wallet-overview",
        sr: "Wallet overview preview",
        image:
          "https://res.cloudinary.com/dmdfjexed/image/upload/v1771626984/726857f8-ae31-418d-9c77-bd1aa43dd513_removalai_preview_xqpx38.png",
      },
      {
        kicker: "Smart Funding",
        title: "Top up your card with a guided deposit flow",
        desc: "Move from wallet balance to card spending with a focused step-by-step experience that reduces confusion and keeps funding decisions clear.",
        href: "#smart-funding",
        sr: "Smart funding preview",
        image:
          "https://res.cloudinary.com/dmdfjexed/image/upload/v1771626984/68df0d1f-3eab-4df8-8fb6-2f97f4b16548_removalai_preview_crwcrm.png",
      },
      {
        kicker: "Instant Transfer",
        title: "Send crypto confidently with clear fee visibility",
        desc: "Transfer to teammates, partners, or clients with a focused form that keeps amount, cost, and final received value easy to review before you confirm.",
        href: "#instant-transfer",
        sr: "Instant transfer preview",
        image:
          "https://res.cloudinary.com/dmdfjexed/image/upload/v1771626984/585fc860-58bc-44d2-89eb-e59a0d322c02_removalai_preview_rqm69h.png",
      },
      {
        kicker: "Deposit Setup",
        title: "Choose network details without friction",
        desc: "Select the right asset and blockchain route in seconds, helping users avoid mistakes and complete deposits with more trust and control.",
        href: "#deposit-setup",
        sr: "Deposit setup preview",
        image:
          "https://res.cloudinary.com/dmdfjexed/image/upload/v1771626984/f536dac6-58c4-44e3-972b-600e6ec5d7ee_removalai_preview_sofe0y.png",
      },
    ];
  }, []);

  return (
    <section className="">
      <div className="mx-auto w-full max-w-[1120px] px-4">
        {steps.map((s, i) => (
          <div
            key={s.href}
            className={`${i === 0 ? "" : "-mt-8 md:-mt-16"} sticky top-16 md:top-24`}
            style={{ zIndex: i + 1 }}
          >
            <div className="bg-white px-2 py-8 md:px-4 md:py-12">
              <div
                className={`flex flex-col items-center gap-10 md:gap-16 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <p className="inline-flex items-center whitespace-nowrap rounded-full border border-[#b8c9da] bg-[#d8e3ee] px-5 py-2 text-[12px] font-semibold tracking-[0.2em] text-[#071a4a] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] md:px-6 md:py-2.5 md:text-[13px] md:tracking-[0.24em]">
                    {s.kicker}
                  </p>
                  <h2 className="mt-3 text-[2.5rem] leading-[1.08] font-semibold text-black">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-base leading-[1.7] text-gray-700 md:text-xl md:leading-normal">
                    {s.desc}
                  </p>
                  <a href={s.href} className="mt-6 inline-block">
                    <button className="bg-foreground inline-block cursor-pointer rounded-full px-6 py-3 text-sm leading-[1] font-medium text-white hover:opacity-80 md:px-6 md:py-4 md:text-base">
                      Learn more <span className="sr-only">{s.sr}</span>
                    </button>
                  </a>
                </div>

                <div className="w-full md:w-1/2">
                  <img
                    src={s.image}
                    alt={`${s.kicker} preview`}
                    className="gsap-phone-image mx-auto block w-full max-w-[185px] max-h-[360px] object-contain sm:max-w-[210px] sm:max-h-[400px] md:max-w-[320px] md:max-h-[620px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (min-width: 1024px) and (max-width: 1366px) {
          .gsap-phone-image {
            max-height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
