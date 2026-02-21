import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function RedotPayHero() {
  return (
    <section className="rp-hero rp-hero--plax" aria-label="Hero banner">
      <div className="rp-hero__bg" />

      <div className="rp-hero__container">
        <div className="rp-hero__row">
          {/* LEFT COL */}
          <div className="rp-hero__col rp-hero__col--left">
            <div className="rp-hero__content">
              <p className="rp-hero__eyebrow">
                Nova app for everyday crypto spending
              </p>

              <h1 className="rp-hero__title">
                Spend Crypto
                <br />
                Like Everyday Money
              </h1>

              <p className="rp-hero__desc">
                Nova turns USDT and other crypto into real-world payments. Your
                balance converts to local currency in real time, so you can shop
                online, pay bills, travel, or withdraw cash at ATMs.
              </p>

              <div className="rp-hero__actions">
                <a
                  className="rp-hero__store rp-hero__store--apple"
                  href="#download-ios"
                  aria-label="Download on the App Store"
                >
                  <FaApple className="rp-hero__storeIcon" aria-hidden="true" />
                  <span className="rp-hero__storeText">
                    <span className="rp-hero__storeLabel">Download on the</span>
                    <span className="rp-hero__storeName">App Store</span>
                  </span>
                </a>

                <a
                  className="rp-hero__store rp-hero__store--google"
                  href="#download-android"
                  aria-label="Get it on Google Play"
                >
                  <FaGooglePlay
                    className="rp-hero__storeIcon"
                    aria-hidden="true"
                  />
                  <span className="rp-hero__storeText">
                    <span className="rp-hero__storeLabel">Get it on</span>
                    <span className="rp-hero__storeName">Google Play</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COL */}
          <div className="rp-hero__col rp-hero__col--right" aria-hidden="true">
            <div className="rp-hero__visual">
              <img
                className="rp-hero__hand"
                src="https://res.cloudinary.com/dmdfjexed/image/upload/v1771624915/WhatsApp_Image_2026-02-20_at_14.54.02_cmk0oc.png"
                alt=""
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
