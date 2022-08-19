import type { NextPage } from 'next'
import Head from 'next/head'

// import modules and components
import { Categories, PostWidget, PostCard } from '../components'
import {getPosts} from '../services'

export default function Home ({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Bllgo</title>
        <meta name="viewport" charSet='utf-8' content="initial-scale=1.0, width=device-width" />
        <meta name="author" content='Brian Aditya' />
        <meta name='description' content='This site provides articles that i made around the topics of internet technologies for development purposes' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-10 2xl:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-6 2xl:col-span-8">
          {posts.map((post) => ( <PostCard key={post.title} post={post.node} /> ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />  
            </div>
        </div>
      </div>
        
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}
