import React from 'react';

export default function Button({ text, href, className }) {
  return (
    <a
      href={href}
      className={`inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${className}`}
    >
      {text}
    </a>
  );
}