//import { Anybody } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Menu } from "lucide-react";
import { Loader } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const Navbar = () => {
  return (
    <header>
      <nav className=" bg-slate-200 p-7 ">
        <div className="flex justify-between">
          
            
          
          <div className="flex">
            <a href="#">
              <img
                className=" inline h-5"
                src="https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png"
                alt=""
              />
            </a>
            <a href="/cv/myCv.pdf" download="your-cv-file-name.pdf">
              <button className=" md:flex hidden mt-1 h-5 items-center bg-inherit border-0 py-0 px-5  rounded text-base ml-8  hover:text-blue-600 ">
                Download cv
                <IoCloudDownloadOutline className="text-xl ml-2" />
              </button>
            </a>
          </div>

          <ul className="items-center mr-40 h-8 md:flex hidden gap-x-4">
            <li>
              <Link href={"/"} className="mr-5 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href={"#About"} className="mr-5 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href={"#"} className="mr-5 hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href={"#"} className="mr-5 hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href={"#Sign in"} className="mr-5 hover:text-blue-600">
                Sign in
              </Link>
            </li>
          </ul>
          
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-loader"
            >
              <line x1="12" x2="12" y1="2" y2="6" />
              <line x1="12" x2="12" y1="18" y2="22" />
              <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
              <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
              <line x1="2" x2="6" y1="12" y2="12" />
              <line x1="18" x2="22" y1="12" y2="12" />
              <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
              <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
            </svg>
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <ul className="">
                    <li>
                      <Link href={"/"} className="mr-5 hover:text-blue-600">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#About"}
                        className="mr-5 hover:text-blue-600"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className="mr-5 hover:text-blue-600">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href={"#"} className="mr-5 hover:text-blue-600">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#Sign in"}
                        className="mr-5 hover:text-blue-600"
                      >
                        Sign in
                      </Link>
                    </li>
                    <li>
                      <a href="/cv/myCv.pdf" download="your-cv-file-name.pdf">
                        <button className=" hover:text-blue-600">
                          Download cv
                          {/* <IoCloudDownloadOutline className="text-xl ml-2" /> */}
                        </button>
                      </a>
                    </li>
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

// 03120270491- hamza
