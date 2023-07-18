import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from "next/image";
import Logo from '../../public/images/logo.png'
import { useRouter } from 'next/router';
import { HiMenu } from "react-icons/hi"
import { RxCross2 } from "react-icons/rx"


export function Header(props) {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const [color, setcolor] = useState(false)

  const changecolor = () => {
    if (window.scrollY >= 90) {
      setcolor(true)
    } else {
      setcolor(false)
    }
  }

  window.addEventListener("scroll", changecolor)

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const closeMenu = () => setClick(false)

  const NavLink = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About Us",
      link: "/AboutUs"
    },
    {
      name: "Product",
      link: "/Product"
    },
    {
      name: "Contact Us",
      link: "/ContactUs"
    },
  ]

  const router = useRouter()
  const [menu, setmenu] = useState(false);

  return (
    <header className={color ? 'header header-bg bg-[#b19777]' : "header bg-white"}>
      <div className="flex flex-col md:flex-row items-center justify-center px-20 py-2">
        <div className='flex items-center justify-between xl:justify-start w-full md:w-32 xl:w-full xl:h-full'>
          <div className=' w-full flex justify-start items-center h-full'>
            <Link href="/">
              <div className='w-24 sm:w-32 lg:w-40 cursor-pointer'>
                <Image src={Logo} alt="fess manager logo" className='' />
              </div>
            </Link>
          </div>
          <div className='mr-3 md:hidden' onClick={() => setmenu(!menu)}>
            {
              menu ?
                <RxCross2 className='text-xl xs:text-2xl' />
                :
                <HiMenu className='text-xl xs:text-2xl' />
            }
          </div>
        </div>
        <div className={` ${menu ? "top-16 opacity-100 sm:top-[80px]" : "top-[-500px] opacity-0 md:opacity-100 "}  
          md:static w-full pt-5 md:pt-0 absolute duration-500 md:flex md:items-center md:mr-16 lg:mr-16`}>
          <div className='flex flex-col h-full items-start space-y-5 text-left w-full px-5 || md:space-x-7 md:flex-row 
            md:items-center md:space-y-0 md:justify-end'>
            {
              NavLink.map(({ link, name }) => (
                <Link
                  name={name}
                  href={link}
                >
                  <a className={`${router.pathname === link ? "text-[#b19777] border-x-2 px-2 border-[#b19777]" : " text-white md:text-black"} font-semibold hover:text-[#b19777] text-[15px]`}>
                    {name}
                  </a>
                </Link>
              ))
            }
          </div>
          <div className="w-full md:w-32 px-5 my-5 ">
            <Link href="/Quotation">
              <a className="btn1 font-semibold w-full text-[12px] text-white md:text-black border border-white md:border-black hover:text-white z-50 group text-lg py-1">
                Get Quotation
              </a>
            </Link>
          </div>

        </div>
      </div>
    </header>
  )
}
