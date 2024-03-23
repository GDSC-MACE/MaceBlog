import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <div className='flex justify-center items-start'>
      <div className='w-full'>
      <Navbar/>
      <Hero/>
      </div>
    </div>
    </>
  )
}

export default App
