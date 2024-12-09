import { profilePicture } from '../Assets/images/index'
import { socialMedia } from '../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useState, useEffect } from 'react'
import { fidgetSpinner } from '../Assets/icons'

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentJobIndex, setCurrentJobIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const jobTitles = ['Web Designer', 'UX/UI Designer'];

    useEffect(() => {
        const handleTyping = () => {
            const currentJob = jobTitles[currentJobIndex];

            if (!isDeleting) {
                // Typing
                if (displayText.length === currentJob.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
                
                if (displayText.length < currentJob.length) {
                    setDisplayText(currentJob.slice(0, displayText.length + 1));
                }
            } else {
                // Deleting
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentJobIndex((prev) => (prev + 1) % jobTitles.length);
                }
                
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentJobIndex]);


    useGSAP(() => {
        gsap.to('#profilePicture', {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        gsap.to('#spinner', {
            y:-1,
            rotation: 360,
            repeat: -1,
            duration: 1,
            ease: "linear"
        });
    }, []);
    

    return (
        <section
            id='home'
            className='w-full flex xl:flex-row flex-col justify-center items-center shadow-2xl rounded-[100px] min-h-[80vh] gap-10 max-container'
        >
            <div className='relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
            <img
            id='spinner'
            src={fidgetSpinner}
            className='absolute bottom-[270px] '
            />
                <h3 className='text-xl font-semibold text-slate-700 font-sans'>Hello Its me,</h3>
                <h1 className='lg:text-4xl text-3xl mt-10 font-extrabold font-montserrat'>Abdulrahman Ali</h1>
                <h2 className='text-2xl font-bold'>
                    I am a 
                    <span className='ml-2 text-coral-red'>
                        {displayText}
                        <span className='animate-blink'>|</span>
                    </span>
                </h2>
                <div className='flex flex-row items-start mt-10 gap-10 font-palanquin'>
                    {socialMedia.map((item) => (
                        <img
                            key={item.href}
                            src={item.icon}
                            className='cursor-pointer hover:bg-coral-red px-1 py-1 rounded-full'
                        />
                    ))}
                </div>
            </div>
            <div>
                <img 
                    id='profilePicture'
                    src={profilePicture}
                    className='bg-red-500 w-[250px] h-[450px]  mt-2  rounded-[100px] shadow-xl'
                />
            </div>
        </section>
    );
};

export default Hero;