import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import navData from "../data/nav.json";
import About from "./pages/About";
import { LayoutContainer, MainContainer, NavContainer, NavList, NavListItem } from "./styles/App.styled";
import Home from "./pages/Home";
import Contact from "./pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <NavContainer>
          <NavList>
            {Object.entries(navData).map(([key, item], index) => (
              <li key={index}>
                <NavListItem><NavLink to={key}>{item.desc}</NavLink></NavListItem>
              </li>
            ))}
          </NavList>
        </NavContainer>
        <MainContainer>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContainer>
      </LayoutContainer>
    </BrowserRouter>
  );
}

export default App;
