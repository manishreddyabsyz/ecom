import React from "react";
import PRODUCTS from "../Data/data";
import "./Product.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Products = () => {
  return (
    <>
    <Header />
    <main className="products-container">
      <div className="pg-header">
        <div className="container">
          <h1>PRODUCTS</h1>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          {PRODUCTS.map((item) => {
            return (
              <div className="col-lg-4" key={item.id}>
                <div className="card">
                  <div className="img-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image"
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="pt-2">{item.name}</h4>
                    <p>{item.details}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6>
                        Price:<span className="price">{item.price}</span>
                      </h6>
                      <Link  className="details btn btn-primary" to={`/products/${item.id}`}>
                        Details &#8594;
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
              
            );
          })}
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default Products;
