import PropTypes from "prop-types";
import styles from "./ImageCategory.module.css";

function ImageCategory({ apiImage, handleImageClick }) {
  return (
    <button
      className={styles.buttonImage}
      type="button"
      onClick={handleImageClick}
    >
      <img
        className={styles.ImageCategory}
        src={apiImage.links[0].href}
        alt={apiImage.data[0].title}
      />
    </button>
  );
}

export default ImageCategory;

ImageCategory.propTypes = {
  apiImage: PropTypes.shape({
    links: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  handleImageClick: PropTypes.func.isRequired,
};
