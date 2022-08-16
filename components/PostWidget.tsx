import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'

import {getRecentPosts, getSimilarPosts} from '../services'

const PostWidget = ({categories, slug}) => {

  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  
  useEffect(() => {
    if(slug){
      getSimilarPosts()
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug]);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='lg:text-lg 2xl:text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Similar Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full mb-4'>
          <div className='flex-none w-16'>
            <img src={post.featuredImage.url} alt={post.title} className='align-middle object-cover rounded-full w-12 h-12 2xl:w-16 2xl:h-16' />
          </div>
          <div className="flex-grow ml-4">
            <p className='text-gray-500 text-sm 2xl:text-md'>
              {moment(post.createdAt).format('DD MMMM YYYY')}
            </p>
            <p className='text-base 2xl:text-md'>
              <Link href={`/post/${post.slug}`} key={post.title} >
                {post.title}
              </Link>
            </p>
            
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget