import { useEffect, useState } from "react";
import styles from "./ImageOfTheDay.module.css";

function ImgOfTheDay() {
  const [imgDay, setImgDay] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=HTe12sCsEjed1E521B1vpAQ90k1IKIzLLbmWvRvy"
    )
      .then((response) => response.json())
      .then((data) => setImgDay(data));
  }, []);

  return (
    <div className={styles.mainContainer}>
      <figure
        className={styles.box}
        style={{ backgroundImage: `url(${imgDay.url})` }}
      >
        {/* <img className={styles.image} src={imgDay.url} alt={imgDay.title} /> */}
      </figure>
    </div>
  );
}

export default ImgOfTheDay;
