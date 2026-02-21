import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./PaynexShowcaseSection.css";

gsap.registerPlugin(ScrollTrigger);

type Feature = {
  icon: string;
  title: string;
  desc: string;
  pos: "tl" | "tr" | "bl" | "br";
};

const ICONS = {
  bolt: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  </svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 10V8a5 5 0 0 1 10 0v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M6 10h12v10H6V10Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
  </svg>`,
  layers: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4 3 9l9 5 9-5-9-5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M3 13l9 5 9-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M10 7h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  </svg>`,
};

const FEATURES: Feature[] = [
  {
    icon: ICONS.bolt,
    title: "Real-time conversion",
    desc: "Crypto to fiat happens instantly at the moment you pay.",
    pos: "tl",
  },
  {
    icon: ICONS.lock,
    title: "Virtual + physical cards",
    desc: "Use a virtual card online and a physical card in-store.",
    pos: "tr",
  },
  {
    icon: ICONS.layers,
    title: "Global acceptance",
    desc: "Spend online, in-store, and at ATMs wherever cards work.",
    pos: "bl",
  },
  {
    icon: ICONS.phone,
    title: "App-based control",
    desc: "Manage wallet, cards, and transactions in one mobile app.",
    pos: "br",
  },
];

type Props = {
  phoneImage?: string;
};

export default function PaynexShowcaseSection({
  // phoneImage = "https://www.wordpress-dev.codeinsolution.com/paynex/wp-content/uploads/sites/90/2025/12/Home-Screen-Mockup-min-520x1024.png",
  phoneImage = "https://res.cloudinary.com/dmdfjexed/image/upload/v1771626984/726857f8-ae31-418d-9c77-bd1aa43dd513_removalai_preview_xqpx38.png",
}: Props) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);

      const title = q(".pss__title")[0] as HTMLElement | undefined;
      const cards = q(".pss__card") as unknown as HTMLElement[];
      const phoneWrap = q(".pss__phoneWrap")[0] as HTMLElement | undefined;
      const phone = q(".pss__phone")[0] as HTMLElement | undefined;
      const glow = q(".pss__phoneGlow")[0] as HTMLElement | undefined;
      const ctas = q(".pss__ctaRow")[0] as HTMLElement | undefined;

      if (!title || !ctas) return;

      gsap.set([title, ctas], { autoAlpha: 0, y: 22 });
      gsap.set(cards, { autoAlpha: 0, y: 26, scale: 0.985 });
      if (phoneWrap) gsap.set(phoneWrap, { autoAlpha: 0, y: 34, rotate: -1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(title, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" });

      if (phoneWrap) {
        tl.to(
          phoneWrap,
          { autoAlpha: 1, y: 0, rotate: 0, duration: 0.9, ease: "power3.out" },
          "-=0.35",
        );
      }

      tl.to(
        cards,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.55",
      ).to(
        ctas,
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.35",
      );

      if (phoneWrap) {
        gsap.to(phoneWrap, {
          y: -38,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      cards.forEach((card) => {
        const strength = Number(card.getAttribute("data-p") || "10");
        gsap.to(card, {
          y: -strength,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      const mm = gsap.matchMedia();
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      mm.add("(min-width: 521px)", () => {
        if (reduceMotion || !phone) return;

        gsap.to(phone, {
          y: 16,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      mm.add("(max-width: 520px)", () => {
        if (reduceMotion) return;

        if (phoneWrap) gsap.set(phoneWrap, { clearProps: "display" });

        if (phone) {
          gsap.to(phone, {
            y: 26,
            duration: 2.1,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }

        if (glow) {
          gsap.to(glow, {
            scale: 1.06,
            opacity: 0.95,
            duration: 2.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        }

        gsap.to(q(".pss__card--tl"), {
          y: -8,
          duration: 2.6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
        gsap.to(q(".pss__card--tr"), {
          y: -6,
          duration: 2.9,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
        gsap.to(q(".pss__card--bl"), {
          y: -7,
          duration: 3.1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
        gsap.to(q(".pss__card--br"), {
          y: -5,
          duration: 2.7,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="pss" aria-label="Nova showcase section">
      <div className="pss__wrap">
        <h2 className="pss__title">
          Spend smarter with Nova
          <br />
          every day
        </h2>

        <div className="pss__grid">
          {/* Card 1 */}
          <article className="pss__card pss__card--tl" data-p="18">
            <span
              className="pss__icon"
              dangerouslySetInnerHTML={{ __html: FEATURES[0].icon }}
            />
            <h3 className="pss__cardTitle">{FEATURES[0].title}</h3>
            <p className="pss__cardText">{FEATURES[0].desc}</p>
          </article>

          {/* Card 2 */}
          <article className="pss__card pss__card--tr" data-p="14">
            <span
              className="pss__icon"
              dangerouslySetInnerHTML={{ __html: FEATURES[1].icon }}
            />
            <h3 className="pss__cardTitle">{FEATURES[1].title}</h3>
            <p className="pss__cardText">{FEATURES[1].desc}</p>
          </article>

          {/* Phone (center on desktop, after cards on mobile due to flex order) */}
          <div className="pss__phoneWrap" aria-hidden="true">
            <div className="pss__phoneGlow" />
            <img
              className="pss__phone"
              src={phoneImage}
              alt=""
              loading="lazy"
            />
          </div>

          {/* Card 3 */}
          <article className="pss__card pss__card--bl" data-p="16">
            <span
              className="pss__icon"
              dangerouslySetInnerHTML={{ __html: FEATURES[2].icon }}
            />
            <h3 className="pss__cardTitle">{FEATURES[2].title}</h3>
            <p className="pss__cardText">{FEATURES[2].desc}</p>
          </article>

          {/* Card 4 */}
          <article className="pss__card pss__card--br" data-p="20">
            <span
              className="pss__icon"
              dangerouslySetInnerHTML={{ __html: FEATURES[3].icon }}
            />
            <h3 className="pss__cardTitle">{FEATURES[3].title}</h3>
            <p className="pss__cardText">{FEATURES[3].desc}</p>
          </article>
        </div>

        <p className="pss__sub">
          Nova bridges crypto and everyday spending with real-time conversion
          and
          <br />
          card controls you manage from your phone.
        </p>

        <div className="pss__ctaRow">
          <a className="pss__btn pss__btn--primary" href="#download">
            Download App
          </a>
          <a className="pss__btn pss__btn--ghost" href="#features">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
