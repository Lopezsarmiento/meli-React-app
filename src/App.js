import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
// components
import ItemsList from "./components/itemsList";
import SearchBar from "./components/searchBar";
import Detail from "./components/detail";

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
      <div className="">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <ItemsList items={items}></ItemsList>}
          ></Route>
          <Route path="/item/:id" component={Detail}></Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
