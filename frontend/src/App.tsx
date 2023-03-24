import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Create from "./Pages/Create/Create";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Create />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
