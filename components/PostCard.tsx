import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg p-0 lg:p-8 pb-12 mb-8 rounded-md'>
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img src={post.featuredImage.url} alt={post.title} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>

      <h1 className="transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-600 lg:text-2xl 2xl:text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>

      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img src={post.author.photo.url} alt={post.author.name} className="w-8 h-8 rounded-full align-middle" />
          <p className='inline align-middle text-gray-700 ml-2 lg:text-sm 2xl:text-lg'>{post.author.name}</p>
        </div>

        <div className="font-medium text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className='lg:text-sm 2xl:text-lg'>
            {moment(post.createdAt).format('DD MMMM YYYY')}
          </span>
        </div>
      </div>
      <p className='text-center lg:text-md 2xl:text-lg text-gray-700 lg:font-normal px-4 lg:px-8 2xl:px-16 mb-8'>{post.excerp}</p>

      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 transform hover:-translate-y-1 inline-block lg:text-sm 2xl:text-lg font-medium rounded-full bg-pink-600 text-white px-8 py-3 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard