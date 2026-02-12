import React, { useState } from 'react';
import { useNewsletter } from '../hooks/useApi';

const NewsletterSignup = () => {
  const { subscribe } = useNewsletter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address');
      setMessageType('error');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      await subscribe(email);
      setMessage('Thank you for subscribing! Check your email for confirmation.');
      setMessageType('success');
      setEmail('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to subscribe. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with My Latest Work
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Get notified about new blog posts, project updates, and insights on technology and development.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {message && (
            <div className={`mt-4 p-3 rounded-lg ${
              messageType === 'success'
                ? 'bg-green-100 text-green-800 border border-green-200'
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}
        </form>

        <div className="mt-8 text-blue-100 text-sm">
          <p>Join 100+ developers who stay ahead of the curve. No spam, unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;