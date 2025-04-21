import { useState } from "react";

import "./App.css";
import Menu from "./components/Menu.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu /> 
      <Carousel />
      <Footer />

    </>
  );
}

export default App;
