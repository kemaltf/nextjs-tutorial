import {useRouter} from 'next/router'
const Post = ({post}) => {
    const router = useRouter()

    if(router.isFallback){
        return <h1>Loading..</h1>
    }

  return (
    <>
        <h2>
            {post.id} {post.title}
        </h2>
        <p>
            {post.body}
        </p>
    </>
  )
}

export default Post

export async function getStaticPaths(){
    return {
        paths:[
            {params: {postId: '1'}},
            {params: {postId: '2'}},
            {params: {postId: '3'}},
        ],
        fallback: true
    }
}

export async function getStaticProps(context){
    const {params} = context
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    console.log(`Membuat page untuk /posts/${params.postId}`)
    return {
        props: {
            post: data,
        }
    }
}
