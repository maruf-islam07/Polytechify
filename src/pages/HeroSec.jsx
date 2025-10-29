import React from 'react'
import HeroImg from '../assets/Hero.jpg'

function HeroSec() {
  return (
    <div>
        <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center'>
            {/* left side content  */}
            <div className='w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left px-5 md:order-1 order-2'>
                <h1 className='text-2xl md:text-4xl font-extrabold'>“ডিপ্লোমা স্টুডেন্টদের একাডেমিক পার্টনার”</h1>
                <h2 className='text-2xl text-pink-500 mt-12 mb-5'>আমাদের লক্ষ্য</h2>
                <p className='text-[18px] font-'> পলিটেকনিক ও ডিপ্লোমা শিক্ষার্থীদের একাডেমিক সফলতা নিশ্চিত করা, বোর্ড পরীক্ষায় ভালো <br />ফলাফল, ভাইভা প্রস্তুতি এবং কঠিন বিষয়গুলো সহজভাবে শেখানোই আমাদের মূল উদ্দেশ্য।</p>
            </div>
            {/* right side image  */}
            <div className='lg:w-1/2 px-5 my-5 order-1 md:order-2'>
                <img className='sm:w-[600px]  ' src={HeroImg} alt="" />
            </div>

        </div>
    </div>
  )
}

export default HeroSec