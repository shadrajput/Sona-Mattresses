import Image from 'next/image'
import myLogo from '../../public/images/map.png'
import Logo from '../../public/images/white-logo.png'
import Link from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { FiPhoneCall } from 'react-icons/fi'
import { CgMail } from 'react-icons/cg'
import { MdLocationPin } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'

export function Footer() {
  return (
    <>
      <div className="relative flex h-[450px] items-center justify-center bg-[#181818] py-10 xl:h-[500px] xl:px-40">
        <Image
          src={myLogo}
          alt="fess manager logo"
          className="h-full w-full "
        />
        <div className="absolute h-full w-full bg-black/40 "></div>
        <div className="absolute top-12 grid grid-rows-1 gap-20 sm:top-20 lg:w-[500px] xl:w-full xl:grid-cols-4 xl:px-20 ">
          <div className="space-y-6 xl:px-12">
            <div className="flex w-full items-center justify-start">
              <div className="w-52">
                <Image src={Logo} alt="fess manager logo" className="" />
              </div>
            </div>
            <p className="text-center text-gray-400 lg:text-start">
              {' '}
              We craft best and high quality mattress for you , We build for you
              and We build for your comfort
            </p>
            <div className="flex w-full items-center justify-center space-x-5 lg:items-start xl:hidden">
              <div>
                <FiPhoneCall className="text-2xl font-bold text-[#b19777]" />
              </div>
              <h1 className="text-2xl font-semibold text-white lg:text-start">
                +91 8401527048
              </h1>
            </div>
            <div className="flex items-center justify-start space-x-5 pt-5">
              <a href="https://www.instagram.com/sonamattresses/">
                <AiOutlineInstagram className="cursor-pointer text-2xl text-[#b19777] hover:text-white" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100094529056554">
                <AiOutlineFacebook className="cursor-pointer text-2xl text-[#b19777] hover:text-white" />
              </a>
            </div>
          </div>
          <div className="hidden xl:block">
            <h1 className="text-[25px] font-semibold text-[#b19777]">
              Explore
            </h1>
            <div className="relative h-[1px] bg-[#61543f3b] text-[#181818]"></div>
            <div className="absolute h-[3px] w-32 bg-[#b19777]"></div>

            <nav className="space-y-5 pt-12 ">
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>AboutUs</h1>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold  text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>ContactUs</h1>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>Product</h1>
              </li>
            </nav>
          </div>
          <div className="hidden xl:block">
            <h1 className="text-[25px] font-semibold text-[#b19777]">
              Mattress
            </h1>
            <div className="relative h-[1px] bg-[#61543f3b] text-[#181818]"></div>
            <div className="absolute h-[3px] w-32 bg-[#b19777]"></div>

            <nav className="space-y-5 pt-12 ">
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>Pocket Spring Mattress</h1>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold  text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>PU Foam Mattress</h1>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>PU & Super Soft Mattress</h1>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>Bonded Mattress</h1>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>Bonde Latex Mattress</h1>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>HR Soft Memory Foam</h1>
              </li>
            </nav>
          </div>
          <div className="hidden xl:block">
            <h1 className="text-[25px] font-semibold text-[#b19777]">
              Contact With Us
            </h1>
            <div className="relative h-[1px] bg-[#61543f3b] text-[#181818]"></div>
            <div className="absolute h-[3px] w-32 bg-[#b19777]"></div>

            <nav className="space-y-5 pt-12 ">
              <li className="flex cursor-pointer items-start space-x-3 font-semibold text-white duration-300 hover:text-[#b19777]">
                <div>
                  <MdLocationPin className="text-2xl font-bold text-[#b19777]" />
                </div>
                <p>
                  Shade No.1 , Survey No.1303, Village-Undrel , Ta. Daskoroi,
                  Ahmedabad - 382443 , Gujarat , India..
                </p>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#b19777]">
                <div>
                  <FiPhoneCall className="text-xl font-bold text-[#b19777]" />
                </div>
                <h1>+91 8401527048</h1>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold  text-white duration-300 hover:text-[#b19777]">
                <div>
                  <CgMail className="text-2xl font-bold text-[#b19777]" />
                </div>
                <h1>sonamattresses@gmail.com</h1>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
