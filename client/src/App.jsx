import { useState, useEffect } from "react";
import ImgOfTheDay from "./components/imgoftheday/ImgOfTheDay";
import ImgDetails from "./components/imgdetail/Imgdetail";
import NavBar from "./components/navbar/NavBar";
import Category from "./components/category/Category";
import "./App.css";

function App() {
  const [apiImage, setApiImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch("https://images-api.nasa.gov/search?keywords=galaxy")
      .then((response) => response.json())
      .then((data) => setApiImage(data))
      .catch((error) => console.error("Error", error));
  }, []);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  return (
    <main>
      <NavBar />
      <ImgOfTheDay />
      {selectedImage && <ImgDetails selectedImage={selectedImage} />}
      {apiImage && (
        <Category
          apiImage={apiImage.collection.items}
          handleImageClick={handleImageClick}
        />
      )}
      {apiImage && <Category apiImage={apiImage.collection.items} />}
      {apiImage && <Category apiImage={apiImage.collection.items} />}
      {apiImage && <Category apiImage={apiImage.collection.items} />}
    </main>
  );
}

export default App;
