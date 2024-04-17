import PropTypes from "prop-types";
import styles from "./ImgDetail.module.css";

function ImgDetails({ selectedImage }) {
  const description = selectedImage.data[0].description.split(/[.!?]/);
  const firstTwoSentences = description.slice(0, 2).join(".");

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={selectedImage.links[0].href}
        alt={selectedImage.data[0].title}
      />
      <h1 className={styles.title}>{selectedImage.data[0].title}</h1>
      <p className={styles.description}>{firstTwoSentences}</p>
      <button className={styles.detailsbutton} type="submit">
        About
      </button>
    </div>
  );
}
ImgDetails.propTypes = {
  selectedImage: PropTypes.string.isRequired,
};

export default ImgDetails;
