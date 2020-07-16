import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// components
import ItemsList from "./components/itemsList";
import SearchBar from "./components/searchBar";
import Detail from "./components/detail";
import Home from "./components/home";

function App() {
  const [search, setSearch] = useState("");

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
            path="/items"
            render={(props) => <ItemsList {...props}></ItemsList>}
          ></Route>
          <Route path="/item/:id" component={Detail}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
