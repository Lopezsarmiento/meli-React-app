import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// components
import ItemsList from "./components/itemsList";

function App() {
  const [items, setItems] = useState([]);
  const url =
    "https://api.mercadolibre.com/sites/MLA/search?q=${superstar}&&limit=10";

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(url);
        console.log("data: ", data);
        setItems(data.results);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="jumbotron">
      <ItemsList items={items}></ItemsList>
    </div>
  );
}

const list = [
  {
    id: 1,
    title: "Adidas SuperStar blancas",
    seller: "Adidas originals",
    price: "6.999",
    freeShipping: false,
  },
  {
    id: 2,
    title: "Adidas SuperStar blancas",
    seller: "Adidas originals",
    price: "6.499",
    freeShipping: true,
  },
  {
    id: 3,
    title: "Adidas SuperStar blancas",
    seller: "cisco",
    price: "7.999",
    freeShipping: false,
  },
  {
    id: 4,
    title: "Adidas SuperStar negras Originales",
    seller: "tripStore",
    price: "6.999",
    freeShipping: true,
  },
];

export default App;
