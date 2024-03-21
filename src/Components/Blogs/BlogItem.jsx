import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const BlogItem = ({ blog, number, isTrending }) => {
  const [showAuthorInfo, setShowAuthorInfo] = useState(false);
  const [saved, setSaved] = useState(false); // State for tracking saved status
  const [hovering, setHovering] = useState(false); // State for tracking hover status

  // Format the date in "MMM DD, YYYY" format
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  // Format the read time
  const formatReadTime = (readTime) => {
    return readTime > 60 ? `${Math.floor(readTime / 60)} hr ${readTime % 60} min read` : `${readTime} min read`;
  };

  const handleSaveToggle = () => {
    setSaved(!saved);
    setHovering(false); // Reset hovering state after click
  };

  const authorInfo = (
    <div className={`absolute z-10 top-full left-0 bg-white p-4 shadow-md rounded-lg w-72 ${showAuthorInfo ? 'block' : 'hidden'}`}>
      <div className="flex items-center mb-2">
        <img src={blog.authorProfile} alt={blog.author} className="w-10 h-10 rounded-full mr-2" />
        <h4 className="text-lg font-bold">{blog.author}</h4>
      </div>
      <p className="text-sm text-gray-700 mb-2">{blog.authorDescription}</p>
      <p className="text-xs text-gray-500 mb-2">{blog.authorFollowers} Followers</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
        Follow
      </button>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 relative">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center relative">
          <img src={blog.authorProfile} alt={blog.authorUsername} className="w-10 h-10 rounded-full mr-2" />
          <span
            className="text-sm text-gray-500 relative cursor-pointer"
            onMouseEnter={() => setShowAuthorInfo(true)}
            onMouseLeave={() => setShowAuthorInfo(false)}
          >
            {blog.author}
            {authorInfo}
          </span>
        </div>
        <span className="text-sm text-gray-500">{formatDate(blog.date)}</span>
      </div>
      <h3 className="text-lg font-bold mb-2 cursor-pointer">{blog.title}</h3>
      {!isTrending && (
        <div className="flex">
          <div className="w-1/2 pr-4">
            <p className="text-gray-600">{blog.description}</p>
          </div>
        </div>
      )}
      <div className="flex">
        <div className="w-1/2 pr-4">
          <div
            className={`text-xs text-gray-500 mb-2 flex items-center ${hovering ? 'hovered' : ''}`}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            {formatDate(blog.publishedDate)} · {formatReadTime(blog.readTime)}
            {!isTrending && (
              <div className="ml-2 flex items-center">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className={`text-white cursor-pointer top-0 right-0 m-2 ${saved ? 'text-blue-500' : ''}`}
                  style={{ border: '1px solid black', borderRadius: '3px', background: 'black', padding: '2px', fontSize: '1rem' }}
                  onClick={handleSaveToggle}
                />
                {hovering && (saved ? <span className="text-sm text-gray-500 ml-1">Saved</span> : <span className="text-sm text-gray-500 ml-1">Save</span>)}
              </div>
            )}
          </div>
        </div>
        {!isTrending && (
          <div className="w-1/2">
            <img
              src={blog.image}
              className="w-full h-auto rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogItem;  