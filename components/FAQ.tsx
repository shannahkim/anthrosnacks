'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes AnthroSnacks different?",
    answer: "We are committed to exceptional quality through carefully sourced organic ingredients and meticulous craftsmanship. Every product reflects our dedication to excellence."
  },
  {
    question: "Are your products certified organic?",
    answer: "Yes. All our products are certified organic, plant-based, and free from artificial additives or preservatives."
  },
  {
    question: "How do I join the waitlist?",
    answer: "Simply enter your email address in the waitlist form. You'll receive exclusive early access and 10% off your first order when we launch."
  },
  {
    question: "When will you launch?",
    answer: "We are finalizing our collection and will launch soon. Waitlist members will be notified first with exclusive access before our public launch."
  },
  {
    question: "Do you offer wholesale partnerships?",
    answer: "Yes, we work with select retail partners. Please contact us at hello@anthrosnacks.com for wholesale inquiries."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left flex justify-between items-start py-8 hover:opacity-70 transition group"
          >
            <span className="text-lg font-light text-gray-900 pr-8">
              {faq.question}
            </span>
            <span className="text-gray-400 text-xl flex-shrink-0 group-hover:text-gray-900 transition">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="pb-8 text-gray-600 leading-relaxed font-light">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
