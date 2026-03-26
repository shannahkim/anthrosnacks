'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes AnthroSnacks different?",
    answer: "We're all about premium quality ingredients with zero compromises. Every snack is made from organic, natural ingredients that actually taste good. No cap."
  },
  {
    question: "Are your snacks really healthy?",
    answer: "100%. We're certified organic, gluten-free, vegan, and use no artificial flavors. Just real ingredients that fuel your body and satisfy your cravings."
  },
  {
    question: "How do I join the waitlist?",
    answer: "Just drop your email in the waitlist form! You'll get 10% off when we launch, plus early access to all our flavors."
  },
  {
    question: "When will you launch?",
    answer: "Soon! We're perfecting every detail to make sure our snacks are absolutely *chef's kiss*. Join the waitlist to be the first to know."
  },
  {
    question: "Do you offer wholesale?",
    answer: "Yes! Shoot us an email at hello@anthrosnacks.com and we'll hook you up with all the details."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 pb-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left flex justify-between items-center py-4 hover:text-orange-600 transition"
          >
            <span className="text-lg font-semibold text-gray-900">
              {faq.question}
            </span>
            <span className="text-2xl text-orange-600">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="pb-4 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
