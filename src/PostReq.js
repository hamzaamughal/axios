import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const PutReq = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        axios.get(`${baseURL}/1`).then((response) => {
            setPost(response.data)
        })
    }, [])

    // function createPost() {
    //     axios.post(baseURL, {
    //         title: 'hello hamza',
    //         body: 'this para is written by hamza mughal.'
    //     }).then((response) => {
    //         setPost(response.data)
    //     })
    // }
    const createPost = async () => {
        const { data } = await axios.post(baseURL, {
            title: 'hello hamza mughal',
            body: 'this is with async await'
        })
        setPost(data)
    }

    if (!post) {
        return null
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={createPost}>Create Post</button>
        </div>
    )
}

export default PutReq
