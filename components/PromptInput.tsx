import { DEFAULT_PROMPTS } from '@/lib/prompts'
import React from 'react'
import { FaDice } from 'react-icons/fa6'

const PromptInput = ({prompt, setPrompt}: any) => {

    const randomPrompt = () => {
        const random = DEFAULT_PROMPTS[Math.floor(Math.random() * DEFAULT_PROMPTS.length)]
        setPrompt(random)
    }

  return (
    <>
        <div className='relative'>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder='Enter your prompt' className='border rounded-lg border-[#d4d4ed] bg-[#f1f1ff] text-[#09090e] min-h-30 p-4 resize-y w-full focus:outline-none focus:border-[#8b5cf6] focus:shadow-lg' autoFocus></textarea>
            <button 
            type='button'
            onClick={randomPrompt}
            className='absolute right-4 bottom-4 w-10 h-10 flex items-center justify-center text-white rounded-full cursor-pointer' 
            style={{background: 'var(--color-gradient)'}}>
                <FaDice size={20}/>
            </button>
        </div>
    </>
  )
}

export default PromptInput