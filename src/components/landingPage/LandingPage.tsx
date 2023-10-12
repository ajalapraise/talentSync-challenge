import React from 'react'
import { Roboto } from 'next/font/google';
import Link from 'next/link';
import { Button } from '../Button/Button';

const roboto = Roboto({
    variable: "--Montserrat",
    subsets: ["latin"],
    display: "swap",
    weight: "500",
});


export const Herosection = () => {
    return (
        <div className=' px-3 mt-20 flex'>
            <div className='w-1/2 flex flex-col space-y-5'>
                <div className='flex flex-col space-y-2'>
                    <h1 className={`text-black font-extrabold text-[50px] leading-[4rem] ${roboto.className}`}>Uniting the world, <br />one video call at a time</h1>
                    <h2 className='font-bold text-grey1 text-base w-4/5'>Experience the future of communication with ClearLink – where crystal-clear video conferencing meets <br /> unparalleled simplicity.</h2>
                </div>
                <div>
                    <div className={`flex w-[140px] justify-center items-center text-white rounded-full hover:bg-blue2 bg-blue `}>
                        <Link href="#">
                            <Button btnValue="Start your free trial" className='' />
                        </Link>
                    </div>

                </div>

            </div>

            <div>

            </div>

        </div>
    )
}
