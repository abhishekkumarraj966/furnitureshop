
import "./App.css";
import Navbar from "./Components/Navbar"
import Layout from "./Components/Layout"
import Footer from "./Components/Footer"
import Blogespag from "./Components/Blogpg"
import Probuctpage from "./Components/Productpage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#ECECEC]">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Layout />} />
          <Route path="/blogespag" element={<Blogespag />} />
        <Route path="/productpage" element={<Probuctpage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
