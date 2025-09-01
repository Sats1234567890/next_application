"use client";
import { useState } from 'react';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('benefits'); // 'benefits', 'usage', 'export', 'comments'

  // Function to convert text into numbered list
  const renderNumberedList = (text) => {
    const items = text.split('.').filter(item => item.trim() !== '');
    return (
      <ol className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
        {items.map((item, index) => (
          <li key={index} className="pl-2">
            {item.trim()}.
          </li>
        ))}
      </ol>
    );
  };

  const tabLabels = {
    benefits: 'Key Benefits',
    usage: 'Usage & Instructions',
    export: 'Export Information',
    comments: `Comments (${product.comments ? product.comments.length : 0})`,
  };

  const tabContent = {
    benefits: renderNumberedList(product.benefits),
    usage: renderNumberedList(product.usageInstructions),
    export: renderNumberedList(product.exportInfo),
    comments: (
      <div className="space-y-4">
        {product.comments && product.comments.length > 0 ? (
          product.comments.map((comment, index) => (
            <div
              key={index}
              className="bg-gray-200 p-4 rounded-lg shadow-sm border border-gray-200"
            >
              <p className="font-semibold text-gray-800">{comment.user}</p>
              <p className="text-gray-600 italic mt-1">"{comment.comment}"</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    ),
  };

  return (
    <div className="w-full p-4 mt-8">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          {['benefits', 'usage', 'export', 'comments'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap py-3 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6 p-6 bg-gray-200 rounded-xl shadow-inner">
        <h2 className="text-lg font-semibold text-green-700 mb-4">
          {tabLabels[activeTab].replace(/\(\d+\)/, '')}
        </h2>
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default ProductTabs;
