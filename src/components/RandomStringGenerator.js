import React, { useState, useCallback, useEffect } from 'react';

const RandomStringGenerator = () => {
  const [randomString, setRandomString] = useState('');
  const [length, setLength] = useState(10);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);

  const generateRandomString = useCallback(() => {
    let characters = '';
    let result = '';
    
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSpecialChars) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    if (characters === '') {
      characters = 'abcdefghijklmnopqrstuvwxyz';
    }
    
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    setRandomString(result);
  }, [length, includeNumbers, includeSpecialChars, includeUppercase, includeLowercase]);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(randomString);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl p-10 max-w-2xl w-full shadow-2xl">
        <h1 className="text-5xl font-black text-center mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Random String Generator
        </h1>
        <p className="text-center text-slate-600 mb-8 text-lg">
          Generate secure random strings with custom options
        </p>
        
        <div className="flex gap-3 mb-8 items-center">
          <div className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 font-mono text-xl break-all min-h-[80px] flex items-center text-slate-800 font-semibold">
            {randomString || 'Click Generate to create a random string'}
          </div>
          <button 
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-2xl px-6 py-5 font-bold text-lg transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap" 
            onClick={copyToClipboard} 
            disabled={!randomString}
          >
            📋 Copy
          </button>
        </div>

        <div className="mb-8">
          <label htmlFor="length" className="block mb-3 text-slate-800 font-bold text-lg">
            Length: <span className="text-purple-600 text-2xl ml-2">{length}</span>
          </label>
          <input
            type="range"
            id="length"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-slate-800 font-bold text-lg mb-4">Include:</h3>
          <div className="flex flex-col gap-3">
            {[
              { state: includeLowercase, setState: setIncludeLowercase, label: 'Lowercase (a-z)' },
              { state: includeUppercase, setState: setIncludeUppercase, label: 'Uppercase (A-Z)' },
              { state: includeNumbers, setState: setIncludeNumbers, label: 'Numbers (0-9)' },
              { state: includeSpecialChars, setState: setIncludeSpecialChars, label: 'Special Characters (!@#$%)' }
            ].map((option, index) => (
              <label key={index} className="flex items-center cursor-pointer text-slate-700 hover:text-purple-600 transition-colors">
                <input
                  type="checkbox"
                  checked={option.state}
                  onChange={(e) => option.setState(e.target.checked)}
                  className="w-6 h-6 mr-3 cursor-pointer accent-purple-600"
                />
                <span className="text-lg font-medium">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button 
          className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white rounded-2xl py-5 text-xl font-black transition-all hover:scale-[1.02] shadow-xl flex items-center justify-center gap-3" 
          onClick={generateRandomString}
        >
          <span className="text-2xl">🔄</span>
          Generate Random String
        </button>

        <div className="mt-8 bg-gradient-to-br from-slate-50 to-indigo-50 rounded-2xl p-6 border-2 border-slate-200">
          <h3 className="text-slate-800 font-black text-lg mb-4 flex items-center gap-2">
            <span className="text-2xl">⚛️</span>
            React Hooks Used:
          </h3>
          <ul className="space-y-2">
            <li className="text-slate-700 flex items-start gap-2">
              <span className="text-purple-600 font-bold mt-1">✓</span>
              <div>
                <strong className="text-purple-600">useState:</strong> Managing component state (string, length, options)
              </div>
            </li>
            <li className="text-slate-700 flex items-start gap-2">
              <span className="text-purple-600 font-bold mt-1">✓</span>
              <div>
                <strong className="text-purple-600">useCallback:</strong> Memoizing the generateRandomString function
              </div>
            </li>
            <li className="text-slate-700 flex items-start gap-2">
              <span className="text-purple-600 font-bold mt-1">✓</span>
              <div>
                <strong className="text-purple-600">useEffect:</strong> Generating initial string on component mount
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RandomStringGenerator;
