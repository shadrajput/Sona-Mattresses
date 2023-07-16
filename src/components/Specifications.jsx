import React from 'react'
import Image from "next/image";
import mat1 from "../../public/Icons/mat_01.png"
import mat2 from "../../public/Icons/mat_02.png"
import mat3 from "../../public/Icons/mat_03.png"
import mat4 from "../../public/Icons/mat_04.png"
import mat5 from "../../public/Icons/mat_05.png"
import mat6 from "../../public/Icons/mat_06.png"

export default function Specifications() {
    return (
        <div className='bg-white px-32 py-10 '>
            <div className='py-20 border-b border-black/20 space-y-24 '>
                <div className='grid grid-cols-3 '>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={mat1} alt="fess manager logo" width="80%" height="80%" className='w-full h-full' />
                        <h1 className='font-bold pt-6'>
                            Eco Materials
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={mat2} alt="fess manager logo" width="80%" height="80%" className='w-full h-full relative' />
                        <h1 className='font-bold pt-7'>
                            Memory Layers
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={mat3} alt="fess manager logo" width="80%" height="80%" className='w-full h-full relative' />
                        <h1 className='font-bold pt-7'>
                            Orthopedic
                        </h1>
                    </div>
                </div>
                <div className='grid grid-cols-3 '>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={mat4} alt="fess manager logo" width="80%" height="80%" className='w-full h-full relative' />
                        <h1 className='font-bold pt-7'>
                            Perfectly Quiet
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={mat5} alt="fess manager logo" width="80%" height="80%" className='w-full h-full relative' />
                        <h1 className='font-bold pt-7'>
                            Double Sized
                        </h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={mat6} alt="fess manager logo" width="80%" height="80%" className='w-full h-full relative' />
                        <h1 className='font-bold pt-7'>
                            Cooling Top
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

