import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDialogStore } from "@/store/useDialogStore";

// import "./EpayHeroSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function EpayHeroSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const { open } = useDialogStore();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const kicker = root.querySelector(".epay__kicker");
      const title = root.querySelector(".epay__title");
      const leftCard = root.querySelector(".epay__leftCard");
      const phones = root.querySelector(".epay__phones");
      const right = root.querySelector(".epay__right");
      const rating = root.querySelector(".epay__rating");

      gsap.set([kicker, title], { autoAlpha: 0, y: 18 });
      gsap.set([leftCard, phones, right, rating], { autoAlpha: 0, y: 26 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(kicker, { autoAlpha: 1, y: 0, duration: 0.45, ease: "power3.out" })
        .to(
          title,
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.2",
        )
        .to(
          [leftCard, phones, right],
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.15",
        )
        .to(
          rating,
          { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.45",
        );

      if (phones) {
        gsap.to(phones, {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: phones,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(phones, {
          y: "+=9",
          duration: 2.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="epay" aria-label="Nova hero section">
      {/* background blobs */}
      <div className="epay__bg" aria-hidden="true" />

      <div className="epay__wrap">
        {/* Top Heading */}
        <div className="epay__head">
          <div className="epay__kicker">NOVA PAYMENTS</div>
          <h2 className="epay__title">
            The future of crypto spending,
            <br />
            today
          </h2>
        </div>

        {/* 3-column layout */}
        <div className="epay__grid">
          {/* LEFT: Activities card */}
          <div className="epay__left">
            <img
              className="epay__leftCard"
              src="https://templates.enativestudio.com/epay/wp-content/uploads/sites/6/2025/02/Activities.png"
              alt="Activities card"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* CENTER: Phones mockup */}
          <div className="epay__center">
            <img
              className="epay__phones"
              src="https://res.cloudinary.com/dmdfjexed/image/upload/v1771656185/nova_userpanel_mobile_app_tzc0g9.png"
              alt="Mobile app mockup"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* RIGHT: Content + rating */}
          <div className="epay__rightCol">
            <div className="epay__right">
              <h3 className="epay__rightTitle">
                Spend, transfer, and manage crypto
                <br />
                like everyday money
              </h3>

              <p className="epay__rightText">
                Nova gives you virtual and physical cards with real-time
                conversion so you can shop online, pay bills, travel, or
                withdraw cash at ATMs.
              </p>

              <button type="button" className="epay__btn" onClick={open}>
                Get Started
              </button>
                
            </div>

            <div className="epay__rating">
              <div className="epay__stars" aria-hidden="true">
                <span className="epay__star is-on" />
                <span className="epay__star is-on" />
                <span className="epay__star is-on" />
                <span className="epay__star is-on" />
                <span className="epay__star is-on" />
              </div>

              <div className="epay__ratingRow">
                <div className="epay__ratingValue">24/7 </div>
                <div className="epay__ratingMeta">
                  <div className="epay__ratingText">
                    Supported
                    <br />
                    and card control
                  </div>

                  
                </div>
              </div>
                <div className="epay__downloadRow">
                              <a
                                className="epay__store epay__store--apple"
                                href="#download-ios"
                                aria-label="Download on the App Store"
                              >
                                <FaApple className="epay__storeIcon" aria-hidden="true" />
                                <span className="epay__storeText">
                                  <span className="epay__storeLabel">Download on the</span>
                                  <span className="epay__storeName">App Store</span>
                                </span>
                              </a>
              
                              <a
                                className="epay__store epay__store--google"
                                href="#download-android"
                                aria-label="Get it on Google Play"
                              >
                                <FaGooglePlay className="epay__storeIcon" aria-hidden="true" />
                                <span className="epay__storeText">
                                  <span className="epay__storeLabel">Get it on</span>
                                  <span className="epay__storeName">Google Play</span>
                                </span>
                              </a>
                            </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}
