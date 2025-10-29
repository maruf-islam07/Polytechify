import React from 'react'
import Img from '../assets/404-error-page-animations-examples.png'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className=' bg-[#262626] w-full '>
        <div className='flex flex-col justify-center items-center h-screen '>
        <img className='mx-auto' src={Img} alt="404-page-not-found" />
        <Link to='/' className='btn btn-soft btn-accent'> Back To Home </Link>
        </div>
       
    </div>
  )
}

export default PageNotFound