import { useState, useEffect } from "react";
import css from "./songcardinbigwindow.module.css";

export default function SongCardInBigWindow({
  title,
  url,
  currentSongUrl,
  setcurrentSongUrl,
}) {
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    return () => {
      audio.removeEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });
    };
  }, [url]);

  const formatDuration = (time) => {
    if (!time) return "Loading...";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleOnclick = () => {
    if (!(url == currentSongUrl)) {
      setcurrentSongUrl(url);
    }
  };

  return (
    <li onClick={handleOnclick}>
      <img
        className={css.Music_img}
        src="https://graziamagazine.com/me/wp-content/uploads/sites/16/2023/09/most-popular-celebrity-beauty-brands.jpg"
        alt="Music"
      />
      <span className={css.title}>{title}</span>
      <span className={css.duration}>{formatDuration(duration)}</span>
    </li>
  );
}
