import Image from "next/image";
import image from "../../public/images/bedroom-interior.jpg"

export default function Subscribe() {
    return (
        <>
            <div className='h-[400px] relative'>
                <Image src={image} alt="fess manager logo" className='' />
                <div className="h-[115px] sm:h-[205px] md:h-[245px] lg:h-[325px] xl:h-[400px] 2xl:h-[487px] hi w-full bg-black/70 absolute top-0 ">
                </div>
                <div className="flex flex-col justify-center items-center absolute left-6 top-3 sm:left-36 sm:top-10 lg:left-72 lg:top-20  xl:top-[30%] xl:left-[35%] ">
                    <h1 className="text-[#b19777] font-semibold sm:text-xl md:text-2xl">Subscribe for Members</h1>
                    <h1 className="text-white md:text-2xl sm:text-xl font-semibold xl:py-3">to Receive Latest News and Special Offers</h1>
                    <form action="" className="">
                        <div className="flex mt-2 md:mt-5">
                            <input type="text"
                                placeholder="Your email..."
                                className="px-5 py-[2px] sm:py-1 md:py-2 lg:py-3 md:w-80 2xl:w-96 2xl:py-4 focus:outline-none"
                            />
                            <button className='btn3 px-3 text-sm text-white font-semibold z-50'>
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
