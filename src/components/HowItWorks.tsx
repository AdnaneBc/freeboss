import {
  ClipboardDocumentListIcon,
  ClockIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    name: "Add your tasks and clients",
    description: "Start by adding your projects and clients. Set up your workspace in minutes.",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Track your time with one click",
    description: "Simple one-click time tracking. Never miss billing a minute of your work.",
    icon: ClockIcon,
  },
  {
    name: "Generate invoices and proposals instantly",
    description: "Create professional invoices and proposals with AI assistance. Get paid faster.",
    icon: DocumentTextIcon,
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">How it works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to manage your freelance business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Get started in minutes. No complex setup required.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 