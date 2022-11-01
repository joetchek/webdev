import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import AboutView from './components/About';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="about" element={<AboutView/>}/>
      </Routes>

    </div>
  );
}

export default App;
