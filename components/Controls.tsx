import { Sparkles } from 'lucide-react'
import React from 'react'

const Controls = ({setRatio, setCount, setModel, loading}: any) => {
  return (
    <>
        <div className='flex flex-wrap gap-3'>
            {/* { model name } */}
            <select 
            onChange={(e) => setModel(e.target.value)}
            className='border border-[#d4d4ed] bg-[#f1f1ff] px-3 py-2 rounded-md flex-1'>
                <option disabled>Select Model</option>
                <option value='black-forest-labs/FLUX.1-dev'>FLUX.1-dev</option>
                <option value='black-forest-labs/FLUX.1-schnell'>FLUX.1-schnell</option>
                <option value='stabilityai/stable-diffusion-xl-base-1.0'>SDXL</option>
                <option value='runwayml/stable-diffusion-v1-5'>SD v1.5</option>
                <option value='prompthero/openjourney'>OpenJourney</option>
            </select>

            {/* {image count} */}
            <select 
            onChange={(e) => setCount(e.target.value)}
            className='border border-[#d4d4ed] bg-[#f1f1ff] px-3 py-2 rounded-md flex-1'>
                <option disabled>Image Count</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>

            {/* {aspect ratio} */}
            <select 
            onChange={(e) => setRatio(e.target.value)}
            className='border border-[#d4d4ed] bg-[#f1f1ff] px-3 py-2 rounded-md flex-1'>
                <option disabled>Aspect Ratio</option>
                <option value='1:1'>Square (1:1)</option>
                <option value='16:9'>Landscape (16:9)</option>
                <option value='9:16'>Portrait (9:16)</option>
            </select>

            <button 
            disabled={loading}
            type='submit' className='text-white flex items-center gap-2 px-10 py-2 rounded-md disabled:opacity-50 hover:scale-105 hover:shadow-xl transition-all duration-200 ease-in-out cursor-pointer' style={{background: 'var(--color-gradient)'}}>
                <Sparkles size={20}/>
                {loading? "Generating.." : "Generate"}
            </button>
        </div>
    </>
  )
}

export default Controls