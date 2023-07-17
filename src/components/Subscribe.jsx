import Image from "next/image";
import image from "../../public/images/bedroom-interior.jpg"
import React, {useState} from "react";
import {toast} from 'react-toastify'

export default function Subscribe() {
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleEmailChange = (e)=>{
        const value = e.target.value;        
        setEmail(value);
    }

    const handleSubscribe = () => {
        if(email == '') return;

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        if(emailRegex.test(email)){
            try {
                setIsLoading(true)
                fetch('/api/subscribe', {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email})
                }).then((res) => {
                    setIsLoading(false)
                    if(res.status == 200){
                        setEmail('')
                        toast.success('Thanks for subscribing')
                    }
                    else{
                        toast.error('Failed to send email')
                    }
                })
                
            } catch (error) {
                toast.error(error.message)
                setIsLoading(false)
            }
        }
        else{
            toast.error('Please enter valid email')
        }
    }

    return (
        <>
            <div className='h-[400px] relative'>
                <Image src={image} alt="fess manager logo" className='' />
                <div className="h-[400px] w-full bg-black/70 absolute top-0 ">
                </div>
                <div className="flex flex-col justify-center items-center absolute top-[28%] left-[35%]">
                    <h1 className="text-[#b19777] font-semibold text-2xl">Subscribe for Members</h1>
                    <h1 className="text-white text-2xl font-semibold py-3">to Receive Latest News and Special Offers</h1>
                    <form action="">
                        <div className="flex mt-5">
                            <input 
                                type="text"
                                value={email}
                                placeholder="Your email..."
                                className="px-5 w-80 focus:outline-none"
                                onChange={handleEmailChange}
                            />
                            <button 
                            disabled={isLoading}
                            onClick={handleSubscribe}
                            className={`${isLoading ? 'opacity-60' : ''} btn3 text-sm text-white font-semibold z-50`}>
                                {isLoading ? 'Loading...' : 'Subscribe'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
