import {
  ClipboardDocumentListIcon,
  ClockIcon,
  DocumentTextIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Task + Project Management",
    description: "Organize your projects and tasks in one place. Track progress, set deadlines, and collaborate with clients seamlessly.",
    icon: ClipboardDocumentListIcon,
  },
  {
    name: "Time Tracking per Client",
    description: "Track time spent on each project and client. Generate detailed reports and never miss billing a minute.",
    icon: ClockIcon,
  },
  {
    name: "Invoicing System",
    description: "Create professional invoices with one click. Export to PDF and get paid faster with integrated payment tracking.",
    icon: DocumentTextIcon,
  },
  {
    name: "AI Proposal & Email Writer",
    description: "Let AI help you write winning proposals and professional emails. Save time and win more clients.",
    icon: SparklesIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            All-in-one freelance management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Stop juggling multiple tools. FreeBoss gives you everything you need to manage your freelance business in one place.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
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