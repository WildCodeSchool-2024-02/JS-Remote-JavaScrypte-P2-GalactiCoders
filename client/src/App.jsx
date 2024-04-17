import { useState, useEffect } from "react";
import ImgOfTheDay from "./components/imgoftheday/ImgOfTheDay";
import ImgDetails from "./components/imgdetail/Imgdetail";
import NavBar from "./components/navbar/NavBar";
import Category from "./components/category/Category";
import "./App.css";

function App() {
  const [apiImage, setApiImage] = useState(null);
  const [imgDay, setImgDay] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=HTe12sCsEjed1E521B1vpAQ90k1IKIzLLbmWvRvy"
    )
      .then((response) => response.json())
      .then((data) => setImgDay(data));
  }, []);

  useEffect(() => {
    fetch("https://images-api.nasa.gov/search?keywords=galaxy")
      .then((response) => response.json())
      .then((data) => setApiImage(data))
      .catch((error) => console.error("Error", error));
  }, []);
  return (
    <main className="mainBody">
      <NavBar />
      <ImgOfTheDay imgDay={imgDay} />

      <ImgDetails className="itemDetails" />
      <div className="mainContainer">
        {apiImage && (
          <Category className="item1" apiImage={apiImage.collection.items} />
        )}
        {apiImage && (
          <Category className="item2" apiImage={apiImage.collection.items} />
        )}
        {apiImage && (
          <Category className="item3" apiImage={apiImage.collection.items} />
        )}
      </div>
    </main>
  );
}

export default App;
