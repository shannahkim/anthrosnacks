'use client';

import { useState } from 'react';

interface WaitlistFormProps {
  variant?: 'light' | 'dark';
}

export default function WaitlistForm({ variant = 'dark' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const isLight = variant === 'light';

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={`flex-1 px-6 py-4 border focus:outline-none font-light ${
            isLight
              ? 'bg-white border-gray-200 focus:border-black text-gray-900 placeholder-gray-400'
              : 'bg-white/10 border-white/20 focus:border-white text-white placeholder-white/50'
          }`}
        />
        <button
          type="submit"
          className={`px-8 py-4 font-light tracking-wide transition whitespace-nowrap ${
            isLight
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
        >
          {submitted ? '✓ Joined!' : 'Get 10% OFF'}
        </button>
      </form>
      {submitted && (
        <p className={`text-center mt-6 font-light ${
          isLight ? 'text-gray-600' : 'text-white/80'
        }`}>
          Thank you! Check your email for your 10% discount code.
        </p>
      )}
    </div>
  );
}
