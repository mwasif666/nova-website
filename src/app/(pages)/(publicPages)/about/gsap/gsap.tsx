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
    const base = {
      kicker: "International Transfer",
      title: "Send Crypto, Receive Local Currency",
      desc: "Experience hassle-free sending. Every transaction protected, every recipient just moments away.",
      href: "/send-bank-ewallet",
      sr: "International Transfer",
    };

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
          "absolute top-[4%] -right-[30%] z-[3] w-[60px] opacity-0 lg:w-[95px]",
        from: { x: 30, y: 15, opacity: 0, scale: 0.8, rotate: 18 },
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
        id: "a3",
        src: "https://staticsource1.redotpay.com/web/img/home/v3/introduction-3-2.webp?t=1",
        className:
          "absolute top-[44%] -right-[20%] z-[4] w-[70px] opacity-0 lg:w-[130px]",
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
          "absolute top-[32%] -left-[40%] z-[3] w-[48px] opacity-0 lg:w-[85px]",
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
          "absolute bottom-[20%] -right-[42%] z-[3] w-[48px] opacity-0 lg:w-[85px]",
        from: { x: 35, y: 10, opacity: 0, scale: 0.75, rotate: -18 },
        to: {
          x: 0,
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
          "absolute bottom-[6%] -left-[30%] z-[3] w-[60px] opacity-0 lg:w-[100px]",
        from: { x: -10, y: 35, opacity: 0, scale: 0.8, rotate: 14 },
        to: {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 6,
          duration: 0.5,
          ease: "power2.out",
        },
      },
    ];

    return Array.from({ length: 6 }).map((_, i) => ({
      ...base,
      screen: screens[i],
      assets: assets.map((a) => ({ ...a, id: `${a.id}-${i}` })),
    }));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    if (!section || !pin) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      // initial screens
      screenRefs.current.forEach((img, i) => {
        if (!img) return;
        gsap.set(img, { autoAlpha: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.92 });
      });

      // initial assets hidden
      assetsGroupRefs.current.forEach((g) => {
        if (!g) return;
        gsap.set(g.querySelectorAll("[data-asset]"), { autoAlpha: 0 });
      });

      // ✅ pin only until LAST step starts
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

      // ✅ step triggers
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
        // screens swap
        screenRefs.current.forEach((img, idx) => {
          if (!img) return;
          gsap.to(img, {
            autoAlpha: idx === i ? 1 : 0,
            scale: idx === i ? 1 : 0.92,
            duration: idx === i ? 0.35 : 0.25,
            ease: "power2.out",
          });
        });

        // assets swap
        assetsGroupRefs.current.forEach((g, idx) => {
          if (!g) return;
          const assetsEls = gsap.utils.toArray<HTMLElement>(
            g.querySelectorAll("[data-asset]")
          );

          if (idx === i) {
            assetsEls.forEach((node) => {
              const fromVars =
                (node as any).__fromVars ?? { y: 18, opacity: 0, scale: 0.9 };
              const toVars =
                (node as any).__toVars ?? {
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

      // refresh after images load
      const imgs = Array.from(section.querySelectorAll("img"));
      const onLoad = () => ScrollTrigger.refresh();
      imgs.forEach((im) => {
        if (im.complete) return;
        im.addEventListener("load", onLoad, { once: true });
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, [steps.length]);

  return (
    <section
      ref={sectionRef}
      className="relative my-20 hidden md:block"
      // ✅ NO extra space at end
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

        {/* RIGHT (wider phone) */}
        <div className="relative w-[420px]">
          <div ref={pinRef} className="flex h-screen items-center justify-center">
            <div className="relative">
              {/* Shell wider */}
              <img
                src="https://staticsource1.redotpay.com/web/img/home/v3/phone-shell.webp?t=1768989279850"
                alt="Phone Shell"
                className="pointer-events-none absolute inset-0 z-[3] block h-[760px] w-[440px] object-contain"
              />

              {/* Screen viewport (clipped) */}
              <div
                className="relative z-[2] h-[708px] w-[340px] overflow-hidden rounded-[28px] bg-white"
                style={{ clipPath: "inset(0 round 28px)" }}
              >
                {steps.map((step, idx) => (
                  <img
                    key={idx}
                    ref={(el) => {
                      screenRefs.current[idx] = el;
                    }}
                    className="absolute mobile-img inset-0 h-full w-full"
                    src={step.screen}
                    alt={`Preview ${idx + 1}`}
                  />
                ))}
              </div>

              {/* assets */}
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
                        (el as any).__fromVars = a.from;
                        (el as any).__toVars = a.to;
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
