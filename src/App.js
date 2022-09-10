import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar></Navbar>
    </BrowserRouter>
  );
}

export default App;
