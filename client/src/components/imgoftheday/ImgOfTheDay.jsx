import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ImageOfTheDay.module.css";

function ImgOfTheDay({ imgDay }) {
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      {imgDay && (
        <figure
          type="button"
          onClick={() => navigate("/details/imageoftheday")}
          onKeyDown={() => navigate("/details/imageoftheday")}
          role="none"
          className={styles.box}
          style={{
          backgroundImage: `url(${imgDay.url.replaceAll(" ", "%20")})`,
          }}
        />
      )}
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
