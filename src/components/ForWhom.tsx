export default function ForWhom() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Built for Freelancers Like You
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            FreeBoss is built for solo devs, designers, writers, marketers — anyone juggling projects and clients. No more switching between 5 different tools.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col items-start">
            <div className="rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-700">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Developers</h3>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                Track time per project, manage sprints, and generate invoices automatically.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-700">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Designers</h3>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                Organize design projects, track revisions, and manage client feedback in one place.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="rounded-2xl bg-white dark:bg-gray-900 p-8 ring-1 ring-gray-200 dark:ring-gray-700">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">Creators</h3>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                Streamline your content creation workflow and manage client relationships efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 