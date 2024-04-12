import "./App.css";
import ImgOfTheDay from "./components/imgoftheday/ImgOfTheDay";
import ImgDetails from "./components/imgdetail/Imgdetail";
import NavBar from "./components/navbar/NavBar";
import Category from "./components/category/Category";

function App() {
  return (
    <main>
      <NavBar />
      <ImgDetails />
      <ImgOfTheDay />
      <Category />
      <Category />
      <Category />
    </main>
  );
}

export default App;