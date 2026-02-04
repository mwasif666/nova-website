import Accordion from "@/components/reusablesComponents/Accordion/Accordion";


export default function FaqPage() {
  const faqItems = [
    [
      {
        question: "How do I start trading on Nova?",
        answer:
          "Simply connect your Web3 wallet, verify your account, and fund it with your preferred cryptocurrency. You can then start trading instantly with real-time market data.",
      },
      {
        question: "Is Nova safe for crypto trading?",
        answer:
          "Yes  Nova uses advanced encryption, non-custodial wallet integration, and blockchain-level transparency to ensure your assets remain fully secure.",
      },
      {
        question: "What cryptocurrencies can I trade on Nova?",
        answer:
          "Nova supports all major digital assets including Bitcoin (BTC), Ethereum (ETH), and trending altcoins  with new listings added regularly based on market demand.",
      },
    ],
    [
      {
        question: "Are there any trading fees?",
        answer:
          "Nova offers competitive, transparent fees with zero hidden charges. A small percentage per transaction is displayed clearly before trade confirmation.",
      },
      {
        question: "Can I access Nova on mobile?",
        answer:
          "Absolutely  Nova’s trading dashboard is fully responsive and optimized for all devices, allowing you to monitor and trade anywhere, anytime.",
      },
    ],
  ];

  return <Accordion heading="Frequently Asked Questions" items={faqItems} />;
}
