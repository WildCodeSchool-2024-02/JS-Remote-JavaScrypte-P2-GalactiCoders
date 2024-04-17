import PropTypes from 'prop-types';
import styles from "./ImageCategory.module.css";

function ImageCategory({ apiImage}) {
  return ( 
    
  <img className={styles.ImageCategory} src={apiImage.links[0].href} alt={apiImage.data[0].title} />
    
  )
}

export default ImageCategory;

ImageCategory.propTypes = {
    apiImage: PropTypes.string.isRequired,
};

