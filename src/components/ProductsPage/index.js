import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Product from "../product/Product";
import { Link } from 'react-router-dom';

import './style.css';

export const ProductsPage = () => {
    let location = useLocation();
    location = location.search.slice(1,location.search.length);
    const [data, setData] = useState([]);
    const products = collection(db, "products_list");

    useEffect(() => {
      getDocs(products).then((res) => {
        setData(res.docs.map((doc) => doc.data()));
      });
    }, []);

    console.log(data);

    return (
        <div className="products__container">
            <h1>{location}</h1>
        <div className="home__grid">
            {data.filter(item => item.type == location).map((item) => (
              <Product
                id={item.id}
                title={item.name}
                image={item.image}
                price={parseInt(item.price)}
                rating={parseInt(item.rating)}
              />
            ))}
          </div>
            
        </div>
    )
}
