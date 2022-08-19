import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-14'>
        <Image src={author.photo.url} alt={author.name} unoptimized width='112px' height='112px' className='align-middle rounded-full' />
      </div>
      <h3 className='text-white my-4 2xl:text-2xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  )
}

export default Author