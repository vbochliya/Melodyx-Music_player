import css from "./viewalbum.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import SongCardInBigWindow from "./SongCardInBigWindow";
import { useEffect } from "react";

export default function ViewAlbum({
  song_data,
  currentSongUrl,
  setcurrentSongUrl,
}) {
  useEffect(() => {
    const main_view_container = document.getElementById("main_view_container");

    main_view_container.style.backgroundImage =
      "url('https://plus.unsplash.com/premium_photo-1674086973168-4fbfa03f32e9?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
  });

  return (
    <div className={css.main_view_container} id="main_view_container">
      <div className={css.into_title_big}>Melody flex</div>
      <div className={css.album_operations}>
        <button
          onClick={() => {
            setcurrentSongUrl(song_data[0].url);
          }}
          className={`${css.album_opration_btns} ${css.play_all_button}`}
        >
          <FaCirclePlay />
        </button>
        <button className={`${css.album_opration_btns} ${css.follow_button}`}>
          Follow
        </button>
        <button className={`${css.album_opration_btns} ${css.option_button}`}>
          <BsThreeDotsVertical />
        </button>
      </div>

      <div className={css.song_list}>
        <span className={css.album_song_arranging_order}>Popular</span>
        {song_data.map((song, index) => (
          <SongCardInBigWindow
            key={index}
            title={song.title}
            url={song.url}
            currentSongUrl={currentSongUrl}
            setcurrentSongUrl={setcurrentSongUrl}
          />
        ))}
      </div>
    </div>
  );
}
