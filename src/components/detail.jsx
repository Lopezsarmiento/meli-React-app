import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Loading from "./loading";

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
    <div className="container-fluid mt-2">
      <div className="row">
        {isLoading && <Loading></Loading>}
        {!isLoading && (
          <div className="col">
            <div className="card mb-3">
              <img
                src={itemInfo.thumbnail}
                className="card-img-top"
                alt="..."
              />
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
        )}
      </div>
    </div>
  );
};

export default Detail;
