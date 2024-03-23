import React from 'react'
import { GoDotFill } from "react-icons/go";


const Featured = () => {
  return (
    <div className='w-full py-20 bg-zinc-100 '>
      <div className='w-full px-10  border-b-[1px] border-zinc-400  pb-10 '>
        <h1 className='text-black text-5xl font-["Neue_Montreal"] tracking-tight'>Featured projects
        </h1>

      </div>
      <div className='px-5'>
        <div className="cards w-full flex grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 ">
          {/* FIRST CARD CONTAINER */}
          <div className='CardContainer  relative w-full h-[60vh]'><div className='right-4  text-black mb-2 pl-6 '>
            FYDE
            <GoDotFill className='absolute  ml-0 left-0  top-0 right-100 m-0 text-2xl' />
          </div>
            <h1 className='absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter'>
              {"FYDE".split('').map((item, index) => (
                <span>{item}</span>))}
            </h1>
            <div className='card w-full h-full rounded-lg overflow-hidden '>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />

            </div >
          </div>
          {/* SECOND CARD CONTAINER */}
          <div className='CardContainer  relative w-full h-[60vh]'><div className='right-4  text-black mb-2 pl-6 '>
            VISE
            <GoDotFill className='absolute  ml-0 left-0  top-0 right-100 m-0 text-2xl' />
          </div>
            <h1 className='absolute right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter'>
              {"VISE".split('').map((item, index) => (
                <span>{item}</span>))}
            </h1>
            <div className='card w-full h-full rounded-lg overflow-hidden '>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />


            </div>
          </div>
          {/* THIRD CARD CONTAINER */}
          <div className=''>

            <div className='CardContainer relative w-full h-[60vh] mt-20'><div className='text-black mb-3 pl-6'>TRAWA
              <GoDotFill className='absolute  ml-0 left-0  top-0 right-100 m-0 text-2xl' /></div>

              <h1 className='absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter'>
                {"VISE".split('').map((item, index) => (
                  <span>{item}</span>))}
              </h1>
              <div className='card w-full h-full rounded-lg overflow-hidden '>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
              </div>
            </div>
          </div>

          {/* FOURTH CARD CONTAINER */}
          <div className=''>
            <div className='CardContainer relative w-full h-[60vh] mt-20'><div className='text-black mb-3 pl-6'>
              PREMIUM BLEND    <GoDotFill className='absolute  ml-0 left-0  top-0 right-100 m-0 text-2xl' />

            </div>
              <h1 className='absolute right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl leading-none tracking-tighter'>
                {"VISE".split('').map((item, index) => (
                  <span>{item}</span>))}
                  
              </h1>
              <div className='card w-full h-full rounded-lg overflow-hidden '>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
              </div>
            </div>
          </div>


        </div>

      </div>

    
    </div>




  )
}

export default Featured