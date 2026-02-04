import Accordion from "../../../reusablesComponents/Accordion/Accordion";

export default function ClientFaqs() {
  const faqItems = [
    [
      {
        question: "What types of businesses can benefit from your platform?",
        answer:
          "Our platform is designed for a wide range of financial and tech-driven businesses  including trading firms, fintech startups, Web3 companies, currency exchange houses, and developers building financial applications. Each segment gets tools optimized for its operational and compliance needs.",
      },
      {
        question: "How secure is your infrastructure for handling financial data?",
        answer:
          "Security is our top priority. We offer enterprise-grade encryption, KYC/AML compliance pipelines, secure APIs, and audited deployments to ensure data integrity and regulatory alignment across all services.",
      },
      {
        question: "Can startups and developers easily integrate your APIs?",
        answer:
          "Absolutely. Our system provides comprehensive REST and WebSocket APIs, developer-friendly sandboxes, and SDKs in TypeScript and Python  making it simple to build, test, and scale quickly.",
      },
      {
        question: "Do you support global and cross-border transactions?",
        answer:
          "Yes. We support multi-currency operations, real-time FX integrations, and cross-border payment flows with built-in compliance and monitoring, ideal for international fintechs and exchange houses.",
      },
      {
        question: "How scalable is your infrastructure as we grow?",
        answer:
          "Our architecture is microservice-based and API-first, allowing effortless scaling from small startups to large financial institutions  ensuring consistent performance, uptime, and regulatory readiness at every stage of growth.",
      },
    ],
  ];

  return <Accordion items={faqItems} heading="Frequently Asked Questions" />;
}
