import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import styles from "./Category.module.css";
import ImageCategory from "../imgcategory/ImageCategory";

function Category({ apiImage, handleImageClick, titleCategory }) {
  const displayImg = apiImage.slice(20, 24);

  return (
    <>
      <NavLink to={`category/${titleCategory}`} className={styles.categoyLink}>
        <h3>{titleCategory}🔍</h3>
      </NavLink>
      <div className={styles.category}>
        {displayImg.map((item) => (
          <ImageCategory
            key={item.data[0].title}
            apiImage={item}
            handleImageClick={() => handleImageClick(item)}
          />
        ))}
      </div>
    </>
  );
}

export default Category;

Category.propTypes = {
  apiImage: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
  handleImageClick: PropTypes.func.isRequired,
  titleCategory: PropTypes.string.isRequired,
};
