import { useState, useEffect, useCallback } from "react";
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
  const [isOpen, setIsOpen] = useState(false);
  const switchClass = () => {
      if (!isOpen) {
        setIsOpen(true);
    }
  };
  const unSwitchClass = () => {
    setIsOpen(!isOpen);
  }; 
  const resetOnClose = useCallback(() => {
    setSelectedImage();
  },[]);
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_IMGDAY_URL}${import.meta.env.VITE_API_KEY}`)
      .then((response) => response.json())
      .then((data) => setImgDay(data))
      .catch((error) => console.error("Error", error));

    fetch(`${import.meta.env.VITE_API_NEBULA_URL}`)
      .then((response) => response.json())
      .then((data) => setNebulaImage(data))
      .catch((error) => console.error("Error", error));

    fetch(`${import.meta.env.VITE_API_HUBBLE_URL}`)
      .then((response) => response.json())
      .then((data) => setHubbleImage(data))
      .catch((error) => console.error("Error", error));

    fetch(`${import.meta.env.VITE_API_SUPERNOVA_URL}`)
      .then((response) => response.json())
      .then((data) => setSuperNovaImage(data))
      .catch((error) => console.error("Error", error));
  }, []);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    switchClass();
  };

  return (
    <main className="mainBody">
        <NavBar />
        <ImgOfTheDay imgDay={imgDay} />
      <div className={`backgroundImage ${isOpen ? "backgroundImage-active" : ""}`}>
        <div className="mainContainer">
          {nebulaImage && (
            <Category
              apiImage={nebulaImage.collection.items}
              handleImageClick={handleImageClick}
              titleCategory="Nebula"
            />
          )}
          {hubbleImage && (
            <Category
              apiImage={hubbleImage.collection.items}
              handleImageClick={handleImageClick}
              titleCategory="Hubble"
            />
          )}
          {superNovaImage && (
            <Category
              apiImage={superNovaImage.collection.items}
              handleImageClick={handleImageClick}
              titleCategory="Supernova"
            />
          )}
        </div>
        <div className="rightAside">
          {selectedImage && (
            <ImgDetails className="itemDetails" 
                        selectedImage={selectedImage}
                        unSwitchClass={unSwitchClass}
                        resetOnClose={resetOnClose} />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
