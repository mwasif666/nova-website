import Accordion from "@/components/reusablesComponents/Accordion/Accordion";

export default function FaqPage() {
  const faqItems = [
    [
      {
        question: "What makes Nova’s Web3 Social Media different?",
        answer:
          "Unlike traditional social media, Nova gives users full ownership of their content, data, and rewards. No algorithms or centralized control — your voice and value stay yours.",
      },
      {
        question: "How do users earn on Nova Social?",
        answer:
          "Every post, like, and share is powered by smart contracts. Users earn on-chain tokens for engagement and meaningful contributions to the community.",
      },
      {
        question: "Is Nova Social secure and private?",
        answer:
          "Yes. Nova uses wallet-based login, encrypted data, and decentralized storage (like IPFS), ensuring complete privacy and user control — no centralized servers.",
      },
    ],
    [
      {
        question: "Can I move from traditional social media to Nova?",
        answer:
          "Absolutely. Nova allows users and creators to bring their existing audiences into a decentralized ecosystem — with full transparency and ownership.",
      },
      {
        question: "Why choose Web3 social media over traditional platforms?",
        answer:
          "Web3 social platforms empower users, not corporations. With Nova, you own your data, earn from engagement, and shape your network’s future through community governance.",
      },
    ],
  ];

  return <Accordion items={faqItems} />;
}
