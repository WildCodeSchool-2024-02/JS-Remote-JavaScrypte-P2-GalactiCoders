import PropTypes from "prop-types";
import styles from "./ImageCategory.module.css";

function ImageCategory({ apiImage, handleImageClick }) {
  return (
    <button type="button" onClick={handleImageClick}>
      {" "}
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
  apiImage: PropTypes.string.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};
