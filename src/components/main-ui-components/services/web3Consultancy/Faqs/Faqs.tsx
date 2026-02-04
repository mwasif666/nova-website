import Accordion from "@/components/reusablesComponents/Accordion/Accordion";

export default function FaqPage() {
  const faqItems = [
    [
      {
        question: "Who can benefit from Nova’s Web3 consultancy?",
        answer:
          "Any business — from startups to enterprises — can use Web3 to scale securely. Nova helps you integrate blockchain, DeFi, or DAOs into your existing model.",
      },
      {
        question: "Do I need blockchain knowledge to get started?",
        answer:
          "No prior knowledge needed. Our experts guide you through every step, explaining strategy and tools in simple terms.",
      },
      {
        question: "How long does a Web3 consultancy project take?",
        answer:
          "Initial insights are delivered within 1–2 weeks. Full implementation typically takes 2–3 months, depending on complexity.",
      },
    ],
    [
      {
        question: "Can Nova work with our existing blockchain team?",
        answer:
          "Yes. Nova collaborates with your developers to improve tokenomics, strategy, and compliance alignment.",
      },
      {
        question: "How does Nova ensure project security?",
        answer:
          "We conduct audits, risk reviews, and compliance checks to protect your assets and maintain community trust.",
      },
    ],
  ];

  return <Accordion items={faqItems} />;
}
