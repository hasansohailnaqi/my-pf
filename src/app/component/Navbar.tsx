//import { Anybody } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCloudDownloadOutline } from 'react-icons/io5'; 


const Navbar = () => {
  return (
    <header>
  <nav className= " bg-slate-200 p-7 ">
    <div className="flex justify-between">
      <div className='flex'>
  <a href="#">
    <img className=" inline h-5" src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png" alt="" />
  </a>
  <a href="/cv/myCv.pdf" download="your-cv-file-name.pdf"> 
    <button className="flex mt-1 h-5 items-center bg-inherit border-0 py-0 px-5  rounded text-base ml-8  hover:text-blue-600"
    >Download cv 
      <IoCloudDownloadOutline className="text-xl ml-2" />
      </button>
      </a>

</div >  

  <ul className="flex items-center mr-40 h-8">
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
  <div>
  <span>
  <Link href={"#Sign in"} className="mr-5 hover:text-blue-600">Sign in</Link>
  </span>
  </div>
  
  </div>
  </nav>
</header>

  )
}

export default Navbar
