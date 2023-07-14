import Image from "next/image";
import myLogo from "../../public/images/FeesManagerLogo.png"
import Link from 'next/link'


export  function Footer() {
  return (
    <>
      <div className='py-10 bg-gray-300 h-96'>
        <div className='grid grid-cols-4 '>
          <div className='flex justify-center items-center '>
            <Link href="#">
              <a>
                <Image src={myLogo} alt="fess manager logo" className="" width="100%" height="100%" />

                {/* <span className='text-2xl font-bold '>  Fees</span> */}
                {/* <span className='text-xl font-bold text-blue-600'>  Manager</span> */}
              </a>
            </Link>
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </>
  )
}
