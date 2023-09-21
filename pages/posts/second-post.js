import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
const secondPost = ({posts}) => {
  return (
    <>
    <div>secondPost</div>
    <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
    {posts.map((post,i)=>{
      return(
        <div key={i}>
          <h2><Link href={`/posts/${post.id}`}>{post.id} {post.title}</Link></h2>
        </div>
      )
    })}
    </>
    )
}

export default secondPost

export async function getStaticProps(){
  const response = await fetch("http://jsonplaceholder.typicode.com/posts")
  const data = await response.json()

  return {
    props:{
      posts: data.slice(0,3)
    }
  }
}