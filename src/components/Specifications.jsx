import React from 'react'
import Image from "next/image";
const mat1 = "/Icons/mat_01.png"
const mat2 = "/Icons/mat_02.png"
const mat3 = "/Icons/mat_03.png"
const mat4 = "/Icons/mat_04.png"
const mat5 = "/Icons/mat_05.png"
const mat6 = "/Icons/mat_06.png"

export default function Specifications() {
    return (
        <div className='bg-white xl:px-32 py-10 '>
            <div className='xl:py-20 border-b border-black/20 space-y-10 lg:space-y-20 mx-10 pb-5  '>
                <div className='grid w-full  grid-cols-2 sm:grid-cols-3 sm:grid-rows-1 gap-5 md:gap-10'>
                    <div className='flex flex-col w-full justify-center items-center group'>
                        <div className='group-hover:translate-y-0 duration-300 translate-y-2 mb-2'>
                            <Image src={mat1} alt="" width="80%" height="80%" className='w-full h-full ' />
                        </div>
                        <h1 className='font-bold pt-7'>
                            Eco Materials
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                         <div className='group-hover:translate-y-0 duration-300 translate-y-2 mb-2'>
                            <Image src={mat2} alt="" width="80%" height="80%" className='w-full h-full relative' />
                         </div>
                        <h1 className='font-bold pt-7'>
                            Memory Layers
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                         <div className='group-hover:translate-y-0 duration-300 translate-y-2 mb-2'>
                            <Image src={mat3} alt="" width="80%" height="80%" className='w-full h-full relative' />
                         </div>
                        <h1 className='font-bold pt-7'>
                            Orthopedic
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className='group-hover:translate-y-0 duration-300 translate-y-2 mb-2'>
                            <Image src={mat4} alt="" width="80%" height="80%" className='w-full h-full relative' />
                         </div>
                        <h1 className='font-bold pt-7'>
                            Perfectly Quiet
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className='group-hover:translate-y-0 duration-300 translate-y-2 mb-2'>
                            <Image src={mat5} alt="" width="80%" height="80%" className='w-full h-full relative' />
                         </div>
                        <h1 className='font-bold pt-7'>
                            Double Sized
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className='group-hover:translate-y-0 duration-300 translate-y-2 mb-2'>
                            <Image src={mat6} alt="" width="80%" height="80%" className='w-full h-full relative' />
                         </div>
                        <h1 className='font-bold pt-7'>
                            Cooling Top
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

