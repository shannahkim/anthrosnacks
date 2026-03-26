'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to your backend/email service
    console.log('Email submitted:', email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-orange-600 focus:outline-none text-gray-900"
        />
        <button
          type="submit"
          className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl whitespace-nowrap"
        >
          {submitted ? '✓ Joined!' : 'Join Waitlist'}
        </button>
      </form>
      {submitted && (
        <p className="text-center mt-4 text-green-600 font-semibold animate-bounce">
          You're on the list! Check your email 📧
        </p>
      )}
    </div>
  );
}
