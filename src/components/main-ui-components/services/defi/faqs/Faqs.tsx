import Accordion from "@/components/reusablesComponents/Accordion/Accordion";


export default function FaqPage() {
  const faqItems = [
    [
      {
        question: "What is Decentralized Finance (DeFi)?",
        answer:
          "DeFi (Decentralized Finance) is a blockchain-based financial ecosystem that removes traditional intermediaries such as banks or brokers. It allows users to lend, borrow, earn interest, and trade digital assets through transparent, automated smart contracts  ensuring full control, security, and global accessibility.",
      },
      {
        question: "How does Nova’s DeFi platform work?",
        answer:
          "Nova connects users directly to decentralized liquidity pools and protocols using secure, audited smart contracts. Once you connect your wallet, you can start lending, staking, or borrowing instantly  all transactions remain under your control and fully visible on-chain.",
      },
      {
        question: "Is my crypto safe with Nova DeFi?",
        answer:
          "Yes. Nova’s DeFi system is completely non-custodial  you always retain control of your assets and private keys. All transactions are governed by independently audited smart contracts that ensure full security and compliance with decentralized finance standards.",
      },
    ],
    [
      {
        question: "What can I earn or do through Nova DeFi?",
        answer:
          "With Nova DeFi, you can earn passive income by staking your crypto, providing liquidity, or lending assets. You can also borrow against your holdings or trade digital assets seamlessly  all through one unified and user-friendly interface.",
      },
      {
        question: "Do I need experience to use DeFi on Nova?",
        answer:
          "No  Nova is built for both beginners and experienced traders. Our intuitive interface simplifies complex DeFi actions into easy steps, and in-app guidance helps users safely navigate lending, staking, and trading with confidence.",
      },
    ],
  ];

  return <Accordion  items={faqItems} />;
}
