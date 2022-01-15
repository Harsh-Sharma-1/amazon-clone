import React, { useState } from "react";
import "./style.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import {collection,addDoc} from "firebase/firestore";
import { db,auth } from "../../firebase.js";

const Subtotal = () => {
  const [payment,setPayment] = useState(false);
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();
  const [{ basket,user }, dispatch] = useStateValue();
  let price = 0;
  let quantity = basket.length;
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [Address, setAddress] = useState("");

  const ordercollection = collection(db,"orders");

  const removeFromBasket = (id) =>{
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    })
}

  // basket.map((val)=>(
  //     price = price + val.price
  // )) total price calculator

  const method = (val)=>{
      console.log(val);
   if(val == 2){
        setPayment(true);
   }else{
       setPayment(false);
   }
  }

  const saveorders = () =>{
      basket.map((val)=>{
          addDoc(ordercollection,{
              "Name":Name,
              "Address":Address,
              "Number":Number,
              "UserId":user?.email,
              "Product":val
          });
          removeFromBasket(val.id);


      });
      alert("Your order got placed");
      navigate('/');
  }

  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({quantity} items):
                <strong>{value}</strong>
              </p>
              <small className="subtotal-gift">
                <input type="checkbox" />
                This order Contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandsSeparator={true}
          prefix={"Rs."}
        />

        <button
          onClick={() => {
            setPopup(true);
          }}
        >
          Proceed to Checkout
        </button>
      </div>

      {popup ? (
        <div className="payment">
          <div className="payment__container">
            <ImCross className="payment__cancelicon" onClick={() => setPopup(false)}/>
            <h2>Checkout</h2>
            <div className="payment__form">
            <input type="text" placeholder="Enter Your Name" onInput={(event) => setName(event.target.value)}/>
            <input type="text" placeholder="Enter Your Number" onInput={(event) => setNumber(event.target.value)}/>
            <input type="text" placeholder="Enter Your Address" onInput={(event) => setAddress(event.target.value)}/>
            <label htmlFor="method">Payment Method</label>
            <select name="" id="method" onChange ={(event)=>{method(event.target.value)}}>
                <option value="1">Cash on delivery</option>
                <option value="2">Online Payment</option>
            </select>

            {
                payment?<>
                <input type="text" placeholder="enter your card number" />
                <input type="date" placeholder="Expiry date"/>
                <input type="text" placeholder="CVV" />
                </>:
                <></>
            }

            <button onClick={saveorders}>
                Checkout
            </button>

            </div>
           
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Subtotal;
