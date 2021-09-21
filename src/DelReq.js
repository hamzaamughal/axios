import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const DelReq = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await axios.get(`${baseURL}/1`)
            setPost(data)
        }
        fetchPost()
    }, [])

    const deletePost = async () => {
        await axios.delete(`${baseURL}/1`)
        alert('post deleted')
        setPost(null)
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


export default DelReq
