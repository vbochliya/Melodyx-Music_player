import "./App.css";
import { useState } from "react";
import Navbar from "../public/componants/Navbar";
import MenuList from "../public/componants/MenuList";
import ViewAlbum from "../public/componants/ViewAlbum";
import FooterPlayer from "../public/componants/FooterPlayer";

const song_data = [
  {
    title: "sample-3s",
    url: "/music/artist-1/sample-3s.mp3",
  },
  {
    title: "sample-6s",
    url: "/music/artist-1/sample-6s.mp3",
  },
  {
    title: "sample-9s",
    url: "/music/artist-1/sample-9s.mp3",
  },
  {
    title: "sample-12s",
    url: "/music/artist-1/sample-12s.mp3",
  },
  {
    title: "sample-15s",
    url: "/music/artist-1/sample-15s.mp3",
  },
];

function App() {
  const [currentSongUrl, setcurrentSongUrl] = useState(song_data[0].url);
  console.log(currentSongUrl);

  return (
    <div className="main_container">
      <Navbar></Navbar>
      <div className="middle_area">
        <MenuList></MenuList>
        <ViewAlbum
          song_data={song_data}
          currentSongUrl={currentSongUrl}
          setcurrentSongUrl={setcurrentSongUrl}
        ></ViewAlbum>
      </div>
      <FooterPlayer
        song_data={song_data}
        currentSongOutsideUrl={currentSongUrl}
        setcurrentSongOutsideUrl={setcurrentSongUrl}
      ></FooterPlayer>
    </div>
  );
}

export default App;
