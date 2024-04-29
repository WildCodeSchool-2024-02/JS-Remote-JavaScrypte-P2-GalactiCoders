import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from "./SearchPage.module.css";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);

  /**
   * fetch search function from API
   * @param {fetch} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_SEARCH_URL}${search}`)
      .then((response) => response.json())
      .then((data) => setDisplay(data.collection.items))
      .catch((error) => console.error("Error", error));
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.searchMainContainer}>
      <NavBar />
      <h1>Explore !</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          value={search}
          onChange={handleChange}
        />
        <button type="submit" className={styles.btnSearch}>
          search
        </button>
      </form>
      {display && (
        <div className={styles.container}>
          {display.map((item) => (
            <NavLink
              to={`/details/${item.data[0].nasa_id}`}
              key={item.data[0].nasa_id}
            >
              <img
                className={styles.image}
                src={item.links ? item.links[0].href : ""}
                alt={item.data[0].title}
              />
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
