import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import navData from "../data/nav.json";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <nav
          style={{
            width: "150px",
            minHeight: "100vh",
            backgroundColor: "#212121",
            padding: "1rem",
            borderRight: "1px solid #383838",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              margin: 0,
              padding: 0,
              width: "100%",
            }}
          >
            {Object.entries(navData).map(([key, item], index) => (
              <li key={index}>
                <Link
                  to={key}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    padding: "0.5rem 1rem",
                    display: "block",
                    borderRadius: "4px",
                  }}
                >
                  {item.desc}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main style={{ flex: 1, padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
