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
  const [imgDay , setImgDay] = useState([])
  const [selectedImage, setSelectedImage] = useState();

  useEffect (() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=HTe12sCsEjed1E521B1vpAQ90k1IKIzLLbmWvRvy")
    .then(response => response.json())
    .then(data => setImgDay(data))
    .catch(error => console.error("Error", error));
    
    fetch("https://images-api.nasa.gov/search?keywords=nebula")
    .then(response => response.json())
    .then(data => setNebulaImage(data))
    .catch(error => console.error("Error", error));

    fetch("https://images-api.nasa.gov/search?keywords=hubble space")
    .then(response => response.json())
    .then(data => setHubbleImage(data))
    .catch(error => console.error("Error", error));

    fetch("https://images-api.nasa.gov/search?keywords=supernova")
    .then(response => response.json())
    .then(data => setSuperNovaImage(data))
    .catch(error => console.error("Error", error));
  }, [])

  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  return (
    <main>
      <NavBar />
      <ImgOfTheDay imgDay={imgDay} />
      {selectedImage && <ImgDetails selectedImage={selectedImage} />}
      {nebulaImage && <Category apiImage={nebulaImage.collection.items} handleImageClick={handleImageClick}/>}
      {hubbleImage && <Category apiImage={hubbleImage.collection.items} handleImageClick={handleImageClick}/>}
      {superNovaImage && <Category apiImage={superNovaImage.collection.items} handleImageClick={handleImageClick}/>}
    </main>
  );
}

export default App;