// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyHome from "./pages/MyHome";
import MyContact from "./pages/MyContact";
import MyThoughts from "./pages/MyThoughts";
import MyWork from "./pages/MyWork";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="work" element={<MyWork />} />
        <Route path="blog" element={<MyThoughts />} />
        <Route path="services" element={<MyContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
