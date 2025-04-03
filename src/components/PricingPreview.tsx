import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect to get started as a solo freelancer.',
    features: ['Unlimited tasks', 'Basic time tracking', '1 invoice/month'],
    href: '/pricing',
  },
  {
    name: 'Pro',
    price: 9,
    description: 'Power tools for serious freelancers.',
    features: ['Unlimited time logs', 'Unlimited invoices', 'AI proposal writer'],
    href: '/pricing',
    featured: true,
  },
  {
    name: 'Team',
    price: 19,
    description: 'For small freelance teams or agencies.',
    features: ['Multiple user access', 'Team collaboration', 'Shared billing'],
    href: '/pricing',
  },
];

export default function PricingPreview() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Start free. Upgrade when you&apos;re ready to boss up.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-8 sm:gap-y-10 lg:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl bg-gray-800 p-8 sm:p-10 shadow-sm ring-1 ring-gray-700 transition-all duration-300 hover:shadow-md ${
                tier.featured ? 'ring-2 ring-indigo-500 shadow-lg hover:shadow-xl' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={`text-lg font-semibold leading-8 ${
                      tier.featured ? 'text-indigo-400' : 'text-white'
                    }`}
                  >
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    ${tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">
                    {tier.name === 'Team' ? '/user' : ''}/month
                  </span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={tier.href}
                className={`mt-8 block rounded-md px-4 py-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 ${
                  tier.featured
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                }`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="text-sm font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
          >
            View detailed pricing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 