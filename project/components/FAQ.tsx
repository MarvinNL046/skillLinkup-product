"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

interface FAQItemProps {
  item: {
    question: string;
    answer: JSX.Element;
  };
  isOpen: boolean;
  setFaqSelected: () => void;
}

const faqList = [
  {
    question: "How does SkillLinkup work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        SkillLinkup connects professionals based on skills, interests, and career goals. Create a profile, discover people in your field, and start meaningful conversations. Our platform helps you find mentors, collaborators, or new opportunities.
      </div>
    ),
  },
  {
    question: "Is there a free plan available?",
    answer: (
      <p>
        Yes! You can join SkillLinkup for free and access basic features. For advanced networking tools and unlimited messaging, check out our Pro plan.
      </p>
    ),
  },
  {
    question: "How can I get support?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Our support team is available 24/7 via email at support@skilllinkup.com. Pro members get priority support for faster response times.
      </div>
    ),
  },
];

const Item = ({ item, isOpen, setFaqSelected }: FAQItemProps) => {
  const accordion = useRef(null);
  const { question, answer } = item;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFaqSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`flex-1 text-base-content ${isOpen ? "text-primary font-semibold" : ""}`}>
          <h3 className="inline">{question}</h3>
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isOpen && "rotate-180"}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen && "rotate-180 hidden"}`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  const [faqSelected, setFaqSelected] = useState<number>(0);

  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item
              key={i}
              item={item}
              isOpen={faqSelected === i}
              setFaqSelected={() => setFaqSelected(i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;