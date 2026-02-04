
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-28 pt-16 bg-color pb-8 px-6 sm:px-10 tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section: Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Nova Services */}
          <div>
            <h4 className="text-lg mb-6 font-semibold">Nova Services</h4>
            <ul className="space-y-4 text-[15px]">
              {[
                { label: "Crypto Trading", href: "/services/crypto-trading" },
                { label: "Coin Transactions", href: "/services/coin-transactions" },
                { label: "Decentralized Finance (DeFi)", href: "/services/defi" },
                { label: "NFTs (Non-Fungible Tokens)", href: "/services/nfts" },
                { label: "Web3 Social Media", href: "/services/web3-social-media" },
                { label: "Consultancy in Web3 DApps", href: "/services/web3-consultancy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-500 inline-flex items-center transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline mr-1.5 h-[16px] w-[16px] shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg mb-6 font-semibold">Industries</h4>
            <ul className="space-y-4 text-[15px]">
              <li>
                <Link
                  href="/industries"
                  className="hover:text-gray-500 inline-flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline mr-1.5 h-[16px] w-[16px] shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Industries we serve
                </Link>
              </li>
            </ul>
          </div>

          {/* Nova Academy */}
          <div>
            <h4 className="text-lg mb-6 font-semibold">Nova Academy</h4>
            <ul className="space-y-4 text-[15px]">
              <li>
                <Link
                  href="/nova-academy"
                  className="hover:text-gray-500 inline-flex items-center transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline mr-1.5 h-[16px] w-[16px] shrink-0"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  Learn with Nova
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg mb-6 font-semibold">About Nova</h4>
            <ul className="space-y-4 text-[15px]">
              {[
                { label: "Our Company", href: "/about/company" },
                { label: "Trust & Transparency", href: "/about/trust" },
                { label: "Legal Overview", href: "/about/legal" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-gray-500 inline-flex items-center transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="inline mr-1.5 h-[16px] w-[16px] shrink-0"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-400" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
          {/* Newsletter */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h4 className="text-lg mb-4 font-semibold">Join our newsletter</h4>
            <div className="bg-white flex items-center px-3 py-2 rounded-full shadow-sm max-w-lg mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 outline-none bg-transparent pl-2 py-1 text-sm sm:text-[15px]"
              />
              <Button
                type="button"
                className="bg-[#111] text-white text-sm sm:text-[15px] font-medium rounded-full px-3 sm:px-5 py-2 hover:bg-black transition-all flex items-center gap-2"
              >
                <span className="block lg:hidden">✉️</span>
                <span className="hidden lg:block">Subscribe</span>
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Get the latest updates, articles, and resources weekly.
            </p>
          </div>

          {/* Certifications */}
          <div className="flex flex-row justify-center lg:justify-start gap-8 sm:gap-12 flex-wrap">
            <div className="text-center lg:text-left">
              <h1 className="text-lg mb-3 font-semibold">Certified by</h1>
              <div className="flex justify-center lg:justify-start gap-3">
                <Image src={"/soc.webp"} alt="soc" width={38} height={38} />
                <Image src={"/iso.webp"} alt="iso" width={38} height={38} />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-lg mb-3 font-semibold">Registered by</h1>
              <div className="flex justify-center lg:justify-start gap-3">
                <Image src={"/canada.webp"} alt="canada" width={38} height={38} />
                <Image src={"/fcis.svg"} alt="fcis" width={38} height={38} />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-slate-700 text-[13px] mt-8 text-center lg:text-left">
          © NovaCrest 2025, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
