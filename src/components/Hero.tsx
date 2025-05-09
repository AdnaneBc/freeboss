import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-16 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-500/20">
                Coming Soon
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Manage Your Freelance Life Like a Boss
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Tasks. Time. Invoices. AI Proposals. One simple dashboard.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
            <Link
              href="#waitlist"
              className="w-full sm:w-auto rounded-md bg-indigo-600 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join the Waitlist
            </Link>
            <Link
              href="https://github.com/yourusername/freeboss"
              className="w-full sm:w-auto text-center sm:text-left text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Follow the Build <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="/dashboard-preview.svg"
              alt="FreeBoss Dashboard Preview"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 