import React, { useState, useEffect } from "react";
import "./style.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Product from "../product/Product";
import { Link } from 'react-router-dom';

function Home() {
  const products = collection(db, "products_list");
  const [data, setData] = useState([]);

  useEffect(() => {
    getDocs(products).then((res) => {
      setData(res.docs.map((doc) => doc.data()));
    });
  }, []);

  console.log(data);
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://i.ibb.co/ZWkZRMN/amazonbanner.jpg"
          alt="banner"
        />

        <div className="home__main">
          <div className="home-row">
            <div className="home__catagories">
              <h2>Electronics</h2>
              <img
                src="https://cdn.vox-cdn.com/thumbor/lRwetR_dg8WBLFIUPzY7l0QYCaI=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22411713/cfaulkner_20210326_4491_0006.jpg"
                alt=""
              />
              <p >See all</p>
              <Link to={{pathname:"/products",search:"electronics"}}>See all</Link>
            </div>

            <div className="home__catagories">
              <h2>Books</h2>
              <img
                src="https://i.ibb.co/55rCL1G/Flying-color-books-on-pastel-yellow-background-Levitation-Education-concept-3d-rendering-illustratio.jpg"
                alt=""
              />
              <Link to={{pathname:"/products",search:"book"}}>See all</Link>
            </div>
            <div className="home__catagories">
              <h2>Men Fashion</h2>
              <img
                src="https://i.pinimg.com/originals/b4/fa/f8/b4faf8fde0f23473518844c19b80f01e.jpg"
                alt=""
              />
              <Link to={{pathname:"/products",search:"men"}}>See all</Link>
            </div>
            <div className="home__catagories">
              <h2>Women Fashion</h2>
              <img
                src="https://centralandme.com/wp-content/uploads/2018/08/class-apart-1.jpg"
                alt=""
              />
              <Link to={{pathname:"/products",search:"women"}}>See all</Link>
            </div>
          </div>

          <div className="home__grid">
            {data.slice(0,6).map((item) => (
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
      </div>
    </div>
  );
}

export default Home;
