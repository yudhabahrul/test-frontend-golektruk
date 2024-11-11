import { useState, useRef } from 'react'

// Soal Nomor 4
// Buatlah sebuah website yang menampilkan daftar pokemon yang di load dengan infinite scroll

const BASE_URL = 'https://pokeapi.co/api/v2'

const fetchPokemon = async (offset: number, limit: number) => {
  // fungsi untuk fetch data pokemon
}

const Soal4 = () => {
  const [pokemonList, setPokemonList] = useState<
    { name: string; url: string }[]
  >([])
  //  Tambahkan state yang dibutuhkan
  // ...

  const theRef = useRef<HTMLDivElement | null>(null)

  // Fungsi untuk infinite scroll
  // ...
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
      }}>
      <div
        style={{
          flexGrow: 1,
          color: 'white',
          fontSize: '1.5em',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}>
        <h1
          style={{
            fontWeight: 'bolder',
          }}>
          Pokémon Infinite Scroll
        </h1>
        {/* list pokemon beserta loading */}
      </div>
      <iframe
        src='/soal4.mp4'
        style={{
          height: '100vh',
          border: '1px solid white',
        }}></iframe>
    </div>
  )
}

export default Soal4
