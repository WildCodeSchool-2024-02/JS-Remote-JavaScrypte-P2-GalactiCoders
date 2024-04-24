import { useLoaderData, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "../../components/navbar/NavBar";
import styles from "./CategoryPage.module.css";

export default function CategoryPage({categoryTitle}) {
const categoryData = useLoaderData();
  
  return (
    <>
      <NavBar />
       <h1>{categoryTitle}</h1> 
        <div className={styles.container}>
        {categoryData.collection.items.map((item) => (
      <NavLink to={`/category/details/${item.data[0].nasa_id}`} key={item.data[0].nasa_id}> 
        <img className={styles.image}
               src={item.links[0].href}
               alt={item.data[0].title} />
      </NavLink >
        ))}
        </div>
    </>
  );
}

CategoryPage.propTypes = {
  categoryTitle: PropTypes.shape({
  data: PropTypes.arrayOf(
  PropTypes.shape({
    nasa_id: PropTypes.string.isRequired
  })  
    ).isRequired,
  links: PropTypes.arrayOf(
  PropTypes.shape({
  href: PropTypes.string.isRequired
})
).isRequired
})
};
CategoryPage.defaultProps=
  {categoryTitle:
  {
   data:[],
   links:[]
  }} 
