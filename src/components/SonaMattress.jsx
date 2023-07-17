import Image from "next/image";
import image from "../../public/images/mattress-image.jpg"
import maticon1 from "../../public/Icons/maticon1.png"
import maticon2 from "../../public/Icons/maticon2.png"
import maticon3 from "../../public/Icons/maticon3.png"

export default function SonaMattress() {
    return (
        <div className='flex justify-center items-center px-36 py-20'>
            <div className='grid grid-cols-2'>
                <div>
                    <h1 className="text-4xl font-bold text-[#b19777]">Comfort mattress</h1>
                    <h1 className="text-black text-4xl font-bold">for your healthy sleep</h1>
                    <p className="font-light py-5">Quisque bibendum, magna ac auctor aliquet, velit sapien interdum arcu, id malesuada erat dolor sit amet risus. In sed neque sit amet leo sagittis efficitur. Maecenas mattis a ante sit amet scelerisque.</p>
                    <div className='grid grid-cols-3 '>
                        <div className='flex flex-col justify-center items-start group'>
                            <Image src={maticon1} alt="fess manager logo" className='w-full h-full group-hover:translate-y-0 translate-y-2 duration-300' />
                            <h1 className='font-bold pt-6 text-lg ml-6'>
                                No springs
                            </h1>
                        </div>
                        <div className='flex flex-col justify-center items-start group'>
                            <Image src={maticon2} alt="fess manager logo" className='w-full h-full relative group-hover:translate-y-0 translate-y-2 duration-300' />
                            <h1 className='font-bold pt-6 text-lg ml-6'>
                                High quality latex
                            </h1>
                        </div>
                        <div className='flex flex-col justify-center items-start group'>
                            <Image src={maticon3} alt="fess manager logo" className='w-full h-full relative group-hover:translate-y-0 translate-y-2 duration-300' />
                            <h1 className='font-bold pt-6 text-lg ml-6'>
                                Glueless technology
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="p-5">
                        <Image src={image} alt="fess manager logo" className='w-full h-full relative' />
                    </div>
                </div>
            </div>
        </div>
    )
}

