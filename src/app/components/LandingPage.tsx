import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function landingPage() {
    return (
        <div className='w-full h-screen bg-black border-t-2' >
            <div className='textstructure text-xs px-7 pb-10 py-1 mt-40 uppercase tracking-wide '>
                {["We create", "Eye-Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className='masker ' key={index}>
                            <div className='w-fit flex items-end '>
                                {index === 1 && (
                                    <div className=' mr-5 w-[8vw] rounded-md h-[6.7vw] relaive -top-[0.6vw] relative bg-green-500'></div>
                                )}
                                <h1 className="flex scale-y-150 items-center uppercase text-[6vw] h-full leading-[7.9vw] font-['Founder Grotesk Condensed']  font-bold max-w-screen-sm"
                >{item}</h1>

                            </div>

                        </div>
                    );
                })}
            </div>
            <div className='text-sm border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-3 px-6'>
                {["For public and private companies ", "From the first pitch to IPO"].map((item, index) => (
                    <p className="text-sm font-light tracking-tight leading-none" key={index}>{item}</p>
                ))}
                <div className="start ">
                    <div className="px-2 py-1 border-[2px] border-zinc-400  font-lighter text-md capitalize rounded-full tracking-tighter flex items-center gap-3">START THE PROJECT
                        <div className='w-3 h-3 rounded-full flex items-center'>
                            <span className='rotate-45'>    <FaArrowUp /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default landingPage
