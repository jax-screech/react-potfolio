import { useState } from "react";
import axios from "axios";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [responseMsg, setResponseMsg] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title,
                body,
                userId: 1
            });
            setResponseMsg(`Post created with ID: ${response.data.id}`);
            setTitle("");
            setBody("");
        } catch (error) {
            console.error("Error:", error);
            setResponseMsg("Failed to create post");
        }
    };

    return (
        <div>
            <h2>Create a post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <input
                        id="body"
                        type="text"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {responseMsg && <p>{responseMsg}</p>}
        </div>
    );
}

export default CreatePost;
