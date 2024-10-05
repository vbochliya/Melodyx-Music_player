import css from "./menualbumcard.module.css";

export default function MenuAlbumCard() {
  return (
    <li>
      <img
        src="https://graziamagazine.com/me/wp-content/uploads/sites/16/2023/09/most-popular-celebrity-beauty-brands.jpg"
        alt="Artist"
      />
      <div className={css.card_data}>
        <span className={css.card_data_title}>melody flex</span>
        <span className={css.card_data_subtitle}>Artist</span>
      </div>
    </li>
  );
}
