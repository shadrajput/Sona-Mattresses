import React from 'react'
import { Header } from '../components/Header'
import Subscribe from '../components/Subscribe'
import { Footer } from '../components/Footer'
import Image from "next/image";
import mattrest from "../../public/images/mat_05.jpg"
import { BiRupee } from "react-icons/bi"
import Link from 'next/link'

export default function Product() {
    return (
        <>
            <Header />
            <div className='flex justify-center items-center pt-16'>
                <div className='grid grid-rows-1 gap-10 px-10 pt-10 md:grid-cols-2 md:pt-20 md:px-20 lg::gap-20 '>
                    <div className='w-full'>
                        <Image src={mattrest} alt="fess manager logo" className='rounded-lg ' />
                    </div>
                    <div className='lg:pr-20'>
                        <h1 className='text-[#b19777] font-semibold text-4xl'>Sona Mattrest</h1>
                        <p className='font-light py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className='flex items-center text-3xl font-semibold'>
                            <BiRupee />

                            <h1>
                                549.00
                            </h1>
                        </div>
                        <div className='flex items-center text-xl font-semibold space-x-3 py-5'>
                            <span className='text-2xl text-[#b19777]'>Size  : </span>
                            <span className='border border-[#b19777] px-3 shadow-sm rounded-lg'>4</span>
                            <span>&</span>
                            <span className='border border-[#b19777] px-3 shadow-sm rounded-lg'>5</span>
                        </div>
                        <div className='flex items-center text-xl font-semibold space-x-3 py-2'>
                            <span className='text-2xl text-[#b19777]'>Materials  : </span>
                            <span >Spring</span>
                        </div>
                        <div>
                            <Link href="/ContactUs">
                                <button className='btn3 font-semibold text-[12px] text-white z-50 group '>
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:px-40 lg:pt-10 flex flex-col justify-center w-full items-center px-10 '>
                <div>
                    <h1 className='text-center font-semibold'>Description </h1>
                    <div className=' flex justify-center items-center py-2'>
                        <div className='bg-[#b19777] h-[2px] w-24'>

                        </div>
                    </div>
                </div>
                <p className='font-light text-sm text-center py-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>
            <div className=' py-10 px-10 lg:px-40 lg:py-20'>
                <h1 className='text-center font-semibold text-4xl'>Images </h1>
                <div className='grid grid-rows-1 sm:grid-cols-3 py-10 gap-20'>
                    <div>
                        <Image src={mattrest} alt="fess manager logo" className='rounded-lg ' />

                    </div>
                    <div>
                        <Image src={mattrest} alt="fess manager logo" className='rounded-lg ' />

                    </div>
                    <div>
                        <Image src={mattrest} alt="fess manager logo" className='rounded-lg ' />

                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>

    )
}
