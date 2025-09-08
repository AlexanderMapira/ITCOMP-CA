'use client';

import React from 'react';

const GoogleFormButton = () => {
  // Replace this URL with your actual Google Form URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/viewform";

  const handleButtonClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-6">Start Your Project</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Click the button below to fill out our project brief form and get started with your project.
      </p>
      <button
        onClick={handleButtonClick}
        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
      >
        Fill Out Project Brief
      </button>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        You'll be redirected to Google Forms to complete your submission.
      </p>
    </div>
  );
};

export default GoogleFormButton;
