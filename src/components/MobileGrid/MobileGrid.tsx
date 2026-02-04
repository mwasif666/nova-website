import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductGridSection() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const head = root.querySelector(".pgs__head");
      const cards = gsap.utils.toArray<HTMLElement>(".pgs__card");

      if (head) gsap.set(head, { autoAlpha: 0, y: 24 });
      gsap.set(cards, { autoAlpha: 0, y: 32, scale: 0.985 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      if (head) {
        tl.to(head, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
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
        head ? "-=0.25" : 0
      );

      cards.forEach((card) => {
        const strength = Number(card.getAttribute("data-parallax") || "10");
        gsap.to(card, {
          y: -strength,
          ease: "none",
          scrollTrigger: {
            trigger: card,
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
    <section ref={rootRef} className="pgs" aria-label="Product section">
      <div className="pgs__wrap">
        <div className="pgs__head">
          <div className="pgs__kicker">Nova App</div>
          <h2 className="pgs__title">
            Spend crypto anywhere
            <br />
            Manage it everywhere
          </h2>
          <p className="pgs__sub">
            Cards, wallet, and real-time conversion in one mobile experience.
          </p>
        </div>

        <div className="pgs__grid">
          {/* LEFT - Tall UI card */}
          <article className="pgs__card pgs__card--leftTall" data-parallax="16">
            <div className="pgs__uiTop">
              <div className="pgs__userRow">
                <div className="pgs__avatar" />
                <div className="pgs__userMeta">
                  <div className="pgs__userName">Nova Wallet</div>
                  <div className="pgs__userSmall">**** 4097 22XX</div>
                </div>
                <div className="pgs__share" />
              </div>

              <div className="pgs__chips">
                {["USDT", "BTC", "ETH", "USDC", "EUR", "USD"].map((t) => (
                  <div key={t} className="pgs__chip">
                    <span className="pgs__chipDot" />
                    {t}
                  </div>
                ))}
              </div>

              <div className="pgs__amountBox">
                <div className="pgs__amountLabel">Send Amount</div>
                <div className="pgs__amountValue">$120.00</div>
              </div>
            </div>

            <div className="pgs__cardBody">
              <h3 className="pgs__cardTitle">Instant transfers</h3>
              <p className="pgs__cardText">
                Send crypto globally with real-time status and secure confirmations.
              </p>
            </div>
          </article>

          {/* CENTER - Big statement */}
          <article className="pgs__card pgs__card--centerBig" data-parallax="10">
            <h3 className="pgs__centerBigText">
              Nova bridges crypto and everyday spending so your digital assets work like money
            </h3>
          </article>

          {/* RIGHT TOP - Map card */}
          <article className="pgs__card pgs__card--rightMap" data-parallax="14">
            <div className="pgs__mapTop" aria-hidden="true">
              <div className="pgs__map">
                <span className="pgs__mapBlob pgs__mapBlob--a" />
                <span className="pgs__mapBlob pgs__mapBlob--b" />
                <span className="pgs__mapBlob pgs__mapBlob--c" />
              </div>
            </div>

            <div className="pgs__cardBody">
              <h3 className="pgs__cardTitle">Global acceptance</h3>
              <p className="pgs__cardText">
                Use your Nova card online, in-store, and across borders wherever cards are supported.
              </p>
            </div>
          </article>

          {/* LEFT BOTTOM - Rating card */}
          <article className="pgs__card pgs__card--leftRating" data-parallax="8">
            <div className="pgs__ratingValue">24/7</div>
            <div className="pgs__stars" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="pgs__star" />
              ))}
            </div>
            <div className="pgs__ratingText">Real-time conversion engine</div>

            <div className="pgs__miniAvatars" aria-hidden="true">
              <span className="pgs__miniAvatar" />
              <span className="pgs__miniAvatar" />
              <span className="pgs__miniAvatar" />
              <span className="pgs__miniAvatar" />
              <span className="pgs__miniAvatar" />
            </div>
          </article>

          {/* CENTER BOTTOM - Phone card */}
          <article className="pgs__card pgs__card--centerPhone" data-parallax="12">
            <div className="pgs__phoneStage" aria-hidden="true">
              <div className="pgs__phone">
                <div className="pgs__phoneNotch" />
                <div className="pgs__phoneScreen">
                  <div className="pgs__phoneBars">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <span
                        key={i}
                        className="pgs__phoneBar"
                        style={{ height: `${26 + ((i * 11) % 36)}px` }}
                      />
                    ))}
                  </div>

                  <div className="pgs__phoneList">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="pgs__phoneRow">
                        <span className="pgs__dot" />
                        <span className="pgs__line" />
                        <span className="pgs__pill" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pgs__phoneGlow" />
            </div>

            <div className="pgs__cardBody">
              <h3 className="pgs__cardTitle">Finance at your fingertips</h3>
              <p className="pgs__cardText">
                Stay in control with balances, cards, and activity managed from the app.
              </p>
            </div>
          </article>

          {/* RIGHT BOTTOM - Chart card */}
          <article className="pgs__card pgs__card--rightChart" data-parallax="18">
            <div className="pgs__chartTop">
              <div className="pgs__chartHeader">
                <div>
                  <div className="pgs__chartLabel">Wallet Balance</div>
                  <div className="pgs__chartValue">$3,275.15</div>
                </div>
                <div className="pgs__dropdown">Monthly v</div>
              </div>

              <div className="pgs__bars" aria-hidden="true">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => (
                  <div key={m} className="pgs__barCol">
                    <div
                      className="pgs__bar pgs__bar--income"
                      style={{ height: `${44 + ((i * 13) % 64)}%` }}
                    />
                    <div
                      className="pgs__bar pgs__bar--expense"
                      style={{ height: `${24 + ((i * 9) % 52)}%` }}
                    />
                    <div className="pgs__barLabel">{m}</div>
                  </div>
                ))}
              </div>

              <div className="pgs__legend">
                <span className="pgs__lg">
                  <i className="pgs__lgDot pgs__lgDot--income" /> Income
                </span>
                <span className="pgs__lg">
                  <i className="pgs__lgDot pgs__lgDot--expense" /> Expense
                </span>
              </div>
            </div>

            <div className="pgs__cardBody">
              <h3 className="pgs__cardTitle">Clear spending insights</h3>
              <p className="pgs__cardText">
                Track crypto and fiat activity with simple analytics and full transparency.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
