import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Soal1 from "./soal/soal1.tsx";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Soal2 from "./soal/soal2.tsx";
import Soal3 from "./soal/soal3.tsx";
import Soal5 from "./soal/soal5.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        style={{
          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "2rem",
        }}
      >
        <a href="/soal1">Soal 1</a>
        <a href="/soal2">Soal 2</a>
        <a href="/soal3">Soal 3</a>
        <a href="/soal4">Soal 4</a>
        <a href="/soal5">Soal 5</a>
      </div>
    ),
  },
  {
    path: "/soal1",
    element: <Soal1 />,
  },
  {
    path: "/soal2",
    element: <Soal2 />,
  },
  {
    path: "/soal3",
    element: <Soal3 />,
  },
  {
    path: "/soal4",
    element: null,
  },
  {
    path: "/soal5",
    element: <Soal5 />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div id="modal-root"></div>
    <RouterProvider router={router} />
  </StrictMode>
);
