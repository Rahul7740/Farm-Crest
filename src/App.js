import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./common/Header";
import AboutUS from "./pages/AboutUS";
import Inverntory from "./pages/Inverntory";
import Contact from "./pages/Contact";
import Footer from "./common/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUS" element={<AboutUS />} />
        <Route path="/inverntory" element={<Inverntory />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
