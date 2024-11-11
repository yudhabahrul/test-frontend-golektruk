import React, { useState, useRef } from "react";

const data = [
  { id: 1, country: "United States" },
  { id: 2, country: "Canada" },
  { id: 3, country: "Mexico" },
  { id: 4, country: "Brazil" },
  { id: 5, country: "Argentina" },
  { id: 6, country: "United Kingdom" },
  { id: 7, country: "France" },
  { id: 8, country: "Germany" },
  { id: 9, country: "Italy" },
  { id: 10, country: "Spain" },
  { id: 11, country: "Russia" },
  { id: 12, country: "China" },
  { id: 13, country: "Japan" },
  { id: 14, country: "South Korea" },
  { id: 15, country: "India" },
  { id: 16, country: "Australia" },
  { id: 17, country: "South Africa" },
  { id: 18, country: "Egypt" },
  { id: 19, country: "Nigeria" },
  { id: 20, country: "Kenya" },
];

function Soal2() {
  // buatlah select box tanpa menggunakan plugin

  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLSelectElement>(null);

  // fungsi untuk mengatur negara yang dipilih dan menutup dropdown
  const handleSelect = (country: string) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  // fungsi untuk menghapus pilihan negara yang dipilih dan mengatur nilai input ke kosong
  const clearSelection = () => {
    setSelectedCountry("");
    if (selectRef.current) {
      selectRef.current.value = "";
    }
  };

  // fungsi untuk membuka atau menutup dropdown saat input diklik
  const toggleDropdown = (e: React.MouseEvent<HTMLInputElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(!isOpen);
      if (!isOpen && selectRef.current) {
        selectRef.current.focus();
        selectRef.current.click();
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <div>
        <p
          style={{
            fontSize: "18px",
            color: "white",
          }}
        >
          value: {selectedCountry}
        </p>

        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Select"
            value={selectedCountry}
            onClick={toggleDropdown}
            style={{
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "8px",
              width: "200px",
              cursor: "pointer",
            }}
            readOnly
          />
          {selectedCountry && (
            <button
              onClick={clearSelection}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                zIndex: "10",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              X
            </button>
          )}
          <select
            ref={selectRef}
            value={selectedCountry}
            onChange={(e) => handleSelect(e.target.value)}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              opacity: 0,
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
          >
            {data.map((item) => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Ekspektasi hasil */}
      <iframe
        src="/soal2.mp4"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          border: "1px solid white",
        }}
      ></iframe>
    </div>
  );
}

export default Soal2;
