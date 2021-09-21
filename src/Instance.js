import React, { useState, useEffect } from 'react'
import axios from 'axios'

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

const Instance = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = axios.get('/1')
            setPost(data)
        }
        fetchPost()
    }, [])

    function deletePost() {
        client
            .delete("/1")
            .then(() => {
                alert("Post deleted!");
                setPost(null)
            });
    }

    if (!post) return "No post!"

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={deletePost}>Delete Post</button>
        </div>
    )
}

export default Instance
