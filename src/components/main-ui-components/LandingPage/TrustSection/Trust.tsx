import Image from "next/image";
import React from "react";

export default function Trust() {
  return (
    <section className=" max-w-7xl mx-auto px-6 py-16 mt-16">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold ">
          Trusted by Innovators
        </h2>
        <p className="mt-2 text-color">Backed by leaders. Built for growth.</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Feature 1 - Compliance */}
        <div className="flex flex-col items-center text-center">
          {/* Shield + Check */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-[#1e597c] mb-4"
            fill="none"
            viewBox="0 0 24 25"
            strokeWidth={1.8}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2l7 4v6c0 5.25-3.75 10.25-7 12-3.25-1.75-7-6.75-7-12V6l7-4z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900">
            Compliance built-in
          </h3>
          <p className="mt-2 text-color">
            Secure, regulation-ready solutions that keep your business protected
            at every step.
          </p>
        </div>

        {/* Feature 2 - Tech */}
        <div className="flex flex-col items-center text-center">
          {/* Circuit Board / Network */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-[#1e597c] mb-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M8.757 15.243l-2.121 2.121M8.757 8.757L6.636 6.636M15.243 15.243l2.121 2.121"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900">
            Tech at the core
          </h3>
          <p className="mt-2 text-color">
            Harness the latest in blockchain and digital finance,scalable and
            always future-ready.
          </p>
        </div>

        {/* Feature 3 - Regional Expertise */}
        <div className="flex flex-col items-center text-center">
          {/* Globe / Map Pin */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-[#1e597c] mb-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 12h20M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6-4-10s1.5-7.5 4-10z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900">
            Born in Asia, built for growth
          </h3>
          <p className="mt-2 text-color">
            Tailored for fast-moving markets with local expertise and global
            standards.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 place-items-center   sm:flex justify-center items-center gap-4 mt-16">
          <Image
            src={"/TrustSection/adgm.png"}
            width={100}
            height={80}
            alt="adgm"
          />
          <Image
            src={"/TrustSection/vara.png"}
            width={100}
            height={80}
            alt="adgm"
          />

          <Image
            src={"/TrustSection/masak.svg"}
            width={40}
            height={40}
            alt="adgm"
          />
          <Image
            src={"/TrustSection/cbuae.svg"}
            width={40}
            height={40}
            alt="adgm"
          />
          <Image
            src={"/TrustSection/fcis.svg"}
            width={40}
            height={40}
            className="col-span-2"
            alt="adgm"
          />
        </div>
      </div>
    </section>
  );
}
