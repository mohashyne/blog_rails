// API_URL comes from the .env.development file
import React, { useState, useEffect } from 'react';
import { API_URL } from "../../constants"

function PostsList()  {
    const [posts, setPosts] = useState([]);
    const [, setloading] = useState(true);
    const [, seterror] = useState(null);

      // Fetch post from Api
      useEffect(() => {
       async function loadPost() {
        try {
          const response = await fetch(API_URL);
          if (response.ok) {
            const json = await response.json();
            setPosts(json);
          } else {
            throw response;
          }
        } catch (e) {
          console.error(e);
          seterror("An error occurred: ", e);
        } finally {
          setloading(false);
        }
       } 
     
         loadPost();
      }, []);

    return (
        <div >
        {posts.map((post) => (
                <div  key={post.id}  className='post-container'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                </div>
        
        ))}
      </div>
    );
}











export default PostsList;