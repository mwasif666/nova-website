"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FaqItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: FaqItem[][];
  heading?: string;
};

const Accordion: React.FC<AccordionProps> = ({
  items,
  heading = "What Our Clients Ask Most",
}) => {
  const [openIndex, setOpenIndex] = useState<string | null>("0");

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="md:mx-16 md:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="grid gap-6"
      >
        {/* Section Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="main-heading md:mb-10 flex justify-center text-center"
        >
          {heading}
        </motion.h1>

        {/* Accordion Columns */}
        {items.map((col, colIndex) => (
          <motion.div
            key={colIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: colIndex * 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {col.map((item, idx) => {
              const indexKey = `${colIndex}-${idx}`;
              const isOpen = openIndex === indexKey;

              return (
                <motion.div
                  key={indexKey}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-md rounded-lg overflow-hidden transition-all"
                >
                  {/* Accordion Header */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(indexKey)}
                    className="accordion-button cursor-pointer w-full text-lg font-medium text-left p-6 text-slate-900 flex items-center"
                  >
                    <span className="mr-4 text-md md:text-xl">
                      {item.question}
                    </span>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-[15px] h-[15px] fill-current ml-auto shrink-0"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                      <path
                        style={{ display: isOpen ? "none" : "block" }}
                        d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                      />
                    </motion.svg>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 px-6 ">
                          <p className="text-md text-[#4B5563] leading-relaxed ">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Accordion;
