import "./styles.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Social from "./components/Social";

export default function App() {
  const [data, setData] = useState(null);
  const controllerData = {
    system: "PS4 V2",
    item: "Dualshock 4",
    description: "Wireless Controller for PlayStation 4",
    details: "(Comaptible/Generic)",
    price: "$32.50",
    img: "./imgs/controller.png"
  };

  useEffect(() => {
    setData(controllerData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Product data={data} />
      <Social />
    </div>
  );
}
