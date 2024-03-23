import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from './../assets/images/logowhite.png'
import { Button } from "@material-tailwind/react"

const Navbar = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"BLOGS",link:"/"},
        {name:"EVENTS",link:"/"},
        {name:"CONTACT",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-40'>
           <div className='md:flex items-center justify-between bg-primary py-4 md:px-10 px-7'>
            {/* logo section */}
            <img src={logo} className='size-12' />
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-primary md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:mr-8 md:my-0 my-7 items-center justify-center cursor-pointer font-semibold'>
                        <a href={link.link} className='text-secondary font-poppins hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                <Button className='transform hover:scale-110 bg-secondary/65 text-black font-bold py-2 px-4 rounded-full'>Login</Button>
            </ul>
            {/* button */}
           </div>
        </div>
    );
};

export default Navbar;




// import React, { useState } from 'react'
// import {BiChevronLeft} from "react-icons/bi"
// import Navlogo from './Navlogo'

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false)
//   return (
//     <div className={'${toggle ? "w-[5.8rem]" : ""} bg-primary h-[96%] w-[20rem] rounded-3xl ml-6 p-4 border transition-all duration-500 border-solid border-primary relative'}>
//       <Navlogo/>
//         <button onClick={() => {setToggle(!toggle)}} className='absolute top-[7rem] flex justify-center items-center
//         -left-5 w-10 h-10 bg-primary rounded-full cursor-pointer' 
//         >
//             <BiChevronLeft className={'${toggle ? "rotate-180" : "" } text-3xl transition-all duration-300'}/>
//         </button>
//     </div>
//   )
// }