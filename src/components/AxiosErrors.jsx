import axios from "axios";
import { useEffect, useState } from "react";

function FetchErrors() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(response.data); // axios converts the response to a JSON object
            } catch (error) {
                if (error.response) {
                    console.error("Server responded with error:", error.response.status);
                } else if (error.request) {
                    console.error("No response received:", error.request);
                } else {
                    console.error("Error setting up request", error.message);
                }
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Fetching data</h2>
            {data ? <p>{JSON.stringify(data, null, 2)}</p> : <p>Loading...</p>}
        </div>
    );
}

export default FetchErrors;





