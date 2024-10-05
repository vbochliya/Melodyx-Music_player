import MenuAlbumCard from "./MenuAlbumCard";
import css from "./menulist.module.css";
import { BiLibrary } from "react-icons/bi";

export default function MenuList() {
  return (
    <div className={css.menu_container}>
      <div className={css.menu_heading}>
        <BiLibrary />
        <span>&nbsp;Library</span>
      </div>
      <div className={css.munu_album_container}>
        <ul>
          <MenuAlbumCard className="list1"></MenuAlbumCard>
        </ul>
      </div>
    </div>
  );
}
