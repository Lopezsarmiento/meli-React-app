import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Aside from "./aside";
import Item from "./item";
import Loading from "./loading";

const ItemsList = ({ location }) => {
  const search = location.search.substring(3);
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const url = `http://localhost:4000/api/search/${search}`;

  useEffect(() => {
    async function fetchData() {
      // activate loader
      setIsloading(true);
      try {
        const { data } = await axios.get(url);
        console.log("data: ", data);
        setItems(data);
        setIsloading(false);
      } catch (err) {
        setIsloading(false);
        console.log(err);
      }
    }

    fetchData();
  }, [url]);

  return (
    <div className="container-fluid bg-light rounded-lg shadow-lg">
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className="row">
          <div className="col-md-4">
            <Aside></Aside>
          </div>
          <div className="col-md-8 mb-2 mt-2">
            <Item items={items}></Item>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsList;
