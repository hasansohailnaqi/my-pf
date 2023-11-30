//import { Anybody } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoCloudDownloadOutline } from 'react-icons/io5'; 


const Navbar = () => {
  return (
  <div>
      <header className="text-gray-600 body-font bg-slate-400">
  <div className="container flex flex-wrap p-5 items-center"> 
    <a className=" title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      {/*image for logo*/}

    <Image src={require("../../../public/logo/MSC3.0 LOGO.png")} alt="mSC3.0" 
    width={100} 
    height={80}
    />
     {/* <span className="ml-3 text-xl">MSc3.0</span>  */}
    </a>
    {/*<nav className="md:mr-auto md:ml-2 md:py-0 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
      <Link href={"#About"} className="mr-5 hover:text-blue-600">About</Link>
      <Link href={"#"} className="mr-5 hover:text-blue-600">Contact</Link>
      <Link href={"#"} className="mr-5 hover:text-blue-600">Services</Link>
  </nav> */}
         
         {/*button edit*/}
         
         <a href="/cv/myCv.pdf" download="your-cv-file-name.pdf"> 
    <button className="items-center bg-gray-100 border-0 py-1 px-3 hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    >Doc 
      <IoCloudDownloadOutline className="text-xl ml-2" />
      </button>
      </a>
  </div>
</header>
          </div>
  )
}

export default Navbar
