import { useId } from 'react'
import './Post.css'
export default function Post({post}){
    const {userId,id,title,body}=post
    return(
        <div className='post'>
            <h5>UserID:{userId}</h5>
            <p>ID:{id}</p>
            <p>Body:{body}</p>
            <p>Tittle:{title}</p>
        </div>
    )
}