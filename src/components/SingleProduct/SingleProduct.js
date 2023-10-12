import React, {useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PRODUCTS from "../Data/data";



import "./SingleProduct.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const SingleProduct = ({ getItems }) => {
  const [click, setClick] = useState(false);


 
 const navigate = useNavigate();
  const { productId } = useParams();
  let singleProduct = PRODUCTS.find(
    (product) => product.id === parseInt(productId)
  );
   

  
  
 
    
    

  
  
 
  const { id, name, image, details, price, } = singleProduct;
  console.log(singleProduct)
  console.log(singleProduct)
  const cartItems = () => {
    getItems(id);
  
    setClick(true);
    
    setTimeout(()=>{
      setClick(false);
    },2000)
  };
  return (
    <>
    <Header />
    <main className="single-product-container">
      <div className="pg-header">
        <div className="container d-flex justify-content-between">
          <h2>{name}</h2>
          <button className="btn btn-dark" onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon />
            Back
          </button>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col d-flex " key={id}>
            <div className="img-card">
              <img src={image} alt={name} className="single-product-image" />
            </div>
            <div className="single-product-body p-5">
              <h2>{name}</h2>
              <p>{details}</p>
             

              <h4 className="pt-2">
                Price:
                <span className="price ">
                  <strong>${price}</strong>
                </span>
              </h4>
              <button className="btn btn-warning" onClick={() => cartItems(id)}>
                Add to cart
              </button>
              
              <p className="message">{click ? "Added Successfully" : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default SingleProduct;
