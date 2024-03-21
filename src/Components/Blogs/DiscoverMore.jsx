import React, { useState } from 'react';

const DiscoverMore = () => {
  const [showAll, setShowAll] = useState(false);
  const topics = [
    { name: 'Tech', link: '#' },
    { name: 'Entrepreneurship', link: '#' },
    { name: 'Writing', link: '#' },
    { name: 'Data Science', link: '#' },
    { name: 'Programming', link: '#' },
    // Add more topics as needed
  ];

  const visibleTopics = showAll ? topics : topics.slice(0, 3);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Discover more of what matters to you</h3>
      <ul className="space-y-4">
        {visibleTopics.map((topic, index) => (
          <li key={index} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mr-3 text-blue-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <a href={topic.link} className="text-gray-800 hover:text-blue-600 hover:underline">{topic.name}</a>
          </li>
        ))}
      </ul>
      {!showAll && (
        <button onClick={() => setShowAll(true)} className="text-blue-600 mt-2 hover:underline focus:outline-none">
          See More
        </button>
      )}
    </div>
  );
};

export default DiscoverMore;
