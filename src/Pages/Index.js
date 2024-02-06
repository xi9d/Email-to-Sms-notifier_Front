import React, { useState } from 'react';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your subscription logic here
    console.log(email, countryCode);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8">Email to SMS Notifier</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Standard Subscription Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Standard Subscription</h2>
              <p className="text-gray-600 mb-4">Basic features included</p>
              <ul className="text-gray-600 mb-4">
                <li>Unlimited email notifications</li>
                <li>Limited SMS notifications</li>
                <li>24/7 support</li>
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Get Started
              </button>
            </div>
          </div>
          {/* Premium Subscription Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Premium Subscription</h2>
              <p className="text-gray-600 mb-4">Advanced features included</p>
              <ul className="text-gray-600 mb-4">
                <li>Unlimited email notifications</li>
                <li>Unlimited SMS notifications</li>
                <li>Priority support</li>
                <li>Customization options</li>
              </ul>
              <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* Subscription Form */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe for Updates</h2>
          <form onSubmit={handleSubmit} className="flex items-center justify-center">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {/* Country Code Selector */}
            <select
              className="py-2 px-4 mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={countryCode}
              onChange={handleCountryCodeChange}
            >
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+91">+91 (India)</option>
              {/* Add more country codes as needed */}
            </select>
            {/* Phone Number Input */}
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="py-2 px-4 mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              // Add state and event handler for phone number input if needed
              required
            />
            {/* Subscribe Button */}
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
