import { useState } from "react";
import Products from "./products";
import "./_home.css";

const Home = ({ choosenItems, setChoosenItems ,addCart, setAddCart}) => {
  const [pros, setPros] = useState(Products);
  const filterPros = (c) => {
    const newItems = Products.filter((targetC) => {
      return targetC.cate === c;
    });
    setPros(newItems);
  };

  const addDisabled = () => {
    setAddCart(!addCart)
  };

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle filterB"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter
        </button>
        <ul
          className="dropdown-menu filterItem"
          aria-labelledby="dropdownMenu2"
        >
          <li className="d-flex justify-content-between align-item-center p-2">
            <label className="fw-bold">MEN</label>
            <input
              type="radio"
              name="filter"
              onClick={() => {
                filterPros("men");
              }}
              className="dropdown-item filterIn p-2"
            />
          </li>
          <li className="d-flex justify-content-between align-item-center p-2">
            <label className="fw-bold">WOMEN</label>
            <input
              type="radio"
              name="filter"
              onClick={() => {
                filterPros("women");
              }}
              className="dropdown-item filterIn p-2"
            />
          </li>
          <li className="d-flex justify-content-between align-item-center p-2">
            <label className="fw-bold">CHILDREN</label>
            <input
              type="radio"
              name="filter"
              onClick={() => {
                filterPros("child");
              }}
              className="dropdown-item filterIn p-2"
            />
          </li>
          <li className="d-flex justify-content-between align-item-center p-2">
            <label className="fw-bold">ALL</label>
            <input
              type="radio"
              name="filter"
              onClick={() => {
                setPros(Products);
              }}
              className="dropdown-item filterIn p-2"
            />
          </li>
        </ul>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {pros.map((item) => {
          return (
            <div key={Math.random()}>
              <div className="card m-2 cardItem" style={{ width: "18rem" }}>
                <div className="img-box">
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="card-body text-dark">
                  <h5 className="card-title lead fw-bold fs-2">{item.name}</h5>
                  <p className="card-text cardprice fw-bold fs-4">
                    Price : {item.price}
                  </p>
                  <button
                    id={item.name}
                    onClick={(e) => {
                      setChoosenItems([...choosenItems, item]);
                      addDisabled();
                    }}
                    className="btn btn-dark fs-5 addbtn"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
