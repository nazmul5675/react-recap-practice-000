import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h3>Posts: {posts.length}</h3>
            {
                posts.map(post => <Post post={post} />)
            }
        </div>
    );
}

/**
 * 1.create a state a data
 * 2.create use effect with no dependencies
 * 3.use to fetch load data
 * 4.
 */