import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Search from './Components/Search';
import About from './Components/About';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route , Link} from "react-router-dom"
import React from 'react';
import Time from './Components/Time';

function App() {
  const [videos, setVideos] = useState([])
  const [submit, setSubmit] = useState(false)
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q=${search}&key=${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items)
      });
     
  }, [submit]);
  // console.log(data)
  return (
    <Router>
      {console.log(videos)}
    <div className="App">
     <Nav />
     <Home />
     <About />
     <Time />
     
     <Search search={search} setSearch={setSearch} submit={submit} setSubmit={setSubmit}/>
     <Routes>
      <Route path="/" element={<Home videos={videos} />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
