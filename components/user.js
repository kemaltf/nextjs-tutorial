import React from 'react'

const user = ({user}) => {
  return (
    <>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </>
  )
}

export default user