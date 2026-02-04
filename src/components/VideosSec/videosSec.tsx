import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Slide = {
  id: "virtual" | "physical";
  kicker: string;
  title: string;
  subtitle: string;
  cta: string;
  videoSrcDesktop: string;
  videoSrcMobile: string;
};

type Props = {
  autoplay?: boolean;
  transitionMs?: number;
};

export default function CardsVideoSwitchSection({
  autoplay = true,
  transitionMs = 650,
}: Props) {
  const data: Slide[] = useMemo(
    () => [
      {
        id: "virtual",
        kicker: "Nova Cards",
        title: "Virtual card for instant online spending",
        subtitle:
          "Pay with crypto and Nova converts to fiat in real time for subscriptions, ecommerce, and bills.",
        cta: "Explore virtual card",
        videoSrcMobile:
          "https://staticsource1.redotpay.com/web/video/home/virtual-card-mobile.mp4?t=1768989279850",
        videoSrcDesktop:
          "https://staticsource1.redotpay.com/web/video/home/virtual-card.mp4?t=1768989279850",
      },
      {
        id: "physical",
        kicker: "Nova Cards",
        title: "Physical card for everyday life",
        subtitle:
          "Tap, swipe, or withdraw cash with a card built for global acceptance.",
        cta: "Explore physical card",
        videoSrcMobile:
          "https://staticsource1.redotpay.com/web/video/home/physical-card-mobile.mp4?t=1768989279850",
        videoSrcDesktop:
          "https://staticsource1.redotpay.com/web/video/home/physical-card.mp4?t=1768989279850",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const lockRef = useRef(false);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const v0Ref = useRef<HTMLVideoElement | null>(null);
  const v1Ref = useRef<HTMLVideoElement | null>(null);

  // Fix: ensure videos load and play on slide change
  const playIndex = (idx: number) => {
    const current = idx === 0 ? v0Ref.current : v1Ref.current;
    const other = idx === 0 ? v1Ref.current : v0Ref.current;

    try {
      if (other) {
        other.pause();
        other.currentTime = 0;
      }
      if (current) {
        current.pause();
        current.currentTime = 0;
        current.load();
        const p = current.play();
        if (p && typeof (p as any).catch === "function") (p as any).catch(() => {});
      }
    } catch {}
  };

  const go = (nextIndex: number) => {
    const target = (nextIndex + data.length) % data.length;
    if (lockRef.current || target === active) return;

    lockRef.current = true;
    setActive(target);
    requestAnimationFrame(() => playIndex(target));

    window.setTimeout(() => {
      lockRef.current = false;
    }, transitionMs);
  };

  const onEnded = () => {
    if (!autoplay) return;
    go(active + 1);
  };

  useEffect(() => {
    playIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const ctx = gsap.context(() => {
      gsap.set(wrap, {
        width: "76vw",
        height: "100vh",
        borderRadius: "140px",
      });

      gsap.to(wrap, {
        width: "100vw",
        borderRadius: "0px",
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top 85%",
          end: "top 20%",
          scrub: true,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${-active * 100}%, 0, 0)`;
  }, [active]);

  return (
    <section className="rp-section">
      <div ref={wrapRef} className="rp-wrap">
        <div className="rp-viewport">
          <div
            ref={trackRef}
            className="rp-track"
            style={{ transitionDuration: `${transitionMs}ms` }}
          >
            {/* Slide 1 */}
            <div className="rp-slide">
              <div className="rp-top">
                <div className="rp-kicker">{data[0].kicker}</div>
                <h2 className="rp-title">{data[0].title}</h2>
                <p className="rp-sub">{data[0].subtitle}</p>
                <button className="rp-cta" type="button">
                  {data[0].cta}
                </button>
              </div>

              <div className="rp-media">
                <div className="rp-videoFrame">
                  <video
                    ref={v0Ref}
                    className="rp-video"
                    muted
                    playsInline
                    preload="auto"
                    onEnded={onEnded}
                  >
                    <source src={data[0].videoSrcMobile} media="(max-width: 768px)" />
                    <source src={data[0].videoSrcDesktop} />
                  </video>
                </div>

                <div className="rp-toggle">
                  <button
                    type="button"
                    className={`rp-pill ${active === 0 ? "is-active" : ""}`}
                    onClick={() => go(0)}
                  >
                    Virtual Card
                  </button>
                  <button
                    type="button"
                    className={`rp-pill ${active === 1 ? "is-active" : ""}`}
                    onClick={() => go(1)}
                  >
                    Physical Card
                  </button>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="rp-slide">
              <div className="rp-top">
                <div className="rp-kicker">{data[1].kicker}</div>
                <h2 className="rp-title">{data[1].title}</h2>
                <p className="rp-sub">{data[1].subtitle}</p>
                <button className="rp-cta" type="button">
                  {data[1].cta}
                </button>
              </div>

              <div className="rp-media">
                <div className="rp-videoFrame">
                  <video
                    ref={v1Ref}
                    className="rp-video"
                    muted
                    playsInline
                    preload="auto"
                    onEnded={onEnded}
                  >
                    <source src={data[1].videoSrcMobile} media="(max-width: 768px)" />
                    <source src={data[1].videoSrcDesktop} />
                  </video>
                </div>

                <div className="rp-toggle">
                  <button
                    type="button"
                    className={`rp-pill ${active === 0 ? "is-active" : ""}`}
                    onClick={() => go(0)}
                  >
                    Virtual Card
                  </button>
                  <button
                    type="button"
                    className={`rp-pill ${active === 1 ? "is-active" : ""}`}
                    onClick={() => go(1)}
                  >
                    Physical Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rp-vignette" aria-hidden="true" />
      </div>
    </section>
  );
}
