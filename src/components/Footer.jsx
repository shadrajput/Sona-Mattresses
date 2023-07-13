import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import Image from "next/image";
import myLogo from "../../public/images/FeesManagerLogo.png"


export function Footer() {
  return (
    <footer className="bg-slate-200 ">
      <Container>
        <div className=" py-10 space-y-10">
          {/* <Logo className="mx-auto h-10 w-auto"/> */}
          {/* <center>
            <Image src={myLogo} alt="fess manager logo" width="100%" height="100%" />
          </center> */}
            <div className="flex justify-center items-center space-x-5">
              <Link href="https://www.instagram.com/feesmanager/" target="_blank">
                <a className="group">
                  <span className="sr-only">Sona Mattresses on Instagram</span>
                  <AiFillFacebook className='h-6 w-6 fill-slate-500 group-hover:fill-slate-700' />
                </a>
              </Link>
              <Link href="https://www.instagram.com/feesmanager/" target="_blank">
                <a className="group">
                  <span className="sr-only">Sona Mattresses on Facebook</span>
                  <AiOutlineInstagram className='h-6 w-6 fill-slate-500 group-hover:fill-slate-700' />
                </a>
              </Link>
          </div>
          <nav className=" text-sm" aria-label="quick links">
            <ul className="-my-1 flex justify-center space-x-6">
              <li>
                <Link href="#features">
                  <a className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  About Us
                  </a>
                </Link>
              </li>
              <div className='w-[3px] bg-black'>.</div>
              <li>
                <Link href="#testimonials">
                  <a className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Contact Us
                  </a>
                </Link>
              </li>
              <div className='w-[3px] bg-black'>.</div>
              <li>
                <Link href="#pricing">
                  <a className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Why Sona
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col items-center  sm:flex-row-reverse sm:justify-center">
            <p className="mt-6 text-sm text-slate-500 sm:mt-0">
              Copyright &copy; {new Date().getFullYear()} FeesManager. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
