import "./App.css";
import ImgOfTheDay from "./components/imgoftheday/ImgOfTheDay";
import ImgDetails from "./components/imgdetail/Imgdetail";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <main>
      <NavBar />
      <ImgDetails />
      <ImgOfTheDay />
    </main>
  );
}

export default App;
