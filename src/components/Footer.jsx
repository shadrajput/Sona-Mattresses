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
import { product } from '@/pages/api/product'

export function Footer() {
  console.log('footer', product)
  return (
    <>
      <div className="relative flex h-[500px] items-center justify-center  bg-[#181818] py-10 xl:h-[500px] xl:px-40">
        <Image
          src={myLogo}
          alt="fess manager logo"
          className="h-full w-full "
        />
        <div className="absolute h-full w-full bg-black/40 "></div>
        <div className="absolute grid  grid-rows-1 gap-20 xs:top-8 sm:top-12 md:top-10 lg:left-0 xl:top-16 xl:w-full xl:grid-cols-4 xl:px-20 ">
          <div className=" xl:space-y-5 ">
            <div className="hidden w-full items-center justify-start xl:flex">
              <div className="w-52">
                <Image src={Logo} alt="fess manager logo" className="" />
              </div>
            </div>
            <div className="w-full">
              <p className="w-full text-center text-2xl font-bold text-white xs:px-10 md:text-3xl xl:px-0 xl:text-start xl:text-xl xl:font-semibold xl:text-slate-200">
                Unapologetic. Unhinged. Unleashed. Welcome to the revolution.
              </p>
              <p className="py-2 text-center font-bold text-[#b19777] md:text-left">
                {' '}
                Call Now : +91 8401527048
              </p>
            </div>
            <div className="pt-12 pb-10 xs:pl-5 md:pt-10 lg:pb-7 xl:hidden ">
              <h1 className="font-semibold text-white xs:pl-2 xs:pb-4 md:text-lg">
                Footer Menu
              </h1>
              <nav className="space-y-3 ">
                <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                  <BiChevronRight className="font-bold text-[#b19777]" />
                  <Link href={`/AboutUs`}>
                    <h1>About Us</h1>
                  </Link>
                </li>
                <li className="flex cursor-pointer items-center space-x-3 font-semibold  text-white duration-300 hover:text-[#ae9775]">
                  <BiChevronRight className="font-bold text-[#b19777]" />
                  <Link href={`/ContactUs`}>
                    <h1>Contact Us</h1>
                  </Link>
                </li>
                <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                  <BiChevronRight className="font-bold text-[#b19777]" />
                  <Link href={`/Product`}>
                    <h1>Product</h1>
                  </Link>
                </li>
                <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                  <BiChevronRight className="font-bold text-[#b19777]" />
                  <h1>Shipping Policy</h1>
                </li>
                <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                  <BiChevronRight className="font-bold text-[#b19777]" />
                  <h1>Refund Policy</h1>
                </li>
              </nav>
            </div>
            <div className="flex items-center justify-start space-x-5  xs:pl-5 xl:pl-0">
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
                <Link href={`/AboutUs`}>
                  <h1>About Us</h1>
                </Link>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold  text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <Link href={`/ContactUs`}>
                  <h1>Contact Us</h1>
                </Link>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <Link href={`/Product`}>
                  <h1>Product</h1>
                </Link>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>Shipping Policy</h1>
              </li>
              <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                <BiChevronRight className="font-bold text-[#b19777]" />
                <h1>Refund Policy</h1>
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
              {product.map((p) => {
                return (
                  <Link key={p.id} href={`/Product/${p.id}`}>
                    <li className="flex cursor-pointer items-center space-x-3 font-semibold text-white duration-300 hover:text-[#ae9775]">
                      <BiChevronRight className="font-bold text-[#b19777]" />
                      <h1>{p.title}</h1>
                    </li>
                  </Link>
                )
              })}
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
        <div className="absolute bottom-5 text-center xs:text-start ">
          <p className="text-sm text-slate-300/50 xs:text-xs">
            © 2023, SONAMATTRESSES. Powered by SonaMattresses
          </p>
        </div>
      </div>
    </>
  )
}
