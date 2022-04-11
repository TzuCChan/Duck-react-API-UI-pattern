import React, {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Navbar from './Navbar.jsx';
import Home from './Home.jsx'
import './App.css';

function App() {
  const [duckIds, setDuckIds] = useState([])
  
  const getDucks = async () => {
    let results = await axios("https://random-d.uk/api/v2/list")
    setDuckIds(results.data.images)
  }

  useEffect(() => {
    getDucks()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home duckIds={duckIds} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
