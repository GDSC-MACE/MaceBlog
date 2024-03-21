import React from 'react';
import BlogItem from './BlogItem';

const TrendingBlogs = ({ trendingBlogs }) => {
  return (
    <div className=" py-8 rounded-lg">
      <div className="container mx-auto px-4  rounded-lg">
        <h2 className="text-white text-3xl font-bold mb-6">Trending Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingBlogs.map((blog, index) => (
            <BlogItem key={blog.id} blog={blog} isTrending={true} number={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingBlogs;
