import { useEffect, useState } from "react";

export default function Soal3() {
  /**
   * ? 1. hilangkan semua error dan deskripsikan apa penyebab error.
   * ? 2. tampilkan data yang di panggil dari api tersebut...
   *
   * error sebelumnya terjadi karena pada state search yang bernilai string mencoba mengakses properti id.
   * dan juga pada state result yang seharusnya bernilai objek tetapi pada kode sebelumnya bernilai array.
   * maka dari itu terjadi perubahan kode pada setSearch pada onChange input yang sebelumnya mencoba memperbarui dengan nilai string, sekarang
   * dirubah dengan memperbarui nilai berupa objek.
   * dan di kode sebelumnya results.map dihapus karena state result yang baru bernilai objek yang mana sebuah objek tidak dapat dimapping.
   * dan juga pada result.name juga tidak valid karena pada properti objek dari api tidak ada properti yang bernama name.
   */

  return <SeachComponent />;
}

interface TypeSearcID {
  id: string;
}

interface TypeResult {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function SeachComponent() {
  const [search, setSearch] = useState<TypeSearcID>({ id: "" });
  const [result, setResult] = useState<TypeResult>({
    id: "",
    albumId: "",
    title: "",
    url: "",
    thumbnailUrl: "",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${search.id}`
      );
      const data = await response.json();

      setResult(data);
    }

    if (search.id.trim()) fetchData();
  }, [search]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "-6rem",
        height: "100vh",
      }}
    >
      <input
        style={{ width: "15rem" }}
        type="text"
        value={search.id}
        onChange={(e) =>
          setSearch((prev) => {
            return {
              ...prev,
              id: e.target.value,
            };
          })
        }
        placeholder="Search..."
      />
      <ul style={{ marginTop: "20px" }}>
        <li style={{ color: "white" }}>
          {result?.title} <br />{" "}
        </li>
      </ul>
    </div>
  );
}
