import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ImageOfTheDay.module.css";



function ImgOfTheDay({ imgDay }) {
 
   return (
    <div className={styles.mainContainer} >
      {imgDay && (
      <NavLink  to='/details/imageoftheday'
        className={styles.box}
        style={{backgroundImage: `url(${imgDay.url.replaceAll(" ","%20")})` }}/>
      )}

    </div>
  );
}

export default ImgOfTheDay;

ImgOfTheDay.propTypes = {
  imgDay: PropTypes.string.isRequired,
};
