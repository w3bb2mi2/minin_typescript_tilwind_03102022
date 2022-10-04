import { Routes, Route } from "react-router-dom"
import './App.css';
import { Navigation } from "./components/Navigation";
import { FavouritesPage } from "./pages/FavouritesPage";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
}

export default App;
