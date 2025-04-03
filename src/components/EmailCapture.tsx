'use client';

import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // TODO: Replace with actual Supabase integration
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div id="waitlist" className="bg-indigo-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Be the first to try FreeBoss
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
            Join our waitlist to get early access and exclusive features. We'll notify you when we launch.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 flex max-w-md gap-x-4 mx-auto">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-50"
            >
              {status === 'loading' ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </form>
          {status === 'success' && (
            <p className="mt-4 text-sm text-indigo-100">
              Thanks for joining! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-200">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 