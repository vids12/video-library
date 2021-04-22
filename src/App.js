import './App.css';
import { LandingPage } from './pages/LandingPage';
import { Playlist } from './pages/Playlist';
import { WatchLater } from './pages/WatchLater';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Sidebar } from "./components/Sidebar";
import { VideoPage } from './pages/videoPage';
import { LikedVideo } from './pages/likedvideo';
import { NotFound} from './pages/404';

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
        <Route path="/likedvideos" element={<LikedVideo />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>    
    </div>
  );
}

export default App;
