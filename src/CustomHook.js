import React from 'react'
import { useAxios } from 'use-axios-client';

const CustomHook = () => {
    const { data, error, loading } = useAxios({
        url: "https://jsonplaceholder.typicode.com/posts/1"
    })

    if (loading || !data) return "Loading...";
    if (error) return "Error!";

    return (
        <div>
            <h1>{data.title}</h1>
            <h4>{data.body}</h4>
        </div>
    )
}

export default CustomHook
