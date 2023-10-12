import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalInfo } from "../../App";
import "./Cart.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Cart = () => {
  const {cartList,setCartList} = useContext(GlobalInfo);
  let [updatedCartList, setUpdatedCartList] = useState(cartList);

  const navigate = useNavigate();
  let total = 0;
  cartList.map((i) => (total = total + i.price));

  const updateQuantity = (item, quant) => {
    let ind=-1 
    cartList.forEach((data,index)=>{
      if(data.id===item.id){
          ind=index
      }

    })
    const tempArr=cartList 
   tempArr[ind].quantity+=quant 
   if(tempArr[ind].quantity===0){
      tempArr[ind].quantity=1 
   }
   
   setUpdatedCartList([...tempArr])


  
  };
  const caluculateTotalPrice = () => {
    return updatedCartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const removeItem=(item)=>{
   const newArr=cartList.filter(x=>x.id!==item.id)
 
   setUpdatedCartList(newArr)
   setCartList(newArr)
   
  }

// const removeItem=(item)=>{
//   removeCartLength(item)
// }
  
  return (
    <>
    <Header />
    <main className="cart-container">
      <div className="pg-header">
        <div className="container">
          <h1>CART</h1>
        </div>
      </div>
      <div className="container p-5 ">
        {updatedCartList.length !== 0 ? (
          <div>
            {updatedCartList.map((item) => 
               (
                <div key={item.id} className="row cart-body">
                  <div className="col d-flex">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-image"
                      />
                    </div>
                    <div className="p-3">
                      <h3>{item.name}</h3>
                      <p>{item.details}</p>

                      <button
                        className="btn btn-dark"
                        onClick={() =>
                          updateQuantity(item,+1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn"
                        disabled
                        style={{
                          border: "0",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {item.quantity}
                      </button>
                      <button
                        className="btn btn-dark"
                        onClick={() =>
                          updateQuantity(item,-1)
                        }
                      >
                        -
                      </button>
                      <h4 className="pt-2">
                        Price:
                        <span className="price ">
                          <strong>${item.price}</strong>
                        </span>
                      </h4>
                      <button className="btn btn-danger" onClick={()=>removeItem(item)}>Remove</button>
                    </div>
                  </div>
                </div>
              ) 
            )}
            <h2>Total:${caluculateTotalPrice()}</h2>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center p-5 ">
            <h3>"Cart Is Empty"</h3>
            <button
              className="btn btn-warning"
              onClick={() => navigate("/products")}
            >
              Add it now
            </button>
          </div>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
};

export default Cart;
