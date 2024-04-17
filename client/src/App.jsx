import { useState, useEffect } from "react";
import ImgOfTheDay from "./components/imgoftheday/ImgOfTheDay";
import ImgDetails from "./components/imgdetail/Imgdetail";
import NavBar from "./components/navbar/NavBar";
import Category from "./components/category/Category";

function App() {
  const [apiImage, setApiImage] = useState(null);

  useEffect(() => {
    fetch("https://images-api.nasa.gov/search?keywords=galaxy")
      .then((response) => response.json())
      .then((data) => setApiImage(data))
      .catch((error) => console.error("Error", error));
  }, []);
  return (
    <main className="mainBody">
      <NavBar />
      <ImgOfTheDay />
      <ImgDetails />
      {apiImage && <Category apiImage={apiImage.collection.items} />}
      {apiImage && <Category apiImage={apiImage.collection.items} />}
      {apiImage && <Category apiImage={apiImage.collection.items} />}
    </main>
  );
}

export default App;
