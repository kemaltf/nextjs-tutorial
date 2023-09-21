import React from 'react'
import Image from 'next/image';
import Layout from '../components/layout';


const FirstPost = (props) => {
  const { dataUsers } = props;
  // Cara cek apakah ini di generate secara server side, kita bisa mengconsole disini
  console.log(dataUsers)
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
            <p>{user.name}</p>
            <p>{user.email}</p>
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