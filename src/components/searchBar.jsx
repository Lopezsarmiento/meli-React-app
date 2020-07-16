import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const logo =
    "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.7.0/mercadolibre/logo__large_plus.png";
  const [query, setQuery] = useState("");

  const handleClick = (e) => {
    handleSubmit(e, query);
    window.location = `/items?q=${query}`;
  };
  return (
    <nav className="navbar navbar-light bg-meli">
      <div className="input-group input-group-lg mt-3 mb-3">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo"></img>
        </a>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar productos, marcas y más..."
          aria-label="Search"
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary bg-light"
            type="button"
            id="button-addon2"
            onClick={(e) => handleClick(e)}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
