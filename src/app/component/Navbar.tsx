//import { Anybody } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCloudDownloadOutline } from 'react-icons/io5'; 


const Navbar = () => {
  return (
    <header className=" items-center bg-slate-700">
  <nav className="bg-blue-500 p-4 ">
    <div className="flex justify-between">
  <a href="#">
    <img className=" inline h-7" src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png" alt="" />
  </a>
  <ul className='flex bg-slate-500'>
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
