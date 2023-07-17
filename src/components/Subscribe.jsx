import Image from "next/image";
import image from "../../public/images/Home-image-4.webp"
import image2 from "../../public/images/bedroom-interior.jpg"

export default function Subscribe() {
    return (
        <>
            <div className='relative'>
                <div className="h-96 lg:w-full flex 2xl:h-[350px]">
                    <Image src={image} alt="fess manager logo" className='w-1/2' />
                    <Image src={image2} alt="fess manager logo" className='w-1/2' />
                </div>
                <div className="h-full w-full bg-black/70 absolute top-0 ">
                </div>
                <div className="flex flex-col justify-center items-center absolute left-2 top-12 sm:left-20 sm:top-20 md:left-[20%] lg:left-72 lg:top-20 xl:top-[12%] xl:left-[32%] ">
                    <h1 className="text-[#b19777] font-semibold text-2xl sm:mb-5">Subscribe for Members</h1>
                    <h1 className="text-white text-2xl text-center font-semibold xl:py-3">to Receive Latest News and Special Offers</h1>
                    <form action="" className="">
                        <div className="flex mt-5 flex-col w-full">
                            <input type="text"
                                placeholder="Your email..."
                                className="px-5 py-3 w-full md:py-2 lg:py-3 md:w-80 2xl:w-96 2xl:py-4 focus:outline-none"
                            />
                            <button className='btn3 px-3 py-3 mt-5 text-sm text-white font-semibold z-50'>
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
