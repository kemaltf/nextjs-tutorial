import React from 'react'
import Image from 'next/image';
import Layout from '../components/layout';
import User from "../components/user"

const FirstPost = (props) => {
  const { dataUsers } = props;
  return (
    <Layout>
        <img src="/images/profile.jpg" alt="Your Name" />
        <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
        <div>First Post</div>
        <p>Users Page</p>
      {dataUsers.map((user,i) => {
        return (
          <div key={i}>
           <User user={user}/>
          </div>
        );
      })}
    </Layout>
  )
}

export default FirstPost

export async function getStaticProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}