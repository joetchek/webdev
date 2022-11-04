import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/About";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ae2ea625f4bced7c8c75e4e98289742f&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
  }, [searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<AboutView />} />
        <Route path="search" element={<Search keyword={searchText} searchResults={searchResults}/>} />
      </Routes>
    </div>
  );
}

export default App;
