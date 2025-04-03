export default function WhyChoose() {
  const features = [
    {
      emoji: '🎯',
      title: 'Built for Freelancers',
      description: 'Not bloated project tools. Just what you need.',
    },
    {
      emoji: '⏱️',
      title: 'Task & Time in One',
      description: 'One dashboard for all your workflow.',
    },
    {
      emoji: '🧠',
      title: 'AI Proposal Writer',
      description: 'Write client-ready proposals in seconds.',
    },
    {
      emoji: '📄',
      title: 'Smart Invoices',
      description: 'Create and export invoices with one click.',
    },
    {
      emoji: '📊',
      title: 'Simple & Fast',
      description: 'Minimalist UI that doesn&apos;t slow you down.',
    },
    {
      emoji: '💸',
      title: 'Fair Pricing',
      description: "Start free, upgrade only when you're ready.",
    },
  ];

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Choose FreeBoss?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            The all-in-one dashboard for freelancers to manage tasks, track time, generate invoices, and use AI to write proposals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col rounded-2xl bg-gray-800 p-8 shadow-sm ring-1 ring-gray-700 transition-all duration-300 hover:shadow-md"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <span className="text-2xl">{feature.emoji}</span>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 