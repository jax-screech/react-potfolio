import { useEffect, useState } from "react"; 
import axios from "axios";

function Fetch() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            // .then((response) => response.json())
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h2>Fetching Data</h2>
            {data ? <p>{JSON.stringify(data, null, 2)}</p> : <p>Loading...</p>}
        </div>
    );
}

export default Fetch;
