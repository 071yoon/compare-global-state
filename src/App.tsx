import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Redux from "./redux/Redux";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redux" element={<Redux />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
