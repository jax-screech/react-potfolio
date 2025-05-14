import { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMultiple = async () => {
            try {
                const [postsRes, usersRes] = await Promise.all([
                    axios.get("https://jsonplaceholder.typicode.com/posts"),
                    axios.get("https://jsonplaceholder.typicode.com/users"),
                ]);
                setPosts(postsRes.data);
                setUsers(usersRes.data);
            } catch (error) {
                if (error.response) {
                    console.error("Server responded with error:", error.response.status);
                } else if (error.request) {
                    console.error("No response received:", error.request);
                } else {
                    console.error("Error setting up request:", error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMultiple();
    }, []);

    return (
        <div>
            <h2>Data Fetch</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h3>Posts</h3>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>{post.title}</li>
                        ))}
                    </ul>
                    <h3>Users</h3>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default FetchData;
