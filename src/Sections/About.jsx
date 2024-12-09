import React from 'react';
import { illustration } from '../Assets/images';
import { html, js, physics, text } from '../Assets/icons';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)
const About = () => {
    useGSAP(()=>{
        gsap.fromTo('#html',{
            y:-0
        },{
          y:50,
          duration:2,
          ease:'power1.inOut',
          repeat:-1,
          yoyo:true
        },
  )
  gsap.fromTo('#js',{
    y:-0
},{
  y:50,
  duration:2,
  ease:'power1.inOut',
  repeat:-1,
  yoyo:true
},
)
gsap.fromTo('#css',{
  y:-0
},{
y:50,
duration:2,
ease:'power1.inOut',
repeat:-1,
yoyo:true
},
)
gsap.fromTo('#react',{
  y:-0
},{
y:50,
duration:2,
rotation:360,
ease:'power1.inOut',
repeat:-1,
yoyo:true
},
)
gsap.fromTo('#text',{
  opacity:0,
  x:50
},{
  opacity:1,
    x:0,
  delay:0.1,
  scrollTrigger:{
    trigger:'#about',
    start:'top center',
    end:'bottom center',
    toggleActions: 'play none none reverse'
  }
})
    },[])
  return (
    <section id='about' className='w-full flex xl:flex-row flex-col-reverse justify-between items-center shadow-2xl rounded-[100px] min-h-[80vh] gap-10 max-container'>
      <div className='relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <div className='flex justify-center items-center'>
          <img
            src={illustration}
            className='bg-coral-red rounded-full ml-16 mr-16'
          />
        </div>
        <div className='flex flex-row justify-center relative max-sm:top-[-33rem] md:top-[-44rem] lg:top-[-45rem] xl:top-[-45rem] h-[10rem] mt-4'>
          <img
            id='html'
            src={html}
            className='w-[60px] h-[60px] mx-2 relative max-sm:top-[9rem] md:top-[8rem] md:right-10 lg:top-[8rem] right-6'
          />
          <img
            id='js'
            src={js}
            className='w-[60px] h-[60px] mx-2 relative max-sm:top-[1rem] right-8'
          />
          <img
            id='css'
            src={text}
            className='w-[60px] h-[60px] mx-2 relative max-sm:top-8 right-[-2rem]'
          />
          <img
          id='react'
            src={physics}
            className='w-[60px] h-[60px] mx-2 relative max-sm:top-[7rem] md:top-[8rem] lg:top-[8rem] left-10'
          />
        </div>
      </div>
      <div id='text' className='relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-11 px-10'>
        <h1 className='font-bold lg:text-4xl text-3xl font-montserrat'>About <span className='text-coral-red'>Me</span></h1>
        <p className='font-palanquin text-slate-gray mt-10 px-6 leading-normal'>
          I'm <span className='text-coral-red'>Abdulrahman Ali</span>,<br />
          a self-taught <span className='text-coral-red font-semibold'>Frontend Developer</span> specializing in <span className='text-coral-red font-semibold'>React</span>, <span className='text-coral-red font-semibold'>JavaScript</span>, and <span className='text-coral-red font-semibold'>Tailwind CSS</span>.
          I create beautiful, responsive, and user-friendly websites with a focus on clean code and seamless user experiences.
          Passionate about learning new technologies, I'm always looking for exciting projects to bring to life.
          When i'm not coding i enjoy photography and exploring new design trends.
        </p>
      </div>
    </section>
  );
}

export default About;