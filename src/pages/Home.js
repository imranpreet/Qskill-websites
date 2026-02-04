import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-slate-900 via-indigo-900 to-violet-900 bg-clip-text text-transparent">
            Qskill Tools
          </h1>
          <p className="text-slate-600 text-2xl md:text-3xl max-w-3xl mx-auto font-medium">
            Your All-in-One Web Utilities Platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Translator Card */}
          <Link to="/translator" className="group">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-200/50 hover:border-indigo-400 hover:scale-105 h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h2 className="text-4xl font-black mb-4 text-slate-900">Text Translator</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Translate text between 100+ languages instantly with AI-powered precision. Perfect for global communication.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg text-sm font-bold">100+ Languages</span>
                <span className="px-4 py-2 bg-violet-100 text-violet-700 rounded-lg text-sm font-bold">AI-Powered</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-bold">Instant</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-600 font-bold group-hover:gap-4 transition-all">
                <span className="text-lg">Launch Translator</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Random String Generator Card */}
          <Link to="/random-string" className="group">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-200/50 hover:border-purple-400 hover:scale-105 h-full">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h2 className="text-4xl font-black mb-4 text-slate-900">Random String Generator</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Generate secure random strings with customizable options. Ideal for passwords, tokens, and unique identifiers.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-bold">Secure</span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-lg text-sm font-bold">Customizable</span>
                <span className="px-4 py-2 bg-violet-100 text-violet-700 rounded-lg text-sm font-bold">Copy & Use</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600 font-bold group-hover:gap-4 transition-all">
                <span className="text-lg">Launch Generator</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-slate-600 text-lg font-medium">
            Choose a tool to get started 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
