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
    <button className="flex items-center bg-gray-100 border-0 py-0 px-1 hover:bg-gray-200 rounded text-base mt-1 md:mt-0 ml-8"
    >Download cv 
      <IoCloudDownloadOutline className="text-xl ml-2" />
      </button>
      </a>

</div >  

  <ul className="flex items-center mr-40">
    <li>
    <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
    </li>
    <li>
    <Link href={"#About"} className="mr-5 hover:text-blue-600">About</Link>
    </li>
    <li>
    <Link href={"#"} className="mr-5 hover:text-blue-600">Contact</Link>
    </li>
    <li>
    <Link href={"#"} className="mr-5 hover:text-blue-600">Services</Link>
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
