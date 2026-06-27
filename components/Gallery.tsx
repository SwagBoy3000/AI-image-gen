import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa6'

const Gallery = ({images, loading, loadingSlots}:any) => {
  return (
    <>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>  
            {loading && [...Array(loadingSlots)].map((_,i) => (
                <div key={i} className='aspect-square rounded-md bg-[#f1f1ff] border border-[#d4d4ed] animate-pulse'>

                </div>
            ))}
            {images.map((img: string, i: number) => (      
            <div key={i} className='relative group rounded-md border overflow-hidden'>
                <img src={img} className='w-full h-full object-cover'/>
                <div className='absolute inset-0 bg-linear-to-t from-black/70 opacity-0 group-hover:opacity-100 flex items-end justify-end p-4'>
                    <button className='h-10 w-10 bg-white/30 rounded-full text-white flex items-center justify-center cursor-pointer'><FaDownload /></button>
                </div>
            </div>))}
        </div>
    </>
  )
}

export default Gallery