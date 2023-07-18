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
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <header className={` lg:z-20 2xl:px-24 w-full fixed top-0 z-[999] duration-300 ${scrollPosition > 0 ? 'bg-white shadow-md' : ''} `}>
      <nav className="relative z-50 text-sm">
        <div className="flex flex-col md:flex-row items-center">
          <div className='flex items-center justify-between w-full md:w-32'>
            <div>
              <Link href="/">
                <div className='w-24 sm:w-32 lg:w-36 cursor-pointer'>
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
          <div className={` ${menu ? "top-16 opacity-100 sm:top-[80px]" : "top-[-500px] opacity-0 md:opacity-100"} bg-black md:bg-transparent 
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
            <div className="w-full md:w-32 px-5 my-5 md:my-3 ">
              <Link href="/Quotation">
                <a className="btn1 font-semibold w-full text-[12px] text-white md:text-black border border-white md:border-black hover:text-white z-50 group text-lg py-1">
                  Get Quotation
                </a>
              </Link>
            </div>

          </div>
        </div>

      </nav>
    </header>
  )
}