import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  const navigate = useNavigate();
  return (
    <main className={styles.mainContainer}>
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
