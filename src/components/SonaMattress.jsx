import Image from "next/image";
import image from "../../public/images/mattress-image.jpg"
import maticon1 from "../../public/Icons/maticon1.png"
import maticon2 from "../../public/Icons/maticon2.png"
import maticon3 from "../../public/Icons/maticon3.png"

export default function SonaMattress() {
    return (
        <div className='flex flex-col justify-center items-center md:items-start px-10 py-5 xl:px-36 2xl:py-20'>
            <div className='grid md:grid-cols-2'>
                <div className="order-2 md:order-1 md:mt-10">
                    <h1 className="text-3xl lg:text-4xl font-bold text-[#b19777]">Comfort mattress</h1>
                    <h1 className="text-black text-3xl lg:text-4xl font-bold">for your healthy sleep</h1>
                    <p className="font-light text-sm py-5">Quisque bibendum, magna ac auctor aliquet, velit sapien interdum arcu, id malesuada erat dolor sit amet risus. In sed neque sit amet leo sagittis efficitur. Maecenas mattis a ante sit amet scelerisque.</p>
                    <div className='grid grid-rows-3 justify-center  sm:grid-cols-3 sm:grid-rows-1 xs:hidden 2xl:grid'>
                        <div className='flex flex-col justify-center items-center sm:items-start group'>
                            <Image src={maticon1} alt="fess manager logo" className='w-full h-full group-hover:translate-y-0 translate-y-2 duration-300' />
                            <h1 className='font-bold pt-6 sm:text-base xl:text-lg sm:ml-4 md:ml-6'>
                                No springs
                            </h1>
                        </div>
                        <div className='flex flex-col justify-center items-center sm:items-start group'>
                            <Image src={maticon2} alt="fess manager logo" className='w-full h-full relative group-hover:translate-y-0 translate-y-2 duration-300' />
                            <h1 className='font-bold pt-6 sm:text-base xl:text-lg sm:ml-4 md:ml-6'>
                                High quality latex
                            </h1>
                        </div>
                        <div className='flex flex-col justify-center items-center sm:items-start group'>
                            <Image src={maticon3} alt="fess manager logo" className='w-full h-full relative group-hover:translate-y-0 translate-y-2 duration-300' />
                            <h1 className='font-bold pt-6 sm:text-base xl:text-lg sm:ml-4 md:ml-6'>
                                Glueless technology
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 py-2 w-full flex justify-center items-center ">
                    <div className="sm:w-96 xl:w-[400px] 2xl:w-full">
                        <Image src={image} alt="fess manager logo" className='w-full h-full relative' />
                    </div>
                </div>

            </div>
            <div className='grid grid-rows-3 justify-center items-center w-full sm:grid-cols-3 sm:grid-rows-1 2xl:hidden'>
                <div className='flex flex-col justify-center items-center w-full group'>
                    <Image src={maticon1} alt="fess manager logo" className='w-full h-full group-hover:translate-y-0 translate-y-2 duration-300' />
                    <h1 className='font-bold pt-6 sm:text-base xl:text-lg sm:ml-4 md:ml-6'>
                        No springs
                    </h1>
                </div>
                <div className='flex flex-col justify-center items-center sm:items-start group'>
                    <Image src={maticon2} alt="fess manager logo" className='w-full h-full relative group-hover:translate-y-0 translate-y-2 duration-300' />
                    <h1 className='font-bold pt-6 sm:text-base xl:text-lg sm:ml-4 md:ml-6'>
                        High quality latex
                    </h1>
                </div>
                <div className='flex flex-col justify-center items-center sm:items-start group'>
                    <Image src={maticon3} alt="fess manager logo" className='w-full h-full relative group-hover:translate-y-0 translate-y-2 duration-300' />
                    <h1 className='font-bold pt-6 sm:text-base xl:text-lg sm:ml-4 md:ml-6'>
                        Glueless technology
                    </h1>
                </div>
            </div>
        </div>
    )
}

