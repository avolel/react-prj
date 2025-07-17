import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./NavBar";
import About from "./About";
import AI_ParkingViolationsNYC from "./AI_ParkingViolationsNYC";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai-parking" element={<AI_ParkingViolationsNYC />} />
      </Routes>
    </>
  );
}

export default App;
