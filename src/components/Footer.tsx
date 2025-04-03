import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <h2 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">FreeBoss</h2>
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
              Making freelance management simple and efficient.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/yourusername/freeboss" className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                      GitHub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 dark:border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} FreeBoss. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 