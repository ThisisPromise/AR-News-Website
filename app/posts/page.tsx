'use client'

import { useEffect, useState } from "react";

function page() {

    const [posts, setPosts] = useState([])
      const [error, setError] = useState({})
  
      interface Post {
        title: string;
        userId: number;
        body: string;
        
        
      }

      useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
      
        fetch(url)
        .then(response => response.json())
      // .then(res => console.log(res))
        .then(res => setPosts(res.slice(0,25)))
     
        .catch(err => setError(err))
      }, [])
      
  return (
    <div>
        <h1>Hello</h1>
      
{posts.map((post: Post) =>
        
        <div className="boxe">
        
          <div className="imagess">
          <p>User Id: {post.userId} </p>
          </div>
          <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
        </div>
  
     
      )}
          
          </div>
    
  )
}

export default page
