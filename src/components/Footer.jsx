import Image from "next/image";
import myLogo from "../../public/images/map.png"
import Logo from "../../public/images/white-logo.png"
import Link from 'next/link'
import { BiChevronRight } from "react-icons/bi"
import { FiPhoneCall } from "react-icons/fi"
import { CgMail } from "react-icons/cg"
import { MdLocationPin } from "react-icons/md"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineFacebook } from "react-icons/ai"


export function Footer() {
  return (
    <>
      <div className='py-10 bg-[#181818] h-[500px] xl:h-[500px] flex  justify-center items-center xl:px-40 relative'>
        <Image src={myLogo} alt="fess manager logo" className='w-full h-full ' />
        <div className="h-full w-full bg-black/40 absolute ">
        </div>
        <div className="grid grid-rows-1  xl:w-full xl:grid-cols-4 gap-20 absolute xs:top-8 sm:top-12 md:top-10 xl:top-16 xl:px-20 lg:left-0 ">
          <div className=" xl:space-y-5 ">
            <div className='w-full xl:flex justify-start items-center hidden'>
              <div className="w-52">
                <Image src={Logo} alt="fess manager logo" className='' />
              </div>
            </div>
            <div className="w-full">
              <p className="text-white w-full font-bold text-center text-2xl md:text-3xl xl:text-start xs:px-10 xl:px-0 xl:font-semibold xl:text-xl xl:text-slate-200">Unapologetic. Unhinged. Unleashed. Welcome to the revolution.</p>

            </div>
            <div className="pt-12 pb-10 lg:pb-7 md:pt-10 xs:pl-5 xl:hidden " >
              <h1 className="text-white font-semibold md:text-lg xs:pl-2 xs:pb-4">Footer Menu</h1>
              <nav className="space-y-3 ">
                <li className="text-[13px] md:text-sm flex items-center space-x-3 xs:text-gray-300 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                  <BiChevronRight className="text-[#b19777] font-bold" />
                  <h1>
                    AboutUs
                  </h1>
                </li>
                <li className="text-[13px] md:text-sm flex items-center space-x-3 xs:text-gray-300 cursor-pointer  hover:text-[#ae9775] duration-300 text-white">
                  <BiChevronRight className="text-[#b19777] font-bold" />
                  <h1>
                    ContactUs
                  </h1>
                </li>
                <li className="text-[13px] md:text-sm flex items-center space-x-3 xs:text-gray-300 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                  <BiChevronRight className="text-[#b19777] font-bold" />
                  <h1>
                    Product
                  </h1>
                </li>
                <li className="text-[13px] md:text-sm flex items-center space-x-3 xs:text-gray-300 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                  <BiChevronRight className="text-[#b19777] font-bold" />
                  <h1>
                    Shipping Policy
                  </h1>
                </li>
                <li className="text-[13px] md:text-sm flex items-center space-x-3 xs:text-gray-300 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                  <BiChevronRight className="text-[#b19777] font-bold" />
                  <h1>
                    Refund Policy
                  </h1>
                </li>
              </nav>
            </div>
            <div className="flex items-center justify-start space-x-5  xs:pl-5 xl:pl-0">
              <a href="https://www.instagram.com/sonamattresses/">
                <AiOutlineInstagram className="text-2xl cursor-pointer text-[#b19777] hover:text-white" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094529056554">
                <AiOutlineFacebook className="text-2xl cursor-pointer text-[#b19777] hover:text-white" />
              </a>
            </div>
          </div>
          <div className="hidden xl:block">
            <h1 className="text-[25px] font-semibold text-[#b19777]" >Explore</h1>
            <div className="bg-[#61543f3b] h-[1px] text-[#181818] relative">

            </div>
            <div className="bg-[#b19777] h-[3px] w-32 absolute">

            </div>

            <nav className="pt-12 space-y-5 ">
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  AboutUs
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer  hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  ContactUs
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  Product
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  Shipping Policy
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  Refund Policy
                </h1>
              </li>
            </nav>
          </div>
          <div className="hidden xl:block">
            <h1 className="text-[25px] font-semibold text-[#b19777]" >Mattress</h1>
            <div className="bg-[#61543f3b] h-[1px] text-[#181818] relative">

            </div>
            <div className="bg-[#b19777] h-[3px] w-32 absolute">

            </div>

            <nav className="pt-12 space-y-5 ">
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  Pocket Spring Mattress
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer  hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  PU Foam Mattress
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  PU & Super Soft Mattress
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  Bonded Mattress
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  Bonde Latex Mattress
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#ae9775] duration-300 text-white">
                <BiChevronRight className="text-[#b19777] font-bold" />
                <h1>
                  HR Soft Memory Foam
                </h1>
              </li>
            </nav>
          </div>
          <div className="hidden xl:block">
            <h1 className="text-[25px] font-semibold text-[#b19777]" >Contact With Us</h1>
            <div className="bg-[#61543f3b] h-[1px] text-[#181818] relative">

            </div>
            <div className="bg-[#b19777] h-[3px] w-32 absolute">

            </div>

            <nav className="pt-12 space-y-5 ">
              <li className="font-semibold flex items-start space-x-3 cursor-pointer hover:text-[#b19777] duration-300 text-white">
                <div>
                  <MdLocationPin className="text-[#b19777] font-bold text-2xl" />
                </div>
                <p>
                  Shade No.1 , Survey No.1303, Village-Undrel , Ta. Daskoroi, Ahmedabad - 382443 , Gujarat , India..
                </p>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer hover:text-[#b19777] duration-300 text-white">
                <div>
                  <FiPhoneCall className="text-[#b19777] font-bold text-xl" />
                </div>
                <h1>
                  +91 8401527048
                </h1>
              </li>
              <li className="font-semibold flex items-center space-x-3 cursor-pointer  hover:text-[#b19777] duration-300 text-white">
                <div>
                  <CgMail className="text-[#b19777] font-bold text-2xl" />
                </div>
                <h1>
                  sonamattresses@gmail.com
                </h1>
              </li>
            </nav>
          </div>
        </div>
        <div className="text-center xs:text-start absolute bottom-5 ">
          <p className="text-slate-300/50 xs:text-xs text-sm">© 2023, SONAMATTRESSES. Powered by SonaMattresses</p>
        </div>
      </div>
    </>
  )
}
