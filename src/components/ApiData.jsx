import { useState, useEffect } from "react";
import axios from "axios";

function FetchApis() {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const [charRes, locRes, epiRes] = await Promise.all([
          axios.get("https://rickandmortyapi.com/api/character"),
          axios.get("https://rickandmortyapi.com/api/location"),
          axios.get("https://rickandmortyapi.com/api/episode"),
        ]);
        setCharacters(charRes.data.results);
        setLocations(locRes.data.results);
        setEpisodes(epiRes.data.results);
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

    fetchInformation();
  }, []);

  return (
    <div className="p-4 text-white bg-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Rick and Morty Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mt-4">Characters</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {characters.slice(0, 15).map((char) => (
              <li key={char.id} className="bg-gray-800 p-2 rounded shadow">
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <p className="text-center mt-2">{char.name} - {char.species}</p>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mt-6">Locations</h3>
          <ul className="list-disc ml-6">
            {locations.slice(0, 15).map((loc) => (
              <li key={loc.id}>
                {loc.name} - {loc.type}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mt-6">Episodes</h3>
          <ul className="list-disc ml-6">
            {episodes.slice(0, 15).map((epi) => (
              <li key={epi.id}>
                {epi.name} - {epi.episode}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FetchApis;
