import { FaBed } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { MdHighQuality } from 'react-icons/md'
import Image from 'next/image'
import myLogo from '../../public/images/FeesManagerLogo.png'
import About1 from '../../public/images/abo-03.webp'
import About2 from '../../public/images/abo-02.webp'
import About3 from '../../public/images/abo-01.webp'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Subscribe from '@/components/Subscribe'

export default function AboutUs() {
  return (
    <>
      <Header />
      <section
        id="testimonials"
        aria-labelledby="testimonials-title"
        className="bg-slate-50 pb-5 pt-28 xl:pb-10"
      >
        <div className="flex w-full items-center justify-center px-7 ">
          <div className="max-w-3xl">
            <p className="text-center font-semibold uppercase text-[#b19777]">
              {' '}
              | About Us
            </p>
            <h2
              id="testimonials-title"
              className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              Why Sona Mattresses?
            </h2>
            <p className="mt-4 text-center text-lg tracking-tight text-slate-700">
              Our Mattress perfect for all sleepers, budget-friendly, and
              designed for uninterrupted, rejuvenating rest.
            </p>
          </div>
        </div>
        <div className="xl:px-40">
          <div className="mt-10 grid w-full grid-rows-2 items-center justify-center px-10 sm:grid-cols-2 sm:grid-rows-1 sm:gap-5  md:gap-10 xl:gap-16 xl:py-14">
            <div className="">
              <Image
                src={About1}
                alt="Sona Mattresses"
                className="w-20 rounded-lg"
              />
            </div>
            <div className="space-y-3 lg:space-y-5 lg:py-5">
              <FaBed className="text-4xl  text-[#b19777]" />
              <h1 className=" font-semibold md:text-2xl lg:text-3xl ">
                Stay cool and cozy all night long.
              </h1>
              <p className="text-gray-500 md:text-sm lg:text-base">
                Our mattress is crafted with breathable materials that promote
                airflow, keeping you comfortable in any season.
              </p>
            </div>
          </div>
          <div className="mt-10 grid w-full grid-rows-2 items-center justify-center px-10 sm:grid-cols-2 sm:grid-rows-1 sm:gap-5  md:gap-10 xl:gap-16 xl:py-14">
            <div className="sm:order-2">
              <Image
                src={About2}
                alt="fess manager logo"
                className="w-20 rounded-lg"
              />
            </div>
            <div className="flex flex-col items-end justify-end space-y-3 sm:order-1 lg:space-y-5 lg:py-5">
              <AiFillHome className="text-4xl  text-[#b19777]" />
              <h1 className=" font-semibold md:text-2xl lg:text-3xl ">
                Premium Comfort Mattress
              </h1>
              <p className="text-end text-gray-500 md:text-sm lg:text-base">
                Get a luxurious sleep experience with our mattress, meticulously
                engineered to provide the utmost comfort that cradles your body
                in pure relaxation.
              </p>
            </div>
          </div>
          <div className="mt-10 grid w-full grid-rows-2 items-center justify-center px-10 sm:grid-cols-2 sm:grid-rows-1 sm:gap-5  md:gap-10 xl:gap-16 xl:py-14">
            <div className="">
              <Image
                src={About3}
                alt="fess manager logo"
                className="w-20 rounded-lg"
              />
            </div>
            <div className="space-y-3 lg:space-y-5 lg:py-5">
              <MdHighQuality className="text-4xl  text-[#b19777]" />
              <h1 className=" font-semibold md:text-2xl lg:text-3xl ">
                Invest in quality sleep that stands the test of time
              </h1>
              <p className="text-gray-500 md:text-sm lg:text-base">
                Our mattress is expertly crafted using premium materials,
                ensuring it remains a steadfast companion for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  )
}
