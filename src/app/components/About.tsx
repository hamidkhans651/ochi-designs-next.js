import React from 'react'

const About = () => {
    return (
        <div className='w-full py-20 p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-3xl text-black flex flex-col justify-between'>
            <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3.1vw] tracking-tight flex flex-col'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nesciunt quasi neqneque aspernatur quidem dolore veniam fugit odio doloruue aspernatur quidem dolorm dolore veniam fugit odio dolore veniam fugit odio dolorum. </h1>
            <div className="w-full border-t-[1px] mt-32 border-[#afc26b]"></div>

            <div className='flex justify-between'>
                <div className='w-1/4'>
                    <div className=' px-1 py-2 mt-1 font-["Neue_Montreal"] text-[2vw] leading-[3.1vw] tracking-tight text-pretty '>what you can expect</div>
                </div>
                <div className='w-1/2'>
                    <p className='mr-10vh -pt-2vh py-2 pr-[20vh] font-["Neue_Montreal"] text-[0.5] tracking-tight selection:  flex-initial mb-10'>Lorem ip=cusamus blanditiis impedit excepturi, asperiores eligendi, atque animi qui dicta, ipsa corporis? Veniam officia cum voluptates commodi! </p>
                    <p className='mr-10vh -pt-2vh pr-[20vh] font-["Neue_Montreal"] text-[0.5] tracking-tight selection: flex-initial w-2vh'>hamidLorem ipsum dolor sit ametam officia cum voluptates commodi! </p>
                </div>
                <div className='w-1/4'>
                    <div className='py-30 font-["Neue_Montreal"] text-[2vw] leading-[3.1vw] tracking-tight selection:'>

                        <div className=' py-2 underline underline-offset-8 flex flex-col items-start   mb-[2vw] mr-3 w-[9vw]'>
                            <p>S:</p>
                            <p>instagram</p>
                            <p>Behance</p>
                            <p>Facebook</p>
                            <p>Linkedin</p>
                        </div>

                    </div>


                </div>



            </div>

            <div className="w-full border-t-[1px] mt-20 pt-10  border-[#afc26b]"></div>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our Approach</h1>
                <button className='px-10 py-6 mt-10 bg-zinc-900 rounded-full'>Read More</button>

            </div>
        </div>




    )
}


export default About

