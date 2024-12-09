import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
            <h1 className='text-3xl font-bold font-sans text-white-400'>Abdul.</h1>
        </div>
        <div className='flex flex-1 justify-between lg:gap-6 flex-wrap'>
            {footerLinks.map((section)=>(
                <div key={section}>
                    <h4 className='text-white-400 font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                    <ul>
                        {section.links.map((link)=>(
                            <li key={link.name} className='text-white-400 mt-3 font-montserrat text-base hover:text-slate-gray cursor-pointer'>
                               <a href={link.link}>{link.name}</a> 
                                </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
