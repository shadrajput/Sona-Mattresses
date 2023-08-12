// import React from 'react'
// import { Header } from '../../../components/Header'
// import Subscribe from '../../../components/Subscribe'
// import { Footer } from '../../../components/Footer'
// import { BsArrowRight } from 'react-icons/bs'
// import Link from 'next/link'
// import {AllProduct} from "../../../components/AllProduct"

// export default function ProductList() {

//     return (
//         <>
//             <Header />
//             <section
//                 id="contact"
//                 aria-labelledby="testimonials-title"
//                 className="bg-slate-50 pb-10 pt-28">
//                 <div className="w-full flex justify-center items-center ">
//                     <div className='max-w-3xl'>
//                         <h2
//                             id="testimonials-title"
//                             className="font-display text-3xl font-semibold tracking-tight text-center text-slate-900 sm:text-4xl"
//                         >
//                             All Products
//                         </h2>
//                         <p className="mt-4 text-lg tracking-tight text-center text-slate-700">
//                             Our All Product is simple that people can’t help but fall in love
//                             with it. Simplicity is easy when you just skip tons of
//                             mission-critical features.
//                         </p>
//                     </div>
//                 </div>
//                 <AllProduct/>
//             </section>

//             {/* <div className='flex justify-center items-center pt-16'>
//                 <div className='grid grid-rows-1 gap-10 px-10 pt-10 md:grid-cols-2 md:pt-20 md:px-20 lg::gap-20 '>
//                     <div className='w-full'>
//                         <Image src={mattrest} alt="fess manager logo" className='rounded-lg ' />
//                     </div>
//                     <div className='lg:pr-20'>
//                         <h1 className='text-[#b19777] font-semibold text-4xl'>Pocket Spring Mattress</h1>
//                         <p className='font-light py-4 text-sm'>
//                             Pocket spring mattresses offer numerous benefits, making them a popular choice for many individuals. These mattresses are designed to provide exceptional support and comfort by using individual pocketed springs that respond independently to the body's weight and shape, promoting proper spinal alignment and reducing pressure points.</p>
//                         <div>
//                             <h1 className='text-[#b19777] text-lg'>Features</h1>
//                             <ul className='text-[14px] font-light text-slate-600 space-y-1 '>
//                                 <li className=''>Knitted jacquared layers</li>
//                                 <li className=''>High Density foam</li>
//                                 <li className=''>7 Years Warranty</li>
//                             </ul>
//                         </div>
//                         <div>
//                             <div className='flex items-center space-x-14 py-4'>
//                                 <div className='flex flex-col w-full'>
//                                     <label htmlFor="" className='text-[14px] text-[#b19777] font-light'>Size</label>
//                                     <select name="" id="" className='py-[2px] text-sm w-full mt-2 border-slate-400 rounded-sm text-slate-500'>
//                                         <option value="Regular">Regular</option>
//                                         <option value="Single">Single</option>
//                                         <option value="Double">Double</option>
//                                         <option value="King">King</option>
//                                         <option value="Queen">Queen</option>
//                                     </select>
//                                 </div>
//                                 <div className='flex flex-col w-full'>
//                                     <label htmlFor="" className='text-[14px] text-[#b19777] font-light'>Dimension</label>
//                                     <select name="" id="" className='py-[2px] text-sm w-full mt-2 border-slate-400 rounded-sm text-slate-500'>
//                                         <option value="Regular">Regular</option>
//                                         <option value="Single">Single</option>
//                                         <option value="Double">Double</option>
//                                         <option value="King">King</option>
//                                         <option value="Queen">Queen</option>
//                                     </select>
//                                 </div>
//                                 <div className='flex-col flex w-full'>
//                                     <label htmlFor="" className='text-[14px] text-[#b19777] font-light'>Height</label>
//                                     <select name="" id="" className='py-[2px] text-sm w-full mt-2 border-slate-400 rounded-sm text-slate-500'>
//                                         <option value="Regular">Regular</option>
//                                         <option value="Single">Single</option>
//                                         <option value="Double">Double</option>
//                                         <option value="King">King</option>
//                                         <option value="Queen">Queen</option>
//                                     </select>
//                                 </div>
//                             </div>
//                             <div className='flex items-center py-3 space-x-2 '>
//                                 <div className=''>
//                                     <input type="checkbox"
//                                         value="checked"
//                                         className='cursor-pointer rounded-sm text-xs h-[13px] focus:outline-none w-[13px]'
//                                         onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div>
//                                     <h1 className='font-semibold text-sm uppercase text-[#b19777]'>Custom size</h1>
//                                 </div>
//                             </div>
//                             <div className={` ${custom == false ? "hidden" : "flex"} items-center space-x-14 py-4`}>
//                                 <div className='flex flex-col w-full'>
//                                     <label htmlFor="" className='text-[14px] text-[#b19777] font-light'>Width</label>
//                                     <select name="" id="" className='py-[2px] text-sm w-full mt-2 border-slate-400 rounded-sm text-slate-500'>
//                                         <option value="Regular">Regular</option>
//                                         <option value="Single">Single</option>
//                                         <option value="Double">Double</option>
//                                         <option value="King">King</option>
//                                         <option value="Queen">Queen</option>
//                                     </select>
//                                 </div>
//                                 <div className='flex flex-col w-full'>
//                                     <label htmlFor="" className='text-[14px] text-[#b19777] font-light'>Length</label>
//                                     <select name="" id="" className='py-[2px] text-sm w-full mt-2 border-slate-400 rounded-sm text-slate-500'>
//                                         <option value="Regular">Regular</option>
//                                         <option value="Single">Single</option>
//                                         <option value="Double">Double</option>
//                                         <option value="King">King</option>
//                                         <option value="Queen">Queen</option>
//                                     </select>
//                                 </div>
//                                 <div className='flex-col flex w-full'>
//                                     <label htmlFor="" className='text-[14px] text-[#b19777] font-light'>Height</label>
//                                     <select name="" id="" className='py-[2px] text-sm w-full mt-2 border-slate-400 rounded-sm text-slate-500'>
//                                         <option value="Regular">Regular</option>
//                                         <option value="Single">Single</option>
//                                         <option value="Double">Double</option>
//                                         <option value="King">King</option>
//                                         <option value="Queen">Queen</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='flex justify-center items-center space-x-5'>
//                             <div className='w-full'>
//                                 <Link href="/ContactUs">
//                                     <button className='btn3 font-semibold text-[12px] text-white z-50 group w-full py-3 mt-5 '>
//                                         Connect with Us
//                                     </button>
//                                 </Link>
//                             </div>
//                             <div className='w-full'>
//                                 <Link href="/ContactUs">
//                                     <button className='btn3 font-semibold text-[12px] text-white z-50 group w-full py-3 mt-5 '>
//                                         Shop Now
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='lg:px-40 lg:pt-20 flex flex-col justify-center w-full items-center px-10 '>
//                 <div>
//                     <h1 className='text-center font-semibold'>Description </h1>
//                     <div className=' flex justify-center items-center py-2'>
//                         <div className='bg-[#b19777] h-[2px] w-24'>

//                         </div>
//                     </div>
//                 </div>
//                 <p className='font-light text-sm text-center py-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
//             </div>
//             <div className=' py-10 px-10 lg:px-40 lg:py-20'>
//                 <h1 className='text-center font-semibold text-4xl'>Images </h1>
//                 <div className='grid grid-rows-1 sm:grid-cols-3 py-10 gap-20'>
//                     <div>
//                         <Image src={mattrest} alt="fess manager logo" className='rounded-lg ' />

//                     </div>
//                     <div>
//                         <Image src={mattrest} alt="fess manager logo" className='rounded-lg ' />

//                     </div>
//                     <div>
//                         <Image src={mattrest} alt="fess manager logo" className='rounded-lg ' />

//                     </div>
//                 </div>
//             </div> */}
//             <Subscribe />
//             <Footer />
//         </>

//     )
// }
