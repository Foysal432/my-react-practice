import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts(){
     
    const [Posts, setPost]=useState([])
    useEffect(()=>{

     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res =>res.json())
     .then(data=> setPost(data))



    },[])
    return(
        <div>
            <h4>Post:{Posts.length}</h4>
          {
           Posts.map(post=><Post post={post}></Post>)
          }
        </div>
    )
}
