import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainBarr from './Components/MainBarr'
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <MainBarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<div> "test page"</div>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
