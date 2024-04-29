import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./DetailsPage.module.css";

export default function DetailsPage() {
  const [selectedObject, setSelectedObject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_SEARCH_URL}${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedObject(data))
      .catch((error) => console.error("Error", error));
  }, [id]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.detailMainContainer}>
      <NavBar />
      {selectedObject && (
        <>
          <h1>{selectedObject.collection.items[0].data[0].title}</h1>
          <h2>{selectedObject.collection.items[0].data[0].date_created}</h2>
          <div className={styles.imgContainer}>
            <img
              alt={selectedObject.collection.items[0].data[0].title}
              className={styles.catchfullImg}
              src={selectedObject.collection.items[0].links[0].href}
            />
          </div>
            <button
            type="button"
            onClick={handleBack}
            className={styles.BackButton}
          >
            🔙
          </button>
          <p className={styles.explanation}>
            {selectedObject.collection.items[0].data[0].description}
          </p>
        </>
      )}
    </div>
  );
}
