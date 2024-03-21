import './App.css'
import Hero from './Components/Hero'
import TrendingBlogs from './Components/Blogs/TrendingBlogs'
import BlogItem from './Components/Blogs/BlogItem'
import DiscoverMore from './Components/Blogs/DiscoverMore'
import { trendingBlogs,blogs } from './constants/con'
function App() {
  return (
    <>
    <div className='flex justify-center items-start'>
      <div className='w-full'>
        <Hero/>
      </div>
    </div>
    <div className="container mx-auto px-4 py-8">
        <TrendingBlogs trendingBlogs={trendingBlogs} />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-3/4 pr-4">
            <div className="mt-4">
              {blogs.map((blog, index) => (
                <div key={blog.id} className="mb-4">
                  <BlogItem blog={blog} number={index + 1} />
                </div>
              ))}
            </div>
            
          </div>
         
          <div className="hidden md:block w-full md:w-1/4 mt-0 md:mt-0 md:pl-0">
            <DiscoverMore />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
