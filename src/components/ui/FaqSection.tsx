"use client";

import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive suite of AI and automation solutions including custom AI agents, workflow optimization, and proposal automation.'
    },
    {
      question: 'How can I get started?',
      answer: 'You can get started by scheduling a consultation with our team to discuss your specific needs and requirements.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including technology, healthcare, finance, and manufacturing.'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;