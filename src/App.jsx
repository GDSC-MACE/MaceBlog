import './App.css'
import Dash from './Components/Dash'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import TopBlogs from './Components/TopBlogs'
import Search from './Components/Search'
import Login from './Components/Login'
import Blogs from './Components/Blogs'
import Contact from './Components/Contact'
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
      <Blogs/>
      <Dash/>
      <div className='topblogs-search-space'></div>
      <div className='Login'></div>
      <Login/>
      <div className='Login'></div>
      <Contact/>
      
      </div>
      
    </div>
    
     
    </>
  )
}

export default App
