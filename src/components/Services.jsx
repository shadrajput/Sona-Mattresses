import { AiFillSetting } from "react-icons/ai"
import { SiAdguard } from "react-icons/si"
import { AiOutlinePercentage } from "react-icons/ai"
import { BsCreditCard } from "react-icons/bs"
import { TbCertificate } from "react-icons/tb"
import { BiMessageCheck } from "react-icons/bi"

export default function Services() {
    return (
        <div className='bg-white xl:px-32 xl:py-14'>
            <div className='py-10 space-y-10 xl:space-y-20'>
                <div className='grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 px-10 gap-10  '>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <AiFillSetting className='text-4xl text-[#b19777] relative' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            Costomis size Mattress
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>We are provied customize size mattress provide as per customer requirement.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <SiAdguard className='text-4xl text-[#b19777]' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            7 Years Guarantee
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>We are provide 7 year mattress guarantee for customer saticfaction. </p>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <AiOutlinePercentage className='text-4xl text-[#b19777]' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            Discount System
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>There is also a very good discount offer for our customers</p>
                    </div>
                </div>
                <div className='grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 px-10 gap-10 '>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <BsCreditCard className='text-4xl text-[#b19777]' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            All Payments option accepted
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>Customer can pay with all payment options here..</p>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <TbCertificate className='text-4xl text-[#b19777]' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            Certified Products
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>Our all product is registered and certified..</p>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <img src="icons/paper-wrap.png" alt="" srcset="" className="w-10" />
                        </div>
                        <h1 className='font-bold pt-6'>
                            Mattress Roll Packing
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>
                            We provide roll packing to the customer for ease of transportation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

