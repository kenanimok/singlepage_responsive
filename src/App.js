import logo from "./logo.svg";
import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Service from "./pages/Service/Service";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Proucuts";
import SignUp from "./pages/Signup/Sigup";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
