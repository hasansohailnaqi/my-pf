import { ModeToggle } from "@/components/ui/toggel-mode";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react";
  

export default function Navbar() {
    return <div>
        <header className="mb-8 border-b mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl cursor-pointer text-neutral-500 dark:text-neutral-100">
            <div className=" hidden lg:flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
            <nav className=" gap-4 flex 2xl:ml-16 ">
            <div className="hover:-translate-y-1 transition-transform"> <Link href="/" >Home</Link></div>
            <div className="hover:-translate-y-1 transition-transform">   <Link href="/project">Projects</Link></div>
            {/* <div className="hover:-translate-y-1 transition-transform">       <Link href="/certification">Certification</Link></div> */}
            <div className="hover:-translate-y-1 transition-transform">           <Link href="/about">About</Link></div>
            {/* <div className="hover:-translate-y-1 transition-transform">       <Link href="#Contact">Contact</Link></div> */}
                </nav>
                <div className="hidden lg:flex  justify-end items-center   max-w-2xl px-4 sm:px-6 lg:max-w-7xl gap-4">
                  <Link href="https://github.com/hasansohailnaqi" target="_blank"> <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform "
              size={30}
            /></Link>  
                    <Link href="https://www.linkedin.com/in/hasan-sohail-naqi-703bb8289/" target="_blank">
                        <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform "
              size={30}
            /></Link>
                   <div className="hover:-translate-y-1 transition-transform"><ModeToggle /></div> 
                    
                </div>
            
            </div>
<div className='flex lg:hidden'>

<Sheet>
  <SheetTrigger>
    <Menu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <ul className='text-lg font-medium gap-x-4'>
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/project">Projects</Link>
        </li>
        <li>
            <Link href="/certification">Certifiction</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        
      </ul>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>

        </header>
    </div>
}

// "use client"
// //import { Anybody } from 'next/font/google'
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { IoCloudDownloadOutline } from "react-icons/io5";
// import { Menu } from "lucide-react";
// //import { Loader } from "lucide-react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";


 
// //import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
 
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"


// const Navbar = () => {
//   const { setTheme } = useTheme()
//   return (
//     <header>
//       <nav className=" bg-slate-200 p-7 ">
//         <div className="flex justify-between">
          
            
          
//           <div className="flex">
//             <a href="#">
//               <img
//                 className=" inline h-5"
//                 src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png"
//                 alt=""
//               />
//             </a>
//             <a href="/cv/myCv.pdf" download="your-cv-file-name.pdf">
//               <button className=" md:flex hidden mt-1 h-5 items-center bg-inherit border-0 py-0 px-5  rounded text-base ml-8  hover:text-blue-600 ">
//                 Download cv
//                 <IoCloudDownloadOutline className="text-xl ml-2" />
//               </button>
//             </a>
//           </div>

//           <ul className="items-center mr-40 h-8 md:flex hidden gap-x-4">
//             <li>
//               <Link href={"/"} className="mr-5 hover:text-blue-600">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href={"#About"} className="mr-5 hover:text-blue-600">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href={"#"} className="mr-5 hover:text-blue-600">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link href={"#"} className="mr-5 hover:text-blue-600">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href={"#Sign in"} className="mr-5 hover:text-blue-600">
//                 Sign in
//               </Link>
//             </li>
//           </ul>
        
//           <div className="flex items-center gap-4 ">
//             {/* <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               className="lucide lucide-loader"
//             >
//               <line x1="12" x2="12" y1="2" y2="6" />
//               <line x1="12" x2="12" y1="18" y2="22" />
//               <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
//               <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
//               <line x1="2" x2="6" y1="12" y2="12" />
//               <line x1="18" x2="22" y1="12" y2="12" />
//               <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
//               <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
//   </svg> */}


//             <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
   
//                       <Sheet>
//               <SheetTrigger>
//                 <Menu />
//               </SheetTrigger>
//               <SheetContent>
//                 <SheetHeader>
//                   <ul className="">
//                     <li>
//                       <Link href={"/"} className="mr-5 hover:text-blue-600">
//                         Home
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         href={"#About"}
//                         className="mr-5 hover:text-blue-600"
//                       >
//                         About
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href={"#"} className="mr-5 hover:text-blue-600">
//                         Contact
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href={"#"} className="mr-5 hover:text-blue-600">
//                         Services
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         href={"#Sign in"}
//                         className="mr-5 hover:text-blue-600"
//                       >
//                         Sign in
//                       </Link>
//                     </li>
//                     <li>
//                       <a href="/cv/myCv.pdf" download="your-cv-file-name.pdf">
//                         <button className=" hover:text-blue-600">
//                           Download cv
//                           {/* <IoCloudDownloadOutline className="text-xl ml-2" /> */}
//                         </button>
//                       </a>
//                     </li>
//                   </ul>
//                 </SheetHeader>
//               </SheetContent>
//             </Sheet>
//           </div>
          
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

// // 03120270491- hamza
