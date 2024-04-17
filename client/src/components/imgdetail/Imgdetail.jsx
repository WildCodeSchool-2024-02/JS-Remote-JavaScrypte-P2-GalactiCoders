import styles from "./ImgDetail.module.css";

function ImgDetails() {
  return (
    <div className={styles.container}>
      <img className={styles.img}src="https://media.istockphoto.com/id/481229372/fr/photo/galaxie-spirale-illustration-de-la-voie-lact%C3%A9e.jpg?s=612x612&w=0&k=20&c=b2PsgdKm7IwiJfrGbhq2SgNbPXrgczuE3QPQ712g5Z4="alt="Spiral Galaxy - Milkyway"/>
      <h1 className={styles.title}>Spiral Galaxy</h1>
      <p className={styles.description}>These galaxies resemble giant rotating pinwheels with a pancake-like disk of stars and a central bulge or tight concentration of stars.The spiral arms can be wound tightly or loosely, and some cannot be seen from Earth because we view the galaxy from the side, edge on.</p>
      <button className={styles.detailsbutton} type="submit">About</button>
    </div>
  );
}

export default ImgDetails; 