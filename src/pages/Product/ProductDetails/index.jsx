import React from 'react'
import { Header } from '../../../components/Header'
import Subscribe from '../../../components/Subscribe'
import { Footer } from '../../../components/Footer'
import Image from "next/image";
import mattrest from "../../../../public/images/mat_05.jpg"
import Link from 'next/link'

export default function ProductDetails() {

    const [selectsize, setselectsize] = React.useState("Regular")

    const HandleSize = e => {
        setselectsize(e.target.value)
    };

    const SingleSizes = [
        {
            name: "Centimeter",
            size1: "91.50 x 183 x 20.32"
        },
        {
            name: "Inch",
            size1: "36 x 72 x 8"
        },
        {
            name: "Feet",
            size1: "3 x 6 x 0.67"
        },

    ]
    const DoubleSizes = [
        {
            name: "Centimeter",
            size1: "122 x 183 x 25.40"
        },
        {
            name: "Inch",
            size1: "48 x 72 x 10"
        },
        {
            name: "Feet",
            size1: "4 x 6 x 0.67"
        },

    ]
    const KingSizes = [
        {
            name: "Inch",
            size1: "72 x 78 x 12"
        },
        {
            name: "Inch",
            size1: "72 x 84 x 12"
        },

    ]
    const QueenSizes = [
        {
            name: "Centimeter",
            size1: "152.4 x 183 x 28",
            size2: "152.4 x 200 x 28"
        },
        {
            name: "Inch",
            size1: "60 x 78 x 12",
            size2: "60 x 72 x 10"
        },
        {
            name: "Feet",
            size1: "5 x 6.5 x 0.67",
            size2: "5 x 6 x 0.67",
        },


    ]

    return (
        <>
            <Header />
            <div className='flex justify-center items-center pt-16'>
                <div className='grid grid-rows-1 gap-10 px-10 pt-10 md:grid-cols-2 md:pt-20 md:px-20 lg::gap-20 '>
                    <div className='w-full'>
                        <Image src={mattrest} alt="fess manager logo" className='rounded-lg ' />
                    </div>
                    <div className='lg:pr-20'>
                        <h1 className='text-black font-semibold text-4xl'>Pocket Spring Mattress</h1>
                        <p className='font-light text-slate-500 py-4 text-sm'>
                            Pocket spring mattresses offer numerous benefits, making them a popular choice for many individuals. These mattresses are designed to provide exceptional support and comfort by using individual pocketed springs that respond independently to the body's weight and shape, promoting proper spinal alignment and reducing pressure points.</p>
                        <div className='py-4 ml-4'>
                            <ul className='text-[14px] text-slate-600 space-y-1 list-disc '>
                                <li className=''>Hard cotton felt layers</li>
                                <li className=''>High Density foam</li>
                                <li className=''>Medium firm for all sleeping positions</li>
                                <li className=''>Maximum Durability: 7 Year Warranty</li>
                            </ul>
                        </div>
                        <div>
                            <div className='flex flex-col w-full items-start pt-4'>
                                <div className='flex flex-col w-1/3'>
                                    <label htmlFor="" className='text-[14px] text-[#b19777] font-semibold'>Category</label>
                                    <div className='flex items-center space-x-5 mt-2'>
                                        <button value="Regular"
                                            onClick={HandleSize}
                                            className={`${selectsize == "Regular" ? "border-[#b19777] bg-[#b19777]  font-semibold text-white" : "font-light"} border px-5 py-[5px] text-sm rounded-full hover:border-[#b19777] duration-300 font-light`}>
                                            Regular
                                        </button>
                                        <button value="Single"
                                            onClick={HandleSize}
                                            className={`${selectsize == "Single" ? "border-[#b19777] bg-[#b19777]  font-semibold text-white" : "font-light"} border px-5 py-[5px] text-sm rounded-full hover:border-[#b19777] duration-300 font-light`}>
                                            Single
                                        </button>
                                        <button value="Double"
                                            onClick={HandleSize}
                                            className={`${selectsize == "Double" ? "border-[#b19777] bg-[#b19777] font-semibold  text-white" : "font-light"} border px-5 py-[5px] text-sm rounded-full hover:border-[#b19777] duration-300 font-light`}>
                                            Double
                                        </button>
                                        <button value="King"
                                            onClick={HandleSize}
                                            className={`${selectsize == "King" ? "border-[#b19777] bg-[#b19777]  font-semibold text-white" : "font-light"} border px-5 py-[5px] text-sm rounded-full hover:border-[#b19777] duration-300 font-light`}>
                                            King
                                        </button>
                                        <button value="Queen"
                                            onClick={HandleSize}
                                            className={`${selectsize == "Queen" ? "border-[#b19777] bg-[#b19777] font-semibold  text-white" : "font-light"} border px-5 py-[5px] text-sm rounded-full hover:border-[#b19777] duration-300 font-light`}>
                                            Queen
                                        </button>
                                    </div>
                                </div>
                                {
                                    selectsize == "Regular" ?
                                        <div className='flex flex-col mt-4'>
                                            <h1 className='text-[14px] text-[#b19777] font-semibold'>Inch </h1>
                                            <div className='flex items-start flex-wrap '>
                                                <div className='border rounded-md px-2 py-[3px] text-sm'>
                                                    72 x 72 x 10
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        selectsize == "Single" ?
                                            <div className='flex flex-col mt-4'>
                                                <div className='flex items-start flex-wrap gap-3 mt-1'>
                                                    {
                                                        SingleSizes.map((size, item) => {
                                                            return (
                                                                <div className='flex flex-col '>
                                                                    <h1 className='text-[14px] text-[#b19777] font-semibold mb-1'>{size.name}</h1>
                                                                    <div className='border rounded-md px-2 py-[3px] text-sm'>
                                                                        {size.size1}
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            :
                                            selectsize == "Double" ?
                                                <div className='flex flex-col mt-4'>
                                                    <div className='flex items-start flex-wrap gap-3 mt-1'>
                                                        {
                                                            DoubleSizes.map((size, item) => {
                                                                return (
                                                                    <div className='flex flex-col '>
                                                                        <h1 className='text-[14px] text-[#b19777] font-semibold mb-1'>{size.name}</h1>
                                                                        <div className='border rounded-md px-2 py-[3px] text-sm'>
                                                                            {size.size1}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                :
                                                selectsize == "King" ?
                                                    <div className='flex flex-col mt-4'>
                                                        <div className='flex items-start flex-wrap gap-3 mt-1'>
                                                            {
                                                                KingSizes.map((size, item) => {
                                                                    return (
                                                                        <div className='flex flex-col '>
                                                                            <h1 className='text-[14px] text-[#b19777] font-semibold mb-1'>{size.name}</h1>
                                                                            <div className='border rounded-md px-2 py-[3px] text-sm'>
                                                                                {size.size1}
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>

                                                    :
                                                    selectsize == "Queen" ?
                                                        <div className='flex flex-col mt-4'>
                                                            <div className='flex items-start flex-wrap gap-3 mt-1'>
                                                                {
                                                                    QueenSizes.map((size, item) => {
                                                                        return (
                                                                            <div className='flex flex-col space-y-2'>
                                                                                <h1 className='text-[14px] text-[#b19777] font-semibold mb-1'>{size.name}</h1>
                                                                                <div className='border rounded-md px-2 py-[3px] text-sm'>
                                                                                    {size.size1}
                                                                                </div>
                                                                                {
                                                                                    size.size2 ?
                                                                                        <div className='border rounded-md px-2 py-[3px] text-sm'>
                                                                                            {size.size2}
                                                                                        </div>
                                                                                        :
                                                                                        null
                                                                                }
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                        :
                                                        null
                                }
                            </div>

                            <div className='flex items-center py-7 space-x-2  '>
                                <div className=''>
                                    <Link href="/Quotation">
                                        <input type="checkbox"
                                            value="checked"
                                            className='cursor-pointer rounded-sm text-xs h-[13px] focus:outline-none w-[13px]'
                                        />
                                    </Link>
                                </div>
                                <div>
                                    <h1 className='font-semibold text-sm uppercase text-[#b19777] mt-1'>Custom size</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center space-x-5 '>
                            <div className='w-full'>
                                <Link href="/ContactUs">
                                    <button className='btn3 font-semibold text-[12px] text-white z-50 group w-full py-3 '>
                                        Connect with Us
                                    </button>
                                </Link>
                            </div>
                            <div className='w-full'>
                                <Link href="/Quotation">
                                    <button className='btn3 font-semibold text-[12px] text-white z-50 group w-full py-3 '>
                                        Shop Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:px-40 lg:pt-20 flex flex-col justify-center w-full items-center px-10 '>
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
