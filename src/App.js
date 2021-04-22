import logo from './logo.svg';
import './App.css';
import { LandingPage } from './pages/LandingPage';
import { Playlist } from './pages/Playlist';
import { WatchLater } from './pages/WatchLater';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Sidebar } from "./components/Sidebar";
import { VideoPage } from './pages/videoPage';

function App() {
  return (
    <div className="App">  
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
        <Route path="/watchlater" element={<WatchLater />}></Route>
        <Route path="/video" element={<VideoPage />}></Route>
      </Routes>    
    </div>
  );
}

export default App;
