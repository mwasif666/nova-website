"use client";

import React, { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Asset = {
  id: string;
  src: string;
  className: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
};

type AssetElement = HTMLElement & {
  __fromVars?: gsap.TweenVars;
  __toVars?: gsap.TweenVars;
};

type Step = {
  kicker: string;
  title: string;
  desc: string;
  href: string;
  sr: string;
  screen: string;
  assets: Asset[];
};

export default function StickyPhoneShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const screenRefs = useRef<(HTMLImageElement | null)[]>([]);
  const assetsGroupRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps: Step[] = useMemo(() => {
    const screens = [
      "https://staticsource1.redotpay.com/web/img/home/v3/introduction-1.webp?t=1",
      "https://staticsource1.redotpay.com/web/img/home/v3/introduction-3.webp?t=1",
      "https://staticsource1.redotpay.com/web/img/home/v3/introduction-4.webp?t=1",
      "https://staticsource1.redotpay.com/web/img/home/v3/introduction-5.webp?t=1",
      "https://staticsource1.redotpay.com/web/img/home/v3/introduction-6.webp?t=1",
      "https://staticsource1.redotpay.com/web/img/home/v3/introduction-7.webp?t=1",
    ];

    const assets: Asset[] = [
      {
        id: "a1",
        src: "https://staticsource1.redotpay.com/web/img/home/v3/introduction-5-1.webp?t=1",
        className:
          "absolute top-[6%] -left-[34%] z-[3] w-[60px] opacity-0 lg:w-[95px]",
        from: { x: -30, y: 25, opacity: 0, scale: 0.8, rotate: -10 },
        to: {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: -4,
          duration: 0.5,
          ease: "power2.out",
        },
      },
      {
        id: "a2",
        src: "https://staticsource1.redotpay.com/web/img/home/v3/introduction-5-2.webp?t=1",
        className:
          "absolute top-[4%] -right-[30%] z-[3] w-[60px] opacity-0 lg:w-[45px]",
        from: { x: 30, y: 15, opacity: 0, scale: 0.8, rotate: 18 },
        to: {
          x: -70,
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 10,
          duration: 0.5,
          ease: "power2.out",
        },
      },
      {
        id: "a3",
        src: "https://staticsource1.redotpay.com/web/img/home/v3/introduction-3-2.webp?t=1",
        className:
          "absolute top-[44%] -right-[20%] z-[4] w-[70px] opacity-0 lg:w-[120px]",
        from: { x: 40, y: -25, opacity: 0, scale: 0.85 },
        to: {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "power2.out",
        },
      },
      {
        id: "a4",
        src: "https://staticsource1.redotpay.com/web/img/home/v3/introduction-5-3.webp?t=1",
        className:
          "absolute top-[32%] -left-[40%] z-[3] w-[28px] opacity-0 lg:w-[55px]",
        from: { x: -35, y: 0, opacity: 0, scale: 0.75, rotate: 22 },
        to: {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 10,
          duration: 0.5,
          ease: "power2.out",
        },
      },
      {
        id: "a5",
        src: "https://staticsource1.redotpay.com/web/img/home/v3/introduction-5-6.webp?t=1",
        className:
          "absolute bottom-[20%] -right-[42%] z-[3] w-[28px] opacity-0 lg:w-[55px]",
        from: { x: 35, y: 10, opacity: 0, scale: 0.75, rotate: -18 },
        to: {
          x: -60,
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: -10,
          duration: 0.5,
          ease: "power2.out",
        },
      },
      {
        id: "a6",
        src: "https://staticsource1.redotpay.com/web/img/home/v3/introduction-5-8.webp?t=1",
        className:
          "absolute bottom-[6%] -left-[30%] z-[3] w-[60px] opacity-0 lg:w-[50px]",
        from: { x: -10, y: 35, opacity: 0, scale: 0.8, rotate: 14 },
        to: {
          x: 50,
          y: 20,
          opacity: 1,
          scale: 1,
          rotate: 6,
          duration: 0.5,
          ease: "power2.out",
        },
      },
    ];

    const stepData = [
      {
        kicker: "Real-time Conversion",
        title: "Crypto to fiat, instantly",
        desc:
          "Pay with USDT or other assets and Nova converts to local currency at the moment of purchase.",
        href: "#conversion",
        sr: "Real-time conversion",
      },
      {
        kicker: "Virtual Card",
        title: "Shop online with a virtual card",
        desc: "Generate a virtual card in seconds for subscriptions, ecommerce, and bills.",
        href: "#virtual-card",
        sr: "Virtual card",
      },
      {
        kicker: "Physical Card",
        title: "Tap to pay in-store",
        desc: "Use a physical Nova card anywhere major cards are accepted.",
        href: "#physical-card",
        sr: "Physical card",
      },
      {
        kicker: "Everyday Spending",
        title: "Pay bills and travel with confidence",
        desc: "Book flights, pay utilities, and handle daily expenses using your crypto balance.",
        href: "#everyday-spending",
        sr: "Everyday spending",
      },
      {
        kicker: "ATM Access",
        title: "Withdraw cash when you need it",
        desc: "Use ATMs to convert crypto to cash with transparent rates.",
        href: "#atm-access",
        sr: "ATM access",
      },
      {
        kicker: "In-App Control",
        title: "Manage everything in one app",
        desc: "Track balances, freeze cards, and review transactions in real time.",
        href: "#app-control",
        sr: "In-app control",
      },
    ];

    return stepData.map((step, i) => ({
      ...step,
      screen: screens[i],
      assets: assets.map((a) => ({ ...a, id: `${a.id}-${i}` })),
    }));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      screenRefs.current.forEach((img, i) => {
        if (!img) return;
        gsap.set(img, { autoAlpha: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.92 });
      });

      assetsGroupRefs.current.forEach((g) => {
        if (!g) return;
        gsap.set(g.querySelectorAll("[data-asset]"), { autoAlpha: 0 });
      });

      const lastStepEl = stepRefs.current[steps.length - 1];

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        endTrigger: lastStepEl || section,
        end: "top top",
        pin,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top center",
          end: "bottom center",
          onEnter: () => activateStep(i),
          onEnterBack: () => activateStep(i),
          invalidateOnRefresh: true,
        });
      });

      function activateStep(i: number) {
        screenRefs.current.forEach((img, idx) => {
          if (!img) return;
          gsap.to(img, {
            autoAlpha: idx === i ? 1 : 0,
            scale: idx === i ? 1 : 0.92,
            duration: idx === i ? 0.35 : 0.25,
            ease: "power2.out",
          });
        });

        assetsGroupRefs.current.forEach((g, idx) => {
          if (!g) return;
          const assetsEls = gsap.utils.toArray<AssetElement>(
            g.querySelectorAll("[data-asset]")
          );

          if (idx === i) {
            assetsEls.forEach((node) => {
              const fromVars =
                node.__fromVars ?? { y: 18, opacity: 0, scale: 0.9 };
              const toVars =
                node.__toVars ?? {
                  opacity: 1,
                  scale: 1,
                  duration: 0.35,
                  ease: "power2.out",
                };

              gsap.set(node, { autoAlpha: 0 });
              gsap.fromTo(node, fromVars, { ...toVars, autoAlpha: 1 });
            });
          } else {
            gsap.to(assetsEls, { autoAlpha: 0, duration: 0.2 });
          }
        });
      }

      const imgs = Array.from(section.querySelectorAll("img"));
      const onLoad = () => ScrollTrigger.refresh();
      imgs.forEach((im) => {
        const i = im as HTMLImageElement;
        if (i.complete) return;
        i.addEventListener("load", onLoad, { once: true });
      });

      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [steps.length]);

  return (
    <>
      {/* MOBILE (<md) */}
      <section className="block md:hidden">
        <div className="mx-auto w-full max-w-[520px] px-4 py-10">
          {steps.map((s, i) => (
            <div key={i} className="mb-14">
              <div className="text-left">
                <p className="text-[13px] font-semibold text-red-500">{s.kicker}</p>
                <h2 className="mt-2 text-[28px] font-extrabold leading-[1.05] text-black">
                  {s.title}
                </h2>
                <p className="mt-4 text-[16px] leading-[1.6] text-gray-700">{s.desc}</p>
                <a href={s.href} className="mt-5 inline-block">
                  <button className="rounded-full bg-black px-5 py-3 text-[14px] font-semibold text-white">
                    Learn more <span className="sr-only">{s.sr}</span>
                  </button>
                </a>
              </div>

              <div className="mt-8 flex justify-center">
                <div className="relative w-[240px]">
                  <img
                    src="https://staticsource1.redotpay.com/web/img/home/v3/phone-shell.webp?t=1768989279850"
                    alt="Phone Shell"
                    className="pointer-events-none block w-full select-none"
                  />
                  <div className="absolute left-1/2 top-[18px] z-[2] h-[410px] w-[190px] -translate-x-1/2 overflow-hidden rounded-[22px] bg-white">
                    <img
                      src={s.screen}
                      alt={`${s.kicker} preview`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {i !== steps.length - 1 && <div className="mt-12 h-px w-full bg-gray-200" />}
            </div>
          ))}
        </div>
      </section>

      {/* DESKTOP (md+) */}
      <section
        ref={sectionRef}
        className="relative my-20 hidden md:block"
        style={{ height: `${steps.length * 100}vh` }}
      >
        <div className="container-1080 relative flex h-full items-start justify-between gap-28">
          {/* LEFT */}
          <div className="w-[550px] ps-4">
            {steps.map((s, i) => (
              <div
                key={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="flex h-screen items-center"
              >
                <div>
                  <h3 className="text-primary text-lg font-semibold tracking-tight sm:text-xl">
                    {s.kicker}
                  </h3>
                  <h2 className="my-6 text-3xl leading-[1.16] font-semibold lg:text-[50px]">
                    {s.title}
                  </h2>
                  <p className="text-xl leading-normal font-normal">{s.desc}</p>
                  <a href={s.href}>
                    <button className="bg-foreground mt-6 inline-block cursor-pointer rounded-full px-6 py-4 text-lg leading-[13px] font-medium text-white hover:opacity-80">
                      Learn more <span className="sr-only">{s.sr}</span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="relative w-[420px]">
            <div ref={pinRef} className="flex h-screen items-center justify-center">
              <div
                className="nc-phone relative"
                style={
                  {
                    "--phoneW": "340px",
                    "--phoneH": "660px",
                    "--screenW": "320px",
                    "--screenH": "590px",
                    "--screenTop": "36px",
                    "--screenR": "28px",
                  } as React.CSSProperties
                }
              >
                <img
                  src="https://staticsource1.redotpay.com/web/img/home/v3/phone-shell.webp?t=1768989279850"
                  alt="Phone Shell"
                  className="pointer-events-none nc-shell"
                />

                <div className="nc-screenWindow">
                  {steps.map((step, idx) => (
                    <img
                      key={idx}
                      ref={(el) => {
                        screenRefs.current[idx] = el;
                      }}
                      className="nc-screenImg"
                      src={step.screen}
                      alt={`Preview ${idx + 1}`}
                    />
                  ))}
                </div>

                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    ref={(el) => {
                      assetsGroupRefs.current[idx] = el;
                    }}
                    className="pointer-events-none absolute inset-0 z-[4]"
                  >
                    {step.assets.map((a) => (
                      <img
                        key={a.id}
                        data-asset
                        src={a.src}
                        className={a.className}
                        alt=""
                        ref={(el) => {
                          if (!el) return;
                          const assetEl = el as AssetElement;
                          assetEl.__fromVars = a.from;
                          assetEl.__toVars = a.to;
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          .container-1080 {
            width: min(1080px, calc(100% - 32px));
            margin: 0 auto;
          }

          .nc-phone {
            width: var(--phoneW);
            height: var(--phoneH);
          }

          .nc-shell {
            position: absolute;
            inset: 0;
            width: var(--phoneW);
            height: var(--phoneH);
            object-fit: contain;
            z-index: 3;
          }

          .nc-screenWindow {
            position: absolute;
            left: 50%;
            top: var(--screenTop);
            transform: translateX(-50%);
            width: var(--screenW);
            height: var(--screenH);
            overflow: hidden;
            border-radius: var(--screenR);
            background: #fff;
            z-index: 2;
          }

          .nc-screenImg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
            transform-origin: center;
          }
        `}</style>
      </section>
    </>
  );
}
