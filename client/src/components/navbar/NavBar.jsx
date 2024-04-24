import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  const navigate = useNavigate();
  return (
    <main className={styles.mainContainer}>
      <ul className={styles.listContainer}>
        <li
          type="button"
          onClick={() => navigate("/category/Nebula")}
          onKeyDown={() => navigate("/category/Nebula")}
          role="none"
        >
          Nébula
        </li>
        <li
          type="button"
          onClick={() => navigate("/category/Hubble")}
          onKeyDown={() => navigate("/category/Hubble")}
          role="none"
        >
          Hubble
        </li>
        <li
          type="button"
          onClick={() => navigate("/category/Supernova")}
          onKeyDown={() => navigate("/category/Supernova")}
          role="none"
        >
          Supernova
        </li>
      </ul>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div
            type="button"
            className={styles.logo}
            onClick={() => navigate("/")}
            onKeyDown={() => navigate("/")}
            role="none"
          />

          {/* <Link to="/" onClick={handleOnClick} className={styles.logo}>
            Home
          </Link> */}
        </div>
      </div>
    </main>
  );
}
export default NavBar;
