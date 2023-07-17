import { useState } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from "next/image";
import Logo from '../../public/images/logo.png'
import { useRouter } from 'next/router';
import { AiOutlineMenu } from "react-icons/ai"


export function Header(props) {
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
    <header className="lg:px-24">
      <nav className="relative z-50 text-sm">
        <div className='flex justify-between w-full items-center px-3 py-2'>
          <div className=''>
            <Link href="/">
              <div className=' w-24 lg:w-48 cursor-pointer'>
                <Image src={Logo} alt="fess manager logo" className='' />
              </div>
            </Link>
          </div>
          <div className="mr-2 md:hidden" onClick={() => setmenu(!menu)}>
            <AiOutlineMenu className='text-lg' />
          </div>
        </div>
        <div className={` ${menu ? "top-16 opacity-100 duration-700" : "top-[-500px] lg:opacity-100 opacity-0 duration-700"} 
        absolute left-0  duration-700 ease-in w-full h-full  lg:flex flex-col justify-end items-center bg-black py-4`}>
          <div className='h-full flex-col flex px-5 space-y-5'>
            {
              NavLink.map(({ link, name }) => (
                <Link
                  name={name}
                  href={link}
                >
                  <a className={`${router.pathname === link ? "text-[#b19777] border-x-2 px-2 border-[#b19777]" : "text-black"} font-semibold hover:text-[#b19777] text-[15px]`}>
                    {name}
                  </a>
                </Link>
              ))
            }
          </div>
          <div className="lg:ml-6  ">
            <Link href="/Quotation">
              <a className="btn1 font-semibold text-[12px] hover:text-white z-50 group text-lg py-1">
                Get Quotation
              </a>
            </Link>
          </div>

        </div>
      </nav>
    </header>
  )
}
