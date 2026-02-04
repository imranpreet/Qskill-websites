import React from 'react';
import { Link } from 'react-router-dom';
import Translator from '../components/Translator';

const TranslatorPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl shadow-md border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-bold text-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <Link to="/random-string" className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
              Random String Generator
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Translator Component with padding for fixed navbar */}
      <div className="pt-20">
        <Translator />
      </div>
    </div>
  );
};

export default TranslatorPage;
