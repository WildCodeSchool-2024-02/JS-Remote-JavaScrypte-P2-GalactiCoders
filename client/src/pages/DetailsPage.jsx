import { useState, useEffect } from "react";
import NavBar from "../components/navbar/NavBar";
import styles from "./DetailsPage.module.css";

export default function DetailsPage() {
  const [imgDay, setImgDay] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setImgDay(data))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <div className={styles.detailMainContainer}>
      <NavBar />
      <h1>{imgDay.title}</h1>
      <h2>{imgDay.date}</h2>

      <div className={styles.imgContainer}>
        <img
          alt={imgDay.title}
          className={styles.catchfullImg}
          src={imgDay.url}
        />
      </div>
      <p className={styles.explanation}>{imgDay.explanation}</p>
    </div>
  );
}
