import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ImgDetail.module.css";

function ImgDetails({ selectedImage }) {
  const description = selectedImage.data[0].description.split(/[.!?]/);
  const firstTwoSentences = description.slice(0, 2).join(".");
  const title = selectedImage.data[0].title.split(/[():.!?]/);
  const firstTitle = title.slice(0, 1).join(":");

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={selectedImage.links[0].href}
        alt={selectedImage.data[0].title}
      />
      <h1 className={styles.title}>{firstTitle}</h1>
      <p className={styles.description}>{firstTwoSentences}</p>
      <Link to={`details/${selectedImage.data[0].nasa_id}`} className={styles.detailsbutton}>
        About
      </Link>
    </div>
  );
}
ImgDetails.propTypes = {
  selectedImage: PropTypes.string.isRequired,
};

export default ImgDetails;
