import React from 'react';
import { Link } from 'react-router-dom';
import RandomStringGenerator from '../components/RandomStringGenerator';

const RandomStringPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold text-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <Link to="/translator" className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-6 py-2 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
              Text Translator
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Random String Generator Component with padding for fixed navbar */}
      <div className="pt-20">
        <RandomStringGenerator />
      </div>
    </div>
  );
};

export default RandomStringPage;
