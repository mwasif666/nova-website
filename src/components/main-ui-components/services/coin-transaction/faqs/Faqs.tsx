import Accordion from "@/components/reusablesComponents/Accordion/Accordion";

export default function CoinTransactionFaq() {
  const faqItems = [
    [
      {
        question: "How long does a transaction take to complete?",
        answer:
          "Most Nova transactions confirm within seconds through blockchain verification. However, network congestion may slightly delay confirmation times for certain coins.",
      },
      {
        question: "What cryptocurrencies can I send using Nova?",
        answer:
          "Nova supports 200+ cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Solana (SOL), and many more  with new coins added frequently.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No hidden fees  Nova automatically finds and displays the best possible network fee route before every transaction, ensuring full transparency.",
      },
    ],
    [
      {
        question: "Can I reverse a crypto transaction once sent?",
        answer:
          "Blockchain transactions are irreversible once confirmed. However, Nova provides multiple confirmation prompts and transaction summaries before you proceed.",
      },
      {
        question: "Is my data and wallet safe with Nova?",
        answer:
          "Absolutely. Nova uses decentralized, non-custodial architecture with end-to-end encryption  meaning your assets always stay under your control.",
      },
      {
        question: "Does Nova support cross-chain transactions?",
        answer:
          "Yes, Nova enables seamless cross-chain transactions through integrated bridges, allowing you to send crypto across different networks easily and securely.",
      },
    ],
  ];

  return (
    <Accordion
      heading="Coin Transaction FAQs"
      items={faqItems}
    />
  );
}
