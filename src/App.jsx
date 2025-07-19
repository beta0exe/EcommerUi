import './App.css'
import NavBar from "../Components/NavBar.jsx";
import Footer from "../Components/Footer.jsx";
import Home from "../Components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails.jsx";

function App() {

  return (
    <>

      <NavBar />
        <Routes>
            <Route path="/ProductDetails" element={<ProductDetails />} />
            <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
