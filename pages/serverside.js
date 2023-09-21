import React from 'react'

const serverside = ({articles}) => {
  return (
    <div>
        {
            articles.map((article)=>{
                return (
                    <div key={article.id}>
                        <h2>{article.title} | {article.author}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default serverside

export async function getServerSideProps(){
    const response = await fetch('http://localhost:3004/posts')
    const data = await response.json()

    return {
        props:{
            articles: data,
        }
    }
}