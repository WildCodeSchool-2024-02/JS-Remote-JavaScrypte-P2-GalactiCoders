import PropTypes from "prop-types";
import styles from "./Category.module.css";
import ImageCategory from "../imgcategory/ImageCategory";

function Category({ apiImage, handleImageClick }) {
  const displayImg = apiImage.slice(6, 10);

  return (
    <div className={styles.category}>
      {displayImg.map((item) => (
        <ImageCategory
          key={item.data[0].title}
          apiImage={item}
          handleImageClick={() => handleImageClick(item)}
        />
      ))}
    </div>
  );
}

export default Category;

Category.propTypes = {
  apiImage: PropTypes.string.isRequired,
  handleImageClick: PropTypes.func.isRequired,
};
