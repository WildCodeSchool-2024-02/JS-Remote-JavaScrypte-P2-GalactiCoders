import PropTypes from "prop-types";
import styles from "./ImageOfTheDay.module.css";

function ImgOfTheDay({ imgDay }) {
  return (
    <div className={styles.mainContainer}>
      {imgDay && (
      <figure
        className={styles.box}
        style={{backgroundImage: `url(${imgDay.url.replaceAll(" ","%20")})` }}
      />)}
    </div>
  );
}

export default ImgOfTheDay;

ImgOfTheDay.propTypes = {
  imgDay: PropTypes.oneOfType([
    PropTypes.shape({ 
      url: PropTypes.string.isRequired,
    }),
    PropTypes.oneOf([null]),
  ]),
};

ImgOfTheDay.defaultProps = {
  imgDay: null,
};
