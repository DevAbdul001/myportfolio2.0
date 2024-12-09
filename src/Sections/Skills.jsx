import React from 'react'
import { canva, javaScript, jsx, tailwind } from '../Assets/images'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Skills = () => {
    useGSAP(()=>{
        gsap.fromTo('#canva',{
            opacity:0,
            x:-250
          },{
            opacity:1,
              x:0,
            delay:0.7,
            scrollTrigger:{
              trigger:'#skills',
              start:'top bottom',
              end:'bottom center',
              toggleActions: 'play none none reverse'
            }
          })
          gsap.fromTo('#jsx',{
            opacity:0,
            x:-250
          },{
            opacity:1,
              x:0,
            delay:0.7,
            scrollTrigger:{
              trigger:'#skills',
              start:'top bottom',
              end:'bottom center',
              toggleActions: 'play none none reverse'
            }
          })
          gsap.fromTo('#tailwind',{
            opacity:0,
            x:250
          },{
            opacity:1,
              x:0,
            delay:0.7,
            scrollTrigger:{
              trigger:'#skills',
              start:'top bottom',
              end:'bottom center',
              toggleActions: 'play none none reverse'
            }
          })
          gsap.fromTo('#js1',{
            opacity:0,
            x:250
          },{
            opacity:1,
              x:0,
            delay:0.7,
            scrollTrigger:{
              trigger:'#skills',
              start:'top bottom',
              end:'bottom center',
              toggleActions: 'play none none reverse'
            }
          })
          gsap.fromTo('#title',{
            opacity:0,
            y:50,
          },{
            opacity:1,
            y:0,
            delay:0.9,
            scrollTrigger:{
                trigger:'#skills',
                start:'top bottom',
                end:'bottom center',
                toggleActions: 'play none none reverse'
          }
    })
    },[])

    return (
        <section 
            id='skills' 
            className='w-full flex flex-col justify-center items-center shadow-2xl rounded-[100px] min-h-[60vh] max-lg:min-h-full gap-10 max-container'
        >
            <div className='flex flex-wrap flex-1 justify-center items-center'>
                <h1 className='mt-10 font-bold xl:text-4xl text-3xl text-center'>
                    My <span className='text-coral-red'>Skills</span>
                </h1>
            </div>
            
            <div className='w-full px-4 mb-[10rem]'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center'>
                    {/* Canva Skill */}
                    <div className='flex flex-col justify-center items-center text-center'>
                        <img
                            id='canva'
                            src={canva} 
                            alt="canva"
                            className='w-full max-w-[150px] h-auto'
                        />
                        <p id='title' className='font-bold text-xl font-palanquin mt-2'>
                            Canva
                        </p>
                    </div>
                    
                    {/* React Skill */}
                    <div className='flex flex-col justify-center items-center text-center'>
                        <img 
                            id='jsx'
                            src={jsx} 
                            alt="react"
                            className='w-full max-w-[150px] h-auto'
                        />
                        <p id='title' className='font-bold text-xl font-palanquin mt-2'>
                            React
                        </p>
                    </div>
                    
                    {/* JavaScript Skill */}
                    <div className='flex flex-col justify-center items-center text-center'>
                        <img 
                            id='js1'
                            src={javaScript} 
                            alt="javascript" 
                            className='w-full max-w-[150px] h-auto'
                        />
                        <p id='title' className='font-bold text-xl font-palanquin mt-2'>
                            JavaScript
                        </p>
                    </div>

                    {/* Tailwind Skill */}
                    <div className='flex flex-col justify-center items-center text-center'>
                        <img 
                            id='tailwind'
                            src={tailwind} 
                            alt="tailwind css"
                            className='w-full max-w-[400px] h-auto'
                        />
                        <p id='title' className='font-bold text-xl font-palanquin mt-2'>
                            Tailwind
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills