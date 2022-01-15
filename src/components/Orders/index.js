import React, { useState, useEffect } from "react";
import "./style.css";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useStateValue } from "../../StateProvider";

export const Orders = () => {
  const [orderlist, setOrderlist] = useState([]);
  const [{ user }] = useStateValue();
  const ordercollection = collection(db, "orders");
  useEffect(() => {
    getDocs(ordercollection).then((res) => {
      setOrderlist(res.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log(orderlist);

  return (
    <div className="orders">
      <h2>Your Orders</h2>

      {orderlist
        .filter((val) => val.UserId === user?.email )
        .map((val, key) => {
            const value = val.Product;
          return (
            <div className='checkout-product' style={{backgroundColor:"white", padding:"20px"}}>
            <img src={value.image} alt="" className="checkout-product-image"/>
            <div className="checkout-product-info">
                <p className="checkout-product-title">
                    {value.title}
                </p>
                <p className="checkout-product-price">
                    <small>Rs. </small>
                    <strong>{value.price}</strong>
                </p>
                <div className="checkout-product-rating">
                    {
                        Array(value.rating)
                        .fill()
                        .map((_,i)=>(
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
        </div>
          )
        })}
    </div>
  );
};
