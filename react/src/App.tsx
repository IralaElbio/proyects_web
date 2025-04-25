import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBarr from "./Components/MainBarr";
import Home from "./Pages/Home";
import DuckGame from "./Pages/duckgame/DuckGame";

function App() {
  return (
    <div>
      <Router basename="/proyects_web">
        <MainBarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/duckgame" element={<DuckGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
