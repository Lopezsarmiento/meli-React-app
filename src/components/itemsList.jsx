import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Aside from "./aside";
import Item from "./item";

const ItemsList = ({ location }) => {
  const search = location.search;
  const [items, setItems] = useState([]);
  const url = `https://api.mercadolibre.com/sites/MLA/search${search}&&limit=10`;
  console.log("url: ", url);

  useEffect(() => {
    // if (search === "") {
    //   return;
    // }
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

  return (
    <div className="container-fluid bg-light rounded-lg shadow-lg">
      <div className="row">
        <div className="col-md-4">
          <Aside></Aside>
        </div>
        <div className="col-md-8 mb-2 mt-2">
          <Item items={items}></Item>
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
