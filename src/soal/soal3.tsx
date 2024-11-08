import { useEffect, useState } from "react";

export default function Soal3() {
  /**
   * ? 1. hilangkan semua error dan deskripsikan apa penyebab error.
   * ? 2. tampilkan data yang di panggil dari api tersebut...
   */

  return <SeachComponent />;
}

function SeachComponent() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${search.id}`);
      const data = await response.json();

      setResults(data);
    }

    if (search) fetchData();
  }, [search]);

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
