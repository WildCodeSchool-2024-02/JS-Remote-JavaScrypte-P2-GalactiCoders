import PropTypes from 'prop-types';
import styles from "./ImageOfTheDay.module.css";

function ImgOfTheDay ({imgDay}) {

  return (
    <div className={styles.box}>
      <img className={styles.image} src={imgDay.url} alt={imgDay.title} />
    </div>
  );
}

export default ImgOfTheDay;


ImgOfTheDay.propTypes = {
    imgDay: PropTypes.string.isRequired,
}