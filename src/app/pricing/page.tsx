'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const tiers = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect to get started as a solo freelancer.',
    features: [
      'Unlimited tasks',
      'Basic time tracking',
      '1 invoice/month',
      'Project dashboard (limited)',
    ],
    cta: 'Get Started',
    href: '#',
    featured: false,
  },
  {
    name: 'Pro',
    price: 9,
    description: 'Power tools for serious freelancers.',
    features: [
      'Unlimited time logs & tasks',
      'Unlimited invoices',
      'AI proposal & email writer',
      'Exportable reports',
    ],
    cta: 'Get Started',
    href: '#',
    featured: true,
  },
  {
    name: 'Team',
    price: 19,
    description: 'For small freelance teams or agencies.',
    features: [
      'Everything in Pro',
      'Multiple user access',
      'Team collaboration features (coming soon)',
      'Shared billing',
    ],
    cta: 'Get Started',
    href: '#',
    featured: false,
  },
];

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'Is there a free trial for paid plans?',
    answer: 'Yes, we offer a 14-day free trial for both Pro and Team plans. No credit card required.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
  },
  {
    question: 'How does the AI proposal writer work?',
    answer: 'Our AI proposal writer analyzes your project requirements and creates professional, customized proposals in minutes. It learns from your past successful proposals and adapts to your writing style.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. You&apos;ll continue to have access to your plan until the end of your current billing period.',
  },
  {
    question: 'Do you offer annual billing discounts?',
    answer: 'Yes! We offer a 20% discount when you pay annually. This applies to both Pro and Team plans.',
  },
  {
    question: 'What happens to my data if I downgrade to the Free plan?',
    answer: 'Your data remains intact when downgrading. However, some features will become limited based on the Free plan restrictions.',
  },
  {
    question: 'Is there a limit to the number of team members in the Team plan?',
    answer: 'The Team plan supports up to 10 team members. For larger teams, please contact our sales team for custom enterprise solutions.',
  },
];

export default function PricingPage() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Simple pricing for freelancers.
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Start free. Upgrade when You&apos;re ready to boss up.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-8 sm:gap-y-10 lg:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 sm:p-10 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:shadow-md ${
                tier.featured ? 'ring-2 ring-indigo-600 shadow-lg hover:shadow-xl' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h2
                    className={`text-lg font-semibold leading-8 ${
                      tier.featured ? 'text-indigo-600' : 'text-gray-900'
                    }`}
                  >
                    {tier.name}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    {tier.name === 'Team' ? '/user' : ''}/month
                  </span>
                </p>
                <ul role="list" className="mt-8 space-y-4 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                className={`mt-8 block rounded-md px-4 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 ${
                  tier.featured
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 focus-visible:outline-indigo-600'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-32 max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-start justify-between text-left text-gray-900 hover:text-indigo-600 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {openFaqs.includes(index) ? (
                        <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                </dt>
                <dd
                  className={`mt-2 pr-12 transition-all duration-300 ease-in-out ${
                    openFaqs.includes(index)
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 