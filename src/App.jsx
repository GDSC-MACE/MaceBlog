import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import TopBlogs from './Components/TopBlogs'
import Search from './Components/Search'

function App() {
  return (
    <>
    <div className='flex justify-center items-start'>
      <div className='w-full'>
      <Navbar/>
      <Hero/>
      <div className='topblogs-search-space'></div>
      
      <div className='top-blogs-container'> 
        <TopBlogs/>
      </div>
      <div className='topblogs-search-space'></div>
      <Search/>
      <div className='topblogs-search-space'></div>
      
      </div>
    </div>
    
     
    </>
  )
}

export default App
