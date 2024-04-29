import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ImgDetail.module.css";

function ImgDetails({ selectedImage, unSwitchClass, resetOnClose }) {
  const description = selectedImage.data[0].description.split(/[.!?]/);
  const firstTwoSentences = description.slice(0, 2).join(".");
  const title = selectedImage.data[0].title.split(/[():.!?]/);
  const firstTitle = title.slice(0, 1).join(":");
 
  const close = () => {
    unSwitchClass();
    resetOnClose();
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.closebutton}
        type="submit"
        onClick={close}
      >X</button>
      <img
        className={styles.img}
        src={selectedImage.links[0].href}
        alt={selectedImage.data[0].title}
      />
      <h1 className={styles.title}>{firstTitle}</h1>
      <p className={styles.description}>{firstTwoSentences}</p>
      <Link
        to={`details/${selectedImage.data[0].nasa_id}`}
        className={styles.detailsbutton}
      >
        About
      </Link>
    </div>
  );
}

export default ImgDetails;

ImgDetails.propTypes = {
  selectedImage: PropTypes.shape({
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        nasa_id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
  unSwitchClass: PropTypes.func.isRequired,
  resetOnClose: PropTypes.func.isRequired
};
