import Image from "next/image";
import image from "../../public/images/bedroom-interior.jpg"

export default function Subscribe() {
    return (
        <div className='h-[400px] relative'>
            <Image src={image} alt="fess manager logo" className='' />
            <div className="h-[400px] w-full bg-black/70 absolute top-0 ">
            </div>
            <div className="flex flex-col justify-center items-center absolute top-[28%] left-[35%]">
                <h1 className="text-[#ae9775] font-semibold text-2xl">Subscribe for Members</h1>
                <h1 className="text-white text-2xl font-semibold py-3">to Receive Latest News and Special Offers</h1>
                <form action="">
                    <div className="flex mt-5">
                        <input type="text"
                            placeholder="Your email..."
                            className="px-5 w-80 focus:outline-none"
                        />
                        <button className="uppercase bg-[#ae9775] py-4 px-8 text-white  font-semibold text-sm">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
