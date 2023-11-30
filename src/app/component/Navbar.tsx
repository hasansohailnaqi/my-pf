//import { Anybody } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCloudDownloadOutline } from 'react-icons/io5'; 


const Navbar = () => {
  return (
    <header className='flex justify-between items-center bg-slate-500'>
    <a className=" ">
      <Image src={require("../../../public/logo/MSC3.0 LOGO.png")} alt="mSC3.0" 
      width={100} 
      height={80}
      />
      <a href="/cv/myCv.pdf" download="your-cv-file-name.pdf"> 
      <button className="dou items-center bg-gray-100 border-0 py-1 px-3 hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >Doc 
        <IoCloudDownloadOutline className="text-xl ml-2" />
        </button>
        </a>
    </a>
    <ul>
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
  </header>
  
  )
}

export default Navbar
