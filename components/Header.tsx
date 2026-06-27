import React from 'react'
import { FaWandMagicSparkles } from 'react-icons/fa6'

const Header = () => {
  return (
    <>
    <header className='flex gap-3 items-center mb-6'>
        <div className='h-11 w-11 flex justify-center items-center text-white rounded-lg' style={{background: "var(--color-gradient)"}}>
            <FaWandMagicSparkles size={22}/>
        </div>
        <h1 className='text-2xl md:text-3xl font-bold leading-tight'>AI Image Generator</h1>
    </header>
    </>
  )
}

export default Header