import React from "react";
// components
import Aside from "./aside";
import Item from "./item";

const ItemsList = ({ items }) => {
  return (
    <div className="container-fluid bg-light rounded-lg shadow-lg">
      <div className="row">
        <div className="col">
          <h3 className="text-center mt-2">search results</h3>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-md-4">
          <Aside></Aside>
        </div>
        <div className="col-md-8 mb-2">
          <Item items={items}></Item>
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
