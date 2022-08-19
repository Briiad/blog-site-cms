import React from 'react'
import Head from 'next/head'

import { getPosts, getPostDetails } from '../../services'
import { PostWidget, Author, Comments, PostDetail, Categories, CommentsForm  } from '../../components'

const PostDetails = ({ post }) => {

  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>{`Bllgo: ${post.title}`}</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-10 2xl:grid-cols-12 gap-12">
        <div className='col-span-1 lg:col-span-6 2xl:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div> 

        <div className="col-span-1 lg:col-span-4">
          <div className='lg:sticky relative top-8'>
            <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

// MANDATORY FUNCTION FOR SSG WITH GETSTATICPROPS AND GETSATICPATHS

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: {post: data}
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: {slug}}) => ({params: {slug}})),
    fallback: false,
  }
}