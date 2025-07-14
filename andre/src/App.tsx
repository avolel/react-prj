import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";
import AI from "./AI";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
    </>
  );
}

export default App;
