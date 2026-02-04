import React, { useEffect, useMemo, useRef, useState } from "react";

type BenefitCard = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  heading?: string;
  cards?: BenefitCard[];
  autoplayMs?: number;
  transitionMs?: number;
};

export default function EverydayBenefitsCarousel({
  heading = "Everyday Crypto, Simplified",
  autoplayMs = 2500,
  transitionMs = 520,
  cards,
}: Props) {
  const items: BenefitCard[] = useMemo(
    () =>
      cards ?? [
        {
          title: "Real-time\ncrypto-to-fiat",
          description:
            "Spend USDT and other assets with instant conversion at checkout.",
          image:
            "https://static.vecteezy.com/system/resources/thumbnails/049/855/871/small/stunning-high-resolution-nature-and-landscape-backgrounds-breathtaking-scenery-in-hd-photo.jpg",
        },
        {
          title: "Virtual + physical\nNova cards",
          description:
            "Create a virtual card for online use and a physical card for in-store.",
          image:
            "https://rukminim2.flixcart.com/image/480/480/j7usl8w0/poster/h/t/x/medium-amezing-beautiful-wallpaper-hd-2-1-poster-rgb6n7po1136-original-imaexz2xkbuqxbq5.jpeg?q=90",
        },
        {
          title: "Online, in-store,\nATM ready",
          description:
            "Shop, pay bills, travel, or withdraw cash worldwide.",
          image:
            "https://static.vecteezy.com/system/resources/thumbnails/052/248/075/small/peacock-feather-wallpaper-hd-wallpaper-photo.jpeg",
        },
        {
          title: "Global\ncard acceptance",
          description:
            "Use Nova wherever major card networks are supported.",
          image:
            "https://www.hdwallpapers.in/download/lake_with_reflection_of_mountain_and_clouds_4k_hd_nature-HD.jpg",
        },
        {
          title: "All-in-one\nmobile app",
          description:
            "Manage wallet, cards, and transactions from one place.",
          image:
            "https://rukminim2.flixcart.com/image/480/480/j7usl8w0/poster/h/t/x/medium-amezing-beautiful-wallpaper-hd-2-1-poster-rgb6n7po1136-original-imaexz2xkbuqxbq5.jpeg?q=90",
        },
      ],
    [cards]
  );

  const count = items.length;
  const clampIndex = (i: number) => ((i % count) + count) % count;

  const [active, setActive] = useState(2); // center index
  const [isHover, setIsHover] = useState(false);

  const timerRef = useRef<number | null>(null);
  const lockRef = useRef(false);

  const slideTo = (nextIndex: number) => {
    if (lockRef.current) return;
    lockRef.current = true;

    setActive(clampIndex(nextIndex));

    window.setTimeout(() => {
      lockRef.current = false;
    }, transitionMs);
  };

  const next = () => slideTo(active + 1);
  const prev = () => slideTo(active - 1);

  const goTo = (i: number) => slideTo(i);

  useEffect(() => {
    if (isHover) return;
    if (timerRef.current) window.clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      slideTo(active + 1);
    }, autoplayMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplayMs, isHover, active]);

  // offset helper: map item index to a relative position around "active"
  const getOffset = (i: number) => {
    let d = i - active;
    // wrap to shortest direction
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  return (
    <section className="eb-section">
      <div className="eb-inner">
        <h2 className="eb-title">{heading}</h2>

        <div
          className="eb-stage"
          style={
            {
              ["--t" as any]: `${transitionMs}ms`,
            } as React.CSSProperties
          }
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {items.map((item, idx) => {
            const off = getOffset(idx);

            // render only near cards + 2 offscreen buffers (for smooth entry/exit)
            if (off < -3 || off > 3) return null;

            const posClass =
              off <= -3
                ? "off-left"
                : off === -2
                ? "far-left"
                : off === -1
                ? "left"
                : off === 0
                ? "center"
                : off === 1
                ? "right"
                : off === 2
                ? "far-right"
                : "off-right";

            return (
              <button
                key={idx}
                type="button"
                className={`eb-card ${posClass}`}
                onClick={
                  off === -1 || off === -2 ? prev : off === 1 || off === 2 ? next : undefined
                }
                aria-label={off === 0 ? "Current slide" : off < 0 ? "Previous" : "Next"}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="eb-overlay" />
                <div className="eb-content eb-top">
                  <div className="eb-card-title">
                    {item.title.split("\n").map((line, i2) => (
                      <span key={i2}>
                        {line}
                        {i2 < item.title.split("\n").length - 1 ? <br /> : null}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="eb-content eb-bottom">
                  <div className="eb-card-desc">{item.description}</div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="eb-dots">
          {items.map((_, i) => {
            const isActive = i === clampIndex(active);
            return (
              <button
                key={i}
                type="button"
                className={`eb-dot ${isActive ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>
      </div>

    </section>
  );
}
