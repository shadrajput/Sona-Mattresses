import Image from "next/image";
import image from "../../public/images/bedroom-interior.jpg"

export default function Subscribe() {
    return (
        <>
            <div className='relative '>
                <div className="">
                    <Image src={image} alt="fess manager logo" className='' />
                </div>
                <div className="h-full sm:h-[205px] md:h-[245px] lg:h-[325px] xl:h-[400px] 2xl:h-[487px] hi w-full bg-black/70 absolute top-0 ">
                </div>
                <div className="flex flex-col h-full  justify-start items-center absolute left-2 top-10 sm:left-36 sm:top-10 lg:left-72 lg:top-20  xl:top-[30%] xl:left-[35%] ">
                    <h1 className="text-[#b19777] font-semibold text-2xl">Subscribe for Members</h1>
                    <h1 className="text-white text-2xl font-semibold xl:py-3 text-center">to Receive Latest News and Special Offers</h1>
                    <form action="" className="">
                        <div className="flex mt-5 md:mt-5 flex-col ">
                            <input type="text"
                                placeholder="Your email..."
                                className="px-5 py-3 sm:py-1 md:py-2 lg:py-3 md:w-80 2xl:w-96 2xl:py-4 focus:outline-none"
                            />
                            <button className='btn3 py-3 px-3 text-sm text-white font-semibold z-50'>
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
