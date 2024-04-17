import PropTypes from 'prop-types';
import styles from "./Category.module.css";
import ImageCategory from "../imgcategory/ImageCategory";

function Category({ apiImage}) {
  const displayImg = apiImage.slice(0, 3);
  
  return (
    
        <div className={styles.category}>
      {displayImg.map((item) => (
      <ImageCategory key={item.data[0].title} apiImage={item} />
))}
    </div>
  );
}

export default Category;

Category.propTypes = {
    apiImage: PropTypes.string.isRequired,
}
