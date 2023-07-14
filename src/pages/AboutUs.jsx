
import { Container } from '@/components/Container'
import { FaBed } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { MdHighQuality } from "react-icons/md"
import Image from "next/image";
import myLogo from "../../public/images/FeesManagerLogo.png"
import Link from 'next/link'


export default function AboutUs() {
  return (
    <>
      <Container>
        <div className="w-full flex justify-between items-center py-10 ">
          <Link href="/">
            <a>
              {/* <Logo className="mb-2 h-10 w-auto" /> */}
              <Image src={myLogo} alt="fess manager logo" width="100%" height="100%" />
            </a>
          </Link>
          <div className='max-w-3xl'>
            <p className='uppercase text-right text-3xl font-semibold text-[#14185a]'> About Us |</p>
            {/* <h2
              id="testimonials-title"
              className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Why Sona Mattresses?
            </h2> */}
          </div>
        </div>
        <div className='grid grid-cols-2 justify-center items-center w-full gap-20 py-14 '>
          <div className='bg-red-200'>
            {/* <img src={Image1} alt="" /> */}
            <h1>img</h1>
          </div>
          <div className='space-y-5 py-5'>
            <FaBed className='text-blue-800 text-4xl' />
            <h1 className='text-3xl font-semibold '>Mattress for healthy sleep</h1>
            <p className='text-gray-500'>Pellentesque gravida scelerisque pretium. Quisque ut lacus quis neque lacinia lacinia. Ut eget augue nec ipsum pharetra venenatis. Nullam eget lacus sed lorem vehicula facilisis. Maecenas blandit nisi eu scelerisque tempus.</p>
          </div>
        </div>
        <div className='grid grid-cols-2 justify-center items-center w-full gap-20 py-14 '>
          <div className='space-y-5  py-5 flex flex-col justify-end items-end'>
            <AiFillHome className='text-blue-800 text-4xl ' />
            <h1 className='text-3xl font-semibold '>Mattress beams with quality</h1>
            <p className='text-gray-500 text-right'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla pharetra elit erat, ac rhoncus orci aliquet in. Nullam bibendum elit sed leo malesuada, a lacinia magna elementum. Curabitur vitae sem at libero.</p>
          </div>
          <div className='bg-red-200'>
            {/* <img src={Image1} alt="" /> */}
            <h1>img</h1>
          </div>
        </div>
        <div className='grid grid-cols-2 justify-center items-center w-full gap-20 py-14 '>
          <div className='bg-red-200'>
            {/* <img src={Image1} alt="" /> */}
            <h1>img</h1>
          </div>
          <div className='space-y-5 py-5'>
            <MdHighQuality className='text-blue-800 text-4xl' />
            <h1 className='text-3xl font-semibold '>Quality assured, rest assured.</h1>
            <p className='text-gray-500'>Donec sem neque, tempor sed mi eu, congue tincidunt dolor. Proin in scelerisque arcu, vel aliquet mauris. Suspendisse potenti. Pellentesque nec nibh mi. Nam vulputate, sapien et sagittis malesuada, libero leo bibendum pendisse.</p>
          </div>
        </div>
      </Container>
    </>
  )
}
