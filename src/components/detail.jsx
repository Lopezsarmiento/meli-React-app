import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Loading from "./loading";
import Thumbnail from "./common/thumbnail";

const Detail = ({ match }) => {
  const [itemInfo, setIteminfo] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const id = match.params.id;

  const url = `http://localhost:4000/api/items/${id}`;

  useEffect(() => {
    if (id === "") {
      return;
    }
    async function fetchData() {
      setIsloading(true);
      try {
        const { data } = await axios.get(url);
        console.log("data item: ", data);
        setIteminfo(data);
        setIsloading(false);
      } catch (err) {
        setIsloading(false);
        console.log(err);
      }
    }

    fetchData();
  }, [url]);

  console.log("iteminfo:", itemInfo);

  return (
    <div className="container-fluid mt-5">
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className="row">
          <div className="col-md-7">
            <div className="card mb-3">
              <Thumbnail thumbnail={itemInfo.thumbnail}></Thumbnail>
              <hr></hr>
              <div className="card-body">
                <h5 className="card-title">{itemInfo.title}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="mb-3">
              <div className="card-body">
                <p className="card-text text-muted">
                  {itemInfo.condition === "new" ? "nuevo" : "usado"}
                  <span> - </span>
                  {itemInfo.sold_quantity} vendidos
                </p>
                <h4 className="card-title">{itemInfo.title}</h4>
                <h1 className="card-text">${itemInfo.price}</h1>
                {itemInfo.available_quantity > 0 && (
                  <p className="card-text">Stock disponible</p>
                )}
                <p className="badge badge-primary">
                  <span className="card-text">Envío con normalidad</span>
                </p>

                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
