import Accordion from "../../../reusablesComponents/Accordion/Accordion";

export default function FaqPage() {
  const faqItems = [
    [
      {
        question: "How does Nova Crest simplify crypto trading?",
        answer:
          "Nova Crest provides seamless trading with secure execution, deep liquidity, and instant settlement for digital assets.",
      },
      {
        question: "What makes your DeFi solutions unique?",
        answer:
          "Our DeFi services enable permissionless lending, yield strategies, and liquidity management backed by smart contracts.",
      },
      {
        question: "How do coin transactions stay secure?",
        answer:
          "All transfers use blockchain verification, multi-signature wallets, and end-to-end encryption for maximum safety.",
      },
    ],
    [
      {
        question: "Can Nova Crest help launch my NFT project?",
        answer:
          "Yes, we design, mint, and launch NFT collections with smart contract integration and marketplace readiness.",
      },
      {
        question: "What is Web3 Social Media?",
        answer:
          "It’s a decentralized social platform where users own their content, data, and earn rewards for engagement.",
      },
      {
        question: "What does your Web3 consultancy offer?",
        answer:
          "We guide businesses through blockchain adoption, tokenomics design, and smart contract strategy to scale securely.",
      },
    ],
  ];

  return <Accordion items={faqItems} />;
}
