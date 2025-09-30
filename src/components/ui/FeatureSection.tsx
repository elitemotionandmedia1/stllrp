"use client";

import React from 'react';
import Image from 'next/image';

export const FeatureSection = () => {
  const features = [
    {
      title: 'AI-Powered Automation',
      description: 'Leverage advanced artificial intelligence to automate complex business processes and workflows.',
      icon: '🤖'
    },
    {
      title: 'Smart Integration',
      description: 'Seamlessly integrate with your existing tools and systems for enhanced productivity.',
      icon: '🔄'
    },
    {
      title: 'Real-time Analytics',
      description: 'Get instant insights and analytics to make data-driven decisions.',
      icon: '📊'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600">
            Transform your business with our cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};