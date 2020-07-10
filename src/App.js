import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// components
import ItemsList from "./components/itemsList";
import SearchBar from "./components/searchBar";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const url = `https://api.mercadolibre.com/sites/MLA/search?q=${search}&&limit=10`;

  useEffect(() => {
    if (search === "") {
      return;
    }
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
  }, [url]);

  const handleSubmit = (event, query) => {
    event.preventDefault();
    console.log("query", query);
    setSearch(query);
  };
  return (
    <React.Fragment>
      <SearchBar handleSubmit={handleSubmit}></SearchBar>
      <hr></hr>
      <div className="">
        <ItemsList items={items}></ItemsList>
      </div>
    </React.Fragment>
  );
}

export default App;
