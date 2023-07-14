import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Image from "next/image";
import myLogo from "../../public/images/FeesManagerLogo.png"


function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <Link href="#features">
                    <a className="block w-full" onClick={() => close()}>
                      Features
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials">
                    <a className="block w-full" onClick={() => close()}>
                      Testimonials
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#pricing">
                    <a className="block w-full" onClick={() => close()}>
                      Pricing
                    </a>
                  </Link>
                </li>
                <li className="border-t border-slate-300/40 pt-4">
                  <Link href="/login">
                    <a className="block w-full">Sign in</a>
                  </Link>
                </li>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export function Header(props) {
  return (
    <header className="">
      <Container>
        <nav className="relative z-50 text-sm">
          <ul className="flex items-center py-6">
            <li>
              <Link href="/">
                <div className="border-4 border-black w-52 py-2 px-4 cursor-pointer">
                  <h1 className="text-center text-black font-semibold uppercase">Sona Mattresses</h1>
                </div>
              </Link>
            </li>
            <div className='w-full flex justify-end items-center'>
              <li className="ml-12 hidden md:block">
                <Link href="/">
                  <a className="rounded-lg py-1 px-2 hover:text-[#ae9775] font-semibold text-[15px]">
                    Home
                  </a>
                </Link>
              </li>
              <li className="ml-12 hidden md:block">
                <Link href="/AboutUs">
                  <a className="rounded-lg py-1 px-2 hover:text-[#ae9775] font-semibold text-[15px]">
                    About us
                  </a>
                </Link>
              </li>
              <li className="ml-6 hidden md:block">
                <Link href="">
                  <a className="rounded-lg py-1 px-2 hover:text-[#ae9775] font-semibold text-[15px]">
                    Product
                  </a>
                </Link>
              </li>
              <li className="ml-6 hidden md:block">
                <Link href="/ContactUs">
                  <a className="rounded-lg py-1 px-2 hover:text-[#ae9775] font-semibold text-[15px]">
                    Contact 
                  </a>
                </Link>
              </li>
              <li className="ml-6 hidden md:block">
                <Link href="/Testimonials">
                  <a className="rounded-lg py-1 px-2 hover:text-[#ae9775] font-semibold text-[15px]">
                    Testimonials 
                  </a>
                </Link>
              </li>

            </div>
            <li className="ml-5 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
