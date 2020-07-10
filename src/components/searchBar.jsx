import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
  const [query, setQuery] = useState("");
  return (
    <nav className="navbar navbar-light bg-meli">
      <div className="input-group input-group-lg mt-3 mb-3">
        <a className="navbar-brand" href="/">
          <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.7.0/mercadolibre/logo__large_plus.png"></img>
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
            onClick={(e) => handleSubmit(e, query)}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
