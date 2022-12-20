import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Redux from "./redux/Redux";
import Zustand from "./zustand/Zustand";
import Recoil from "./recoil/Recoil";
import Jotai from "./jotai/Jotai";
import ContextAPI from "./context-api/ContextAPI";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/zustand" element={<Zustand />} />
          <Route path="/recoil" element={<Recoil />} />
          <Route path="/jotai" element={<Jotai />} />
          <Route path="/context-api" element={<ContextAPI />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
