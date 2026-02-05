import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PHONE_SHELL =
  "https://staticsource1.redotpay.com/web/img/home/v3/phone-shell.webp?t=1768989279850";
const PHONE_SCREEN =
  "https://staticsource1.redotpay.com/web/img/home/v3/introduction-1.webp?t=1";

type Card = {
  id: string;
  text: string;
  source: string;
  posClass: string;
};

const cards: Card[] = [
  {
    id: "c1",
    text: "Nova lets me pay with USDT and see the conversion instantly at checkout.",
    source: "App Store review",
    posClass: "card-pos card-pos--tl",
  },
  {
    id: "c2",
    text: "The virtual card is perfect for subscriptions and online shopping.",
    source: "Nova user",
    posClass: "card-pos card-pos--ml",
  },
  {
    id: "c3",
    text: "I can tap in-store and withdraw cash at ATMs without selling crypto manually.",
    source: "Community feedback",
    posClass: "card-pos card-pos--tr",
  },
  {
    id: "c4",
    text: "Everything is in the app, so I control cards, balances, and spend in one place.",
    source: "Beta tester",
    posClass: "card-pos card-pos--br",
  },
];

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".glass-card");

      gsap.set(cardEls, { autoAlpha: 0, y: 22, filter: "blur(6px)" });

      cardEls.forEach((el) => {
        const tl = gsap.timeline({ paused: true });

        tl.to(el, {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power3.out",
        });

        ScrollTrigger.create({
          trigger: el,
          start: "top 78%",
          end: "bottom 30%",
          onEnter: () => tl.play(),
          onLeave: () => tl.reverse(),
          onEnterBack: () => tl.play(),
          onLeaveBack: () => tl.reverse(),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="community-section"
      aria-label="Nova community"
    >
      <div className="community-container">
        <h2 className="community-title">Why people use Nova every day</h2>

        <div className="community-stage">
          <div className="phone-sticky">
            <div className="phone-wrap" aria-hidden="true">
              <img className="phone-screen" src={PHONE_SCREEN} alt="" />
              <img className="phone-shell" src={PHONE_SHELL} alt="" />
            </div>
          </div>

          <div className="cards-layer">
            {cards.map((c) => (
              <div key={c.id} className={`glass-card ${c.posClass}`}>
                <p className="glass-text">{c.text}</p>
                <span className="glass-source">{c.source}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
