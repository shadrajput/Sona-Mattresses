import { FiShoppingCart } from "react-icons/fi"
import { SiAdguard } from "react-icons/si"
import { AiOutlinePercentage } from "react-icons/ai"
import { BsCreditCard } from "react-icons/bs"
import { TbCertificate } from "react-icons/tb"
import { BiMessageCheck } from "react-icons/bi"

export default function Services() {
    return (
        <div className='bg-white xl:px-32 xl:py-10'>
            <div className='py-10 space-y-10 xl:space-y-14'>
                <div className='grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 px-10 gap-10  '>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <FiShoppingCart className='text-4xl text-[#b19777] relative' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            Free Shipping
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>Nullam sed ultricies erat, nec euismod metus.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <SiAdguard className='text-4xl text-[#b19777]' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            5 Years Guarantee
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>Vestibulum vitae diam sit amet massa imperdiet ornare.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <AiOutlinePercentage className='text-4xl text-[#b19777]' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            Discount System
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>Praesent vitae rutrum sapien. Suspendisse potenti.</p>
                    </div>
                </div>
                <div className='grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 px-10 gap-10 '>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <BsCreditCard className='text-4xl text-[#b19777]' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            Online Payments
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>Integer ex diam, ornare eget eleifend a lorem.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <TbCertificate className='text-4xl text-[#b19777]' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            Certified Products
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>Aliquam erat volutpat. Duis at velit lorem elit.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center group'>
                        <div className="group-hover:translate-y-0 duration-300 translate-y-2 mb-2">
                            <BiMessageCheck className='text-4xl text-[#b19777]' />
                        </div>
                        <h1 className='font-bold pt-6'>
                            Good Support
                        </h1>
                        <p className='font-light pt-3 text-sm text-center'>Duis eu nisl sed quam iaculis varius at vitae justo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

