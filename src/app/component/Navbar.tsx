//import { Anybody } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCloudDownloadOutline } from 'react-icons/io5'; 


const Navbar = () => {
  return (
    <header>
  <nav className="bg-blue-500 p-4 ">
    <div className="flex justify-between">
      <div className='flex'>
  <a href="#">
    <img className=" inline h-7" src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png" alt="" />
  </a>
  <a href="/cv/myCv.pdf" download="your-cv-file-name.pdf"> 
    <button className="flex items-center bg-gray-100 border-0 py-0 px-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-1 md:mt-0 ml-8"
    >Download cv 
      <IoCloudDownloadOutline className="text-xl ml-2" />
      </button>
      </a>

</div>  
  <ul className="flex bg-slate-500">
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About Us</a>
    </li>
    <li>
      <a href="#">Pricing</a>
    </li>
    <li>
      <a href="#">Products</a>
    </li>
  </ul>
  <span className="text-right">
    <a href="#" className="btn">Join us</a>
  </span>
  </div>
  </nav>
</header>

  )
}

export default Navbar
