
import { FaBed } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { MdHighQuality } from "react-icons/md"
import Image from "next/image";
import myLogo from "../../public/images/FeesManagerLogo.png"
import About1 from "../../public/images/abo-03.webp"
import About2 from "../../public/images/abo-02.webp"
import About3 from "../../public/images/abo-01.webp"
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import Subscribe from '@/components/Subscribe';


export default function AboutUs() {
  return (
    <>
      <Header />
      <section
        id="testimonials"
        aria-labelledby="testimonials-title"
        className="bg-slate-50 py-10">
        <div className="w-full flex justify-center items-center ">
          <div className='max-w-3xl'>
            <p className='uppercase font-semibold text-[#ae9775] text-center'> | About Us</p>
            <h2
              id="testimonials-title"
              className="font-display text-3xl font-semibold tracking-tight text-center text-slate-900 sm:text-4xl"
            >
              Why Sona Mattresses?
            </h2>
            <p className="mt-4 text-lg tracking-tight text-center text-slate-700">
              Our software is so simple that people can’t help but fall in love
              with it. Simplicity is easy when you just skip tons of
              mission-critical features.
            </p>
          </div>
        </div>
        <div className='px-40'>

          <div className='grid grid-cols-2 justify-center items-center w-full gap-20 py-14 '>
            <div className=''>
              <Image src={About1} alt="fess manager logo" className='rounded-lg w-20' />
            </div>
            <div className='space-y-5 py-5'>
              <FaBed className='text-[#ae9775]  text-4xl' />
              <h1 className='text-3xl font-semibold '>Mattress for healthy sleep</h1>
              <p className='text-gray-500'>Pellentesque gravida scelerisque pretium. Quisque ut lacus quis neque lacinia lacinia. Ut eget augue nec ipsum pharetra venenatis. Nullam eget lacus sed lorem vehicula facilisis. Maecenas blandit nisi eu scelerisque tempus.</p>
            </div>
          </div>
          <div className='grid grid-cols-2 justify-center items-center w-full gap-20 py-14 '>
            <div className='space-y-5  py-5 flex flex-col justify-end items-end'>
              <AiFillHome className='text-[#ae9775]  text-4xl ' />
              <h1 className='text-3xl font-semibold '>Mattress beams with quality</h1>
              <p className='text-gray-500 text-right'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla pharetra elit erat, ac rhoncus orci aliquet in. Nullam bibendum elit sed leo malesuada, a lacinia magna elementum. Curabitur vitae sem at libero.</p>
            </div>
            <div className=''>
              <Image src={About2} alt="fess manager logo" className='rounded-lg' />
            </div>
          </div>
          <div className='grid grid-cols-2 justify-center items-center w-full gap-20 py-14 '>
            <div className=''>
              <Image src={About3} alt="fess manager logo" className='rounded-lg' />
            </div>
            <div className='space-y-5 py-5'>
              <MdHighQuality className='text-[#ae9775] text-4xl' />
              <h1 className='text-3xl font-semibold '>Quality assured, rest assured.</h1>
              <p className='text-gray-500'>Donec sem neque, tempor sed mi eu, congue tincidunt dolor. Proin in scelerisque arcu, vel aliquet mauris. Suspendisse potenti. Pellentesque nec nibh mi. Nam vulputate, sapien et sagittis malesuada, libero leo bibendum pendisse.</p>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  )
}
