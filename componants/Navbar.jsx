import css from "./navbar.module.css";
import { CgProfile } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Navbar() {
  return (
    <>
      <nav className={css.navbar}>
        <div className={css.logo}>
          <img src="./media/logo.png" alt="Molodyx" />
        </div>
        <div className={css.profile}>
          <button className={css.profile_round_button}>
            <CgProfile />
          </button>
          <button className={css.profile_option_button}>
            <BsThreeDotsVertical />
          </button>
        </div>
      </nav>
    </>
  );
}
