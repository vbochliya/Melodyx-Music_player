import React, { useState, useRef, useEffect } from "react";
import css from "./footerplayer.module.css";
import { IoPlayBackOutline, IoPlayForwardOutline } from "react-icons/io5";
import { IoIosPause, IoIosPlay } from "react-icons/io";
import { MdOpenInFull } from "react-icons/md";

export default function FooterPlayer({
  song_data,
  currentSongOutsideUrl,
  setcurrentSongOutsideUrl,
}) {
  const [songs, setsongs] = useState(song_data);
  const [isPlaying, setisPlaying] = useState(false);
  const [currentSong, setcurrentSong] = useState(songs[0]);
  const [currentTime, setcurrentTime] = useState(0);
  const [duration, setduration] = useState();
  const [currentSongTitle, setcurrentSongTitle] = useState(songs[0].title);

  const audioElem = useRef();

  const isFirstRenderOfDom = useRef(true);
  useEffect(() => {
    audioElem.current.pause();
    setisPlaying(false);
    const index = songs.findIndex((x) => x.url === currentSongOutsideUrl);
    setcurrentSong(songs[index]);
    setcurrentSongTitle(songs[index].title);
    setcurrentTime(0);
    if (!isFirstRenderOfDom.current) {
      audioElem.current.play();
      setisPlaying(false);
    } else {
      isFirstRenderOfDom.current = false;
    }
  }, [currentSongOutsideUrl]);

  const playPause = () => {
    if (isPlaying) {
      audioElem.current.pause();
    } else {
      audioElem.current.play();
    }
    setisPlaying(!isPlaying);
  };

  const onplaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setduration(duration);
    setcurrentTime(ct);
    if (ct == duration) {
      skipForward();
    }
  };
  const handleSliderChange = (e) => {
    audioElem.current.currentTime = (e.target.value / 100) * duration;
    setcurrentTime(audioElem.current.currentTime);
  };
  // Format time as mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const skipBack = () => {
    setisPlaying(false);
    const index = songs.findIndex((x) => x.title === currentSong.title);
    const newIndex = index === 0 ? songs.length - 1 : index - 1;
    setcurrentSong(songs[newIndex]);
    setcurrentSongTitle(songs[newIndex].title);
    setcurrentTime(0);
    audioElem.current.play();
  };
  const skipForward = () => {
    setisPlaying(false);
    const index = songs.findIndex((x) => x.url === currentSong.url);
    const newIndex = index === songs.length - 1 ? 0 : index + 1;
    setcurrentSong(songs[newIndex]);
    setcurrentSongTitle(songs[newIndex].title);
    setcurrentTime(0);
    audioElem.current.play();
  };

  return (
    <div className={css.footer_main_container}>
      <audio
        onTimeUpdate={onplaying}
        ref={audioElem}
        src={currentSong.url}
      ></audio>

      <div id="player_div_1" className={css.player_about}>
        <img
          className={css.music_img}
          src="https://graziamagazine.com/me/wp-content/uploads/sites/16/2023/09/most-popular-celebrity-beauty-brands.jpg"
          alt="Music"
        />
        <span className={css.title}>{currentSongTitle}</span>
      </div>

      <div id="player_div_2" className={css.nevigater}>
        <div className={css.nevigate_options}>
          <button onClick={skipBack}>
            <IoPlayBackOutline />
          </button>
          <button onClick={playPause}>
            {isPlaying ? <IoIosPause /> : <IoIosPlay />}
          </button>
          <button onClick={skipForward}>
            <IoPlayForwardOutline />
          </button>
        </div>

        <div className={css.slider}>
          <span>{!isNaN(currentTime) ? formatTime(currentTime) : "0:00"}</span>
          <input
            type="range"
            min="0"
            max="100"
            value={
              !isNaN(currentTime) && !isNaN(duration)
                ? (currentTime / duration) * 100
                : 0
            }
            onChange={handleSliderChange}
            className={css.slider_input}
          />
          <span>{!isNaN(duration) ? formatTime(duration) : "0:00"}</span>
        </div>
      </div>

      <div id="player_div_3" className={css.options}>
        <button disabled>
          <MdOpenInFull />
        </button>
      </div>
    </div>
  );
}
