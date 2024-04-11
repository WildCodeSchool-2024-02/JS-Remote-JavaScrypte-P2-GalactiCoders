import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logo} />
        </div>
      </div>
    </main>
  );
}
export default NavBar;
