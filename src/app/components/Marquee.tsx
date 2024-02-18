'use client'


import React from 'react'
import {motion} from 'framer-motion'




const Marquee = () => {
  return (
    <div className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]'>
<div className="border-t-2 border-b-2 border-zinc-300 flex gap-10  overflow-hidden whitespace-nowrap" >

  <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[17vw] leading-none font-["Founders_Grotesk_condensed"] uppercase font-semibold pt-10 -mb-12 '>we are ochi </motion.h1>
  <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[17vw] leading-none  font-["Founders_Grotesk_condensed"] uppercase font-semibold pt-10 -mb-12'>we are ochi </motion.h1>
</div>

    </div>
  )
}

export default Marquee