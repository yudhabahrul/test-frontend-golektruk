import { useState, useEffect, useRef } from "react";

// Soal Nomor 4
// Buatlah sebuah website yang menampilkan daftar pokemon yang di load dengan infinite scroll

const BASE_URL = "https://pokeapi.co/api/v2";

// fungsi untuk fetch data pokemon
const fetchPokemon = async (offset: number, limit: number) => {
  const response = await fetch(
    `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();
  return data.results;
};

const Soal4 = () => {
  const [pokemonList, setPokemonList] = useState<
    { name: string; url: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(20);

  const theRef = useRef<HTMLDivElement | null>(null);

  // fungsi untuk memuat data pokemon secara bertahap
  const loadMorePokemon = async () => {
    if (loading) return;
    setLoading(true);

    const newPokemons = await fetchPokemon(offset, limit);
    setPokemonList((prev) => [...prev, ...newPokemons]);
    setOffset((prev) => prev + limit);
    setLoading(false);
  };

  // Fungsi untuk infinite scroll menggunakan IntersectionObserver
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      loadMorePokemon();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
    });

    if (theRef.current) {
      observer.observe(theRef.current);
    }

    return () => {
      if (theRef.current) {
        observer.unobserve(theRef.current);
      }
    };
  }, [theRef]);

  useEffect(() => {
    loadMorePokemon();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#333",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          color: "white",
          fontSize: "1.5em",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1 style={{ fontWeight: "bolder" }}>Pokémon Infinite Scroll</h1>
        {/* list pokemon beserta loading */}
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index} style={{ padding: "4px" }}>
              {pokemon.name}
            </li>
          ))}

          {loading && <div>Loading...</div>}
        </ul>
        <div ref={theRef} style={{ height: "20px" }}></div>
      </div>
      <iframe
        src="/soal4.mp4"
        style={{
          height: "100vh",
          border: "1px solid white",
        }}
      ></iframe>
    </div>
  );
};

export default Soal4;
