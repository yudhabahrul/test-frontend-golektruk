import { useState, useRef, useEffect } from "react";

const Soal1 = () => {
  // 1. Buat kotak dibawah menjadi elemen drag and drop tanpa menggunakan plugin

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // fungsi ini akan dipanggil ketika mouse bergerak
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const box = boxRef.current;
      if (!box) return;

      const boxRect = box.getBoundingClientRect();
      let newX = e.clientX - boxRect.width / 2;
      let newY = e.clientY - boxRect.height / 2;

      newX = Math.max(0, Math.min(newX, window.innerWidth - boxRect.width));
      newY = Math.max(0, Math.min(newY, window.innerHeight - boxRect.height));

      setPosition({ x: newX, y: newY });
    };

    // fungsi ini akan dipanggil ketika mouse berhenti ditekan
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Fungsi untuk menangani event ketika mouse ditekan
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <>
      <div
        ref={boxRef}
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: "#fff",
          width: 40,
          height: 40,
          borderRadius: "8px",
        }}
        onMouseDown={handleMouseDown}
      ></div>

      {/* Ekspektasi hasil */}
      <iframe
        src="/soal1.mp4"
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          border: "1px solid white",
        }}
      ></iframe>
    </>
  );
};

export default Soal1;
