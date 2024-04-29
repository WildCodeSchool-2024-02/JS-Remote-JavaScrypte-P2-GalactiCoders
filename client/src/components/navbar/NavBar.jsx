import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  const returnHome = useNavigate();
  return (
    <main className={styles.mainContainer}>
      <ul className={styles.listContainer}>
        <li
          type="button"
          onClick={() => returnHome("/category/Nebula")}
          onKeyDown={() => returnHome("/category/Nebula")}
          role="none"
        >
          Nebula
        </li>
        <li
          type="button"
          onClick={() => returnHome("/category/Hubble")}
          onKeyDown={() => returnHome("/category/Hubble")}
          role="none"
        >
          Hubble
        </li>
        <li
          type="button"
          onClick={() => returnHome("/category/Supernova")}
          onKeyDown={() => returnHome("/category/Supernova")}
          role="none"
        >
          Supernova
        </li>
        <li
          type="button"
          onClick={() => returnHome("/search")}
          onKeyDown={() => returnHome("/search")}
          role="none"
        >
          Search
        </li>
      </ul>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div
            type="button"
            className={styles.logo}
            onClick={() => returnHome("/")}
            onKeyDown={() => returnHome("/")}
            role="none"
          />
        </div>
      </div>
    </main>
  );
}
export default NavBar;
