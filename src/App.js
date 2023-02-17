import logo from "./logo.svg";
import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Service from "./pages/Service/Service";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
