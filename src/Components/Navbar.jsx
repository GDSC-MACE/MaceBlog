import { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from './../assets/images/logowhite.png';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "BLOGS", link: "/" },
    { name: "EVENTS", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-40'>
      <div className='md:flex items-center justify-between bg-primary py-4 md:px-10 px-7'>
        {/* logo section */}
        <img src={logo} alt="logo" className='size-12' />
        {/* Menu icon */}
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute bg-primary md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link, index) => (
            <li key={index} className='md:ml-8 md:mr-8 md:my-0 my-7 items-center justify-center cursor-pointer font-semibold' onClick={() => setOpen(false)}>
              <Link to={link.link} className='text-secondary font-poppins hover:text-blue-400 duration-500'>{link.name}</Link>
            </li>
          ))}
          <li className='md:ml-8 md:mr-8 md:my-0 my-7 items-center justify-center cursor-pointer font-semibold' onClick={() => setOpen(false)}>
            <Button className='transform hover:scale-110 bg-secondary/65 text-black font-bold py-2 px-4 rounded-full'>
              <Link to="/login">Login</Link>
            </Button>
          </li>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;
