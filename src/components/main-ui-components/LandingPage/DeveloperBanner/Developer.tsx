"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { SiTypescript, SiPython } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeSnippet = { code: string; language: string };
type DevSectionProps = {
  heading?: string;
  description?: string;
  buttonText?: string;
  codeSnippets?: Record<string, CodeSnippet>;
};

// Default Nova Crest code snippets
const defaultCodeSnippets: Record<string, CodeSnippet> = {
  typescript: {
    language: "typescript",
    code: `import { NovaCrest } from "@novacrest/ts-sdk";
import { TransferPeerType } from "@novacrest/ts-sdk/types";

const novacrest = new NovaCrest("api-key", "novacrest_secret.key");
// create vault
const vault = await novacrest.createVaultAccount("QuickStartVaultAccount");
// create tx
const tx = await novacrest.createTransaction({
  assetId: "BTC",
  source: { type: TransferPeerType.VAULT_ACCOUNT, id: "1" },
  destination: { type: TransferPeerType.VAULT_ACCOUNT, id: "2" }
});
`,
  },

  python: {
    language: "python",
    code: `from novacrest_sdk import NovaCrestSDK, TransferPeerPath, VAULT_ACCOUNT

apiSecret = open('novacrest_secret.key', 'r').read() apiKey = 'api-key'
novacrest = NovaCrestSDK(apiSecret, apiKey)
# create vault
vault = novacrest.create_vault_account("QuickStartVaultAccount")
# create tx
tx = novacrest.create_transaction(
    assetId="BTC",
    source=TransferPeerPath(VAULT_ACCOUNT, 1),
    destination=TransferPeerPath(VAULT_ACCOUNT, 2)
)`,
  },

  java: {
    language: "java",
    code: `import com.novacrest.sdk.NovaCrestSDK;
import com.novacrest.sdk.types.*;

NovaCrestSDK novacrest = new NovaCrestSDK("api-key", "novacrest_secret.key");
// create vault
VaultAccount vault = novacrest.createVaultAccount("QuickStartVaultAccount");
// create tx
TransactionResponse tx = novacrest.createTransaction(
    new TransactionRequest("BTC", 
        new TransferPeerPath(PeerType.VAULT_ACCOUNT, "1"),
        new TransferPeerPath(PeerType.VAULT_ACCOUNT, "2"))
);`,
  },
};

export default function DevSection({
  heading = "Create Secure Digital Asset Solutions With NOVA Crest APIs",
  description = "Explore the Nova Crest platform to build with security and scale without limits using our APIs, SDKs, guides, and tutorials.",
  buttonText = "Explore API docs",
  codeSnippets = defaultCodeSnippets,
}: DevSectionProps) {
  const [activeTab, setActiveTab] = useState<"typescript" | "python" | "java">(
    "typescript",
  );

  const tabs = [
    { id: "java", label: "Java", icon: <RiJavaLine size={16} /> },
    { id: "typescript", label: "TypeScript", icon: <SiTypescript size={16} /> },
    { id: "python", label: "Python", icon: <SiPython size={16} /> },
  ] as const;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-10 sm:mt-16 md:mt-20 bg-[#0a1630] text-white py-10 sm:py-10 md:py-10 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-6 md:mt-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-tight mb-4">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 my-6 sm:my-8">
            {description}
          </p>
          <Button
            variant="secondary"
            showArrow
            className="px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base md:text-lg"
          >
            {buttonText}
          </Button>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden md:block relative bg-[#111c3d] rounded-xl shadow-lg p-3 sm:p-4 overflow-x-auto"
        >
          {/* Glowing border animation */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(139,92,246,0)",
                "0 0 15px rgba(139,92,246,0.6)",
                "0 0 0px rgba(139,92,246,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-xl pointer-events-none"
          />

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 relative z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === tab.id
                    ? "bg-[#1c2a52] text-white"
                    : "bg-transparent text-gray-400 hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code block */}
          <div className="overflow-x-auto relative z-10">
            <SyntaxHighlighter
              language={codeSnippets[activeTab].language}
              style={oneDark}
              wrapLines={true}
              customStyle={{
                background: "#0a1328",
                borderRadius: "0.5rem",
                fontSize: "0.8rem",
                padding: "1rem",
                minWidth: "100%",
              }}
            >
              {codeSnippets[activeTab].code}
            </SyntaxHighlighter>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
