import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1"

function App() {
  const [post, setPost] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(baseURL)
      console.log(data);
      setPost(data)
    }
    getPosts()
  }, [])

  // if (!post) {
  //   return null;
  // }

  return (
    <>

      <h1>{post && post.title}</h1>
      <p>{post && post.body}</p>

    </>
  );
}

export default App;
