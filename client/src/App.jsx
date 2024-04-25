import { useState, useEffect } from "react";
import ImgOfTheDay from "./components/imgoftheday/ImgOfTheDay";
import ImgDetails from "./components/imgdetail/Imgdetail";
import NavBar from "./components/navbar/NavBar";
import Category from "./components/category/Category";
import "./App.css";

function App() {
  const [nebulaImage, setNebulaImage] = useState(null);
  const [hubbleImage, setHubbleImage] = useState(null);
  const [superNovaImage, setSuperNovaImage] = useState(null);
  const [imgDay, setImgDay] = useState(null);
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setImgDay(data))
      .catch((error) => console.error("Error", error));

    fetch("https://images-api.nasa.gov/search?keywords=nebula")
      .then((response) => response.json())
      .then((data) => setNebulaImage(data))
      .catch((error) => console.error("Error", error));

    fetch("https://images-api.nasa.gov/search?keywords=hubble%20space")
      .then((response) => response.json())
      .then((data) => setHubbleImage(data))
      .catch((error) => console.error("Error", error));

    fetch("https://images-api.nasa.gov/search?keywords=supernova")
      .then((response) => response.json())
      .then((data) => setSuperNovaImage(data))
      .catch((error) => console.error("Error", error));
  }, []);

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  return (
    <main className="mainBody">
      <div className="backgroundImage">
        <NavBar />
        <ImgOfTheDay imgDay={imgDay} />

        <div className="mainContainer">
          {nebulaImage && (
            <Category
              apiImage={nebulaImage.collection.items}
              handleImageClick={handleImageClick}
              titleCategory ="Nebula"
            />
          )}
          {hubbleImage && (
            <Category
              apiImage={hubbleImage.collection.items}
              handleImageClick={handleImageClick}
              titleCategory ="Hubble"
            />
          )}
          {superNovaImage && (
            <Category
              apiImage={superNovaImage.collection.items}
              handleImageClick={handleImageClick}
              titleCategory ="Supernova"
            />
          )}
        </div>
        <div className="rightAside">
          {selectedImage && (
            <ImgDetails className="itemDetails" selectedImage={selectedImage} />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
