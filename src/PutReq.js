import React, { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const PutReq = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);

    const updatePost = async () => {
        const { data } = await axios.put(`${baseURL}/1`, {
            title: 'hello hamza mughal updateddd',
            body: 'this is an updated postt'
        })
        setPost(data)
    }

    if (!post) return "No post!"

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={updatePost}>Update Post</button>
        </div>
    )
}

export default PutReq
