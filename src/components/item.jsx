import React from "react";

const Item = ({ items }) => {
  return (
    <React.Fragment>
      {items.map((item) => (
        <div key={item.id} className="card rounded shadow">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={item.thumbnail} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="badge badge-primary">
                  <span className="card-text">Envío con normalidad</span>
                </p>
                <h4 className="card-title">
                  <a
                    className="text-reset text-decoration-none"
                    href={item.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="card-text font-weight-light">
                      {item.title}
                    </span>
                  </a>
                </h4>
                <h6>
                  <a
                    className="text-reset text-decoration-none"
                    href={item.seller.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-weight-lighter">
                      Por {item.seller.id}
                    </span>
                  </a>
                </h6>
                {item.original_price && (
                  <small className="text-muted line-thru">
                    $ {item.original_price}
                  </small>
                )}
                <p className="card-text">
                  <span>$ {item.price}</span>
                </p>
                {item.shipping.free_shipping && (
                  <p className="text-success card-text">
                    <span>Envío gratis</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Item;
