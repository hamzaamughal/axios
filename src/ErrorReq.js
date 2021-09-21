import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const ErrorReq = () => {
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data } = await axios.get(`${baseURL}/asf`)
                setPost(data)
            } catch (error) {
                setError(error)
            }
        }
        fetchPost()
    }, [])

    if (error) return `Error: ${error.message}`;
    if (!post) return "No post!"

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default ErrorReq
