import React from 'react'
import { reviews } from '../constants'
import { quotes } from '../Assets/icons'


const Reviews = () => {
  return (
    <section id='reviews' className=' max-container'>
        
      <h2 className='font-palanquin text-center text-4xl font-bold'>What <span className='text-coral-red '>Users</span> say</h2>
      <p className='info-text m-auto max-w-lg text-center'>This is what users had to say after interacting with my work</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-10'>
     
           {reviews.map((review)=>(
            <div key={review.userName}
            className='flex justify-center flex-col shadow-2xl py-10 px-10 rounded-2xl'>
                 <img
                     src={quotes}
                     className='relative right-[1rem] w-11 h-auto'
                      />
                <h2 className='text-center mt-1 font-palanquin text-3xl font-bold'>{review.userName}</h2>
                <p className='indent-16 mt-6 max-w-sm text-justify info-text'>{review.text}</p>
            </div>
           ))} 
      </div>
    </section>
  )
}

export default Reviews
