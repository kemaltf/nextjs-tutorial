import React from 'react'
import Image from 'next/image';
const secondPost = () => {
  return (
    <>
    <div>secondPost</div>
    <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
    </>
    )
}

export default secondPost