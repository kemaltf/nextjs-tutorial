import React from 'react'
import Image from 'next/image';


const FirstPost = () => {
  return (
    <>
        <img src="/images/profile.jpg" alt="Your Name" />
        <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
        <div>First Post</div>
    </>
    
  )
}

export default FirstPost