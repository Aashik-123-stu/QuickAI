import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {

    const navigate = useNavigate()  //JavaScript ke through programmatically ek page se dusre page par bhejne ke liye function deta hai.
    const [showDemo, setShowDemo] = useState(false);

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>

        <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Create amazing content <br/> with <span className='text-primary'>AI Tools</span></h1>
            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.</p>
        
        </div>

        <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
            <button onClick={()=> navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>Start Creating Now</button>
            
            <button
                onClick={() => setShowDemo(true)}
                className='bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'
            >
                Watch Demo
            </button>

            {showDemo && (
                <div
                className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
                onClick={() => setShowDemo(false)}
                >
                <div
                    className='relative w-full max-w-3xl aspect-video mx-4'
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                    onClick={() => setShowDemo(false)}
                    className='absolute -top-10 right-0 text-white text-2xl cursor-pointer'
                    >
                    ✕
                    </button>
                    <iframe
                    src="https://drive.google.com/file/d/1kPmY3R4FMNb_mdnibtz9jOfocm45rSec/preview"
                    className='w-full h-full rounded-lg'
                    allow="autoplay"
                    allowFullScreen
                    />
                </div>
                </div>
            )}
        </div>
        
        <div className='flex items-center gap-4 mt-8 mx-auto text-gray-600'>
            <img src={assets.user_group} alt="" className='h-8'/> Trusted by 100k+ people
        </div>
      
    </div>
  )
}

export default Hero
