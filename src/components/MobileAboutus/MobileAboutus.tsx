import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./AboutPaymentsSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPaymentsSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const kicker = root.querySelector(".aps__kicker");
      const title = root.querySelector(".aps__title");
      const text = root.querySelector(".aps__text");
      const cards = gsap.utils.toArray<HTMLElement>(".aps__card");
      const phone = root.querySelector(".aps__phone");
      const blob = root.querySelector(".aps__blob");
      const visual = root.querySelector(".aps__visual");

      gsap.set([kicker, title, text], { autoAlpha: 0, y: 22 });
      gsap.set(cards, { autoAlpha: 0, y: 24, scale: 0.985 });
      gsap.set(phone, { autoAlpha: 0, y: 30, rotate: 12, scale: 0.98 });
      gsap.set(blob, { autoAlpha: 0, scale: 0.92 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(kicker, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" })
        .to(title, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.25")
        .to(text, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.35")
        .to(blob, { autoAlpha: 1, scale: 1, duration: 0.7, ease: "power3.out" }, "-=0.35")
        .to(
          phone,
          { autoAlpha: 1, y: 0, rotate: 10, scale: 1, duration: 0.85, ease: "power3.out" },
          "-=0.55"
        )
        .to(
          cards,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.45"
        );

      if (visual) {
        gsap.to(phone, {
          y: -40,
          rotate: 7,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(blob, {
          y: 24,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      cards.forEach((card, i) => {
        const strength = 10 + i * 3;
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
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="aps" aria-label="About section">
      <div className="aps__container">
        <div className="aps__row">
          {/* LEFT */}
          <div className="aps__col aps__col--left">
            <div className="aps__kicker">ABOUT NOVA</div>

            <h2 className="aps__title">
              A fintech bridge between <span className="aps__titleAccent">crypto</span>
              <br />
              and daily life
            </h2>

            <p className="aps__text">
              Nova lets you use crypto like regular money. Pay online, in-store, or at
              ATMs with cards backed by real-time conversion in the app.
            </p>

            <div className="aps__features">
              {/* Card 1 */}
              <article className="aps__card">
                <div className="aps__cardIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 7h4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h3 className="aps__cardTitle">Secure, real-time conversion</h3>
                <p className="aps__cardText">
                  Your crypto converts to fiat at the moment you pay.
                </p>
              </article>

              {/* Card 2 */}
              <article className="aps__card">
                <div className="aps__cardIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 12a5 5 0 0 1 10 0v6a2 2 0 0 1-2 2h-2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 12v6a2 2 0 0 0 2 2h2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 10a3 3 0 0 1 6 0"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h3 className="aps__cardTitle">Card + wallet in one app</h3>
                <p className="aps__cardText">
                  Manage balances, cards, and transactions from your phone.
                </p>
              </article>
            </div>
          </div>

          {/* RIGHT */}
          <div className="aps__col aps__col--right" aria-hidden="true">
            <div className="aps__visual">
              <div className="aps__blob" />
              <img
                className="aps__phone"
                src="https://templates.enativestudio.com/epay/wp-content/uploads/sites/6/2025/02/Mockup-2.png"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
