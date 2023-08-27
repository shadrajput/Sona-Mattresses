import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import { useRouter } from 'next/router'
import { HiMenu } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'

export function Header(props) {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const NavLink = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About Us',
      link: '/AboutUs',
    },
    {
      name: 'Product',
      link: '/Product',
    },
    {
      name: 'Contact Us',
      link: '/ContactUs',
    },
  ]

  const router = useRouter()
  const [menu, setmenu] = useState(false)

  return (
    <header
      className={` fixed top-0 z-[999] w-full py-1.5 duration-300 lg:z-20 2xl:px-24 ${
        scrollPosition > 0 ? 'bg-white shadow-md' : ''
      } `}
    >
      <nav className="relative z-50 text-sm">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex w-full items-center justify-between md:w-32">
            <div>
              <Link href="/">
                <div className="w-24 cursor-pointer sm:w-32 lg:w-36">
                  <Image src={Logo} alt="fess manager logo" className="" />
                </div>
              </Link>
            </div>
            <div className="mr-3 md:hidden" onClick={() => setmenu(!menu)}>
              {menu ? (
                <RxCross2 className="text-xl xs:text-2xl" />
              ) : (
                <HiMenu className="text-xl xs:text-2xl" />
              )}
            </div>
          </div>
          <div
            className={` ${
              menu
                ? 'top-16 opacity-100 sm:top-[60px]'
                : 'top-[-500px] opacity-0 md:opacity-100'
            } absolute w-full 
          bg-black pt-5 duration-500 md:static md:mr-16 md:flex md:items-center md:bg-transparent md:pt-0 lg:mr-16`}
          >
            <div
              className="|| flex h-full w-full flex-col items-start space-y-5 px-5 text-left md:flex-row md:items-center 
            md:justify-end md:space-x-7 md:space-y-0"
            >
              {NavLink.map(({ link, name }) => (
                <Link name={name} key={name} href={link}>
                  <a
                    className={`${
                      router.pathname === link
                        ? 'border-x-2 border-[#b19777] px-2 text-[#b19777]'
                        : ' text-white md:text-black'
                    } text-[15px] font-semibold hover:text-[#b19777]`}
                  >
                    {name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="my-5 w-full px-5 md:my-3 md:w-32 ">
              <Link href="/Quotation">
                <a className="btn1 group z-50 w-full border border-white py-1 text-[12px] text-lg font-semibold text-white hover:text-white md:border-black md:text-black">
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
