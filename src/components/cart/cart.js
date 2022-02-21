import React, { useEffect, useState ,useRef} from "react";
import "./_cart.css";

const Cart = ({ choosenItems, setChoosenItems}) => {
  const removeItem = (e) => {
    let newI = choosenItems.filter((item) => {
      return item.id != e;
    });
    setChoosenItems(newI);
  };
  let sum = 0;

  const increaseCounter = (e) => {
    if (e.target.nextElementSibling.innerHTML == 100) {
      return;
    }
    e.target.nextElementSibling.innerHTML++;
    window.localStorage.setItem(
      e.target.nextElementSibling.id,
      e.target.nextElementSibling.innerHTML
    );
  };
  const dicreaseCounter = (e) => {
    if (e.target.previousElementSibling.innerHTML == 1) {
      return;
    }
    e.target.previousElementSibling.innerHTML--;
    window.localStorage.setItem(
      e.target.previousElementSibling.id,
      e.target.previousElementSibling.innerHTML
    );
  };

  return (
    <>
      <div className="container cartBox">
        <div className="h3 cartTitle">CART</div>
        {[...new Set(choosenItems)].map((i) => {
          return (
            <div
              className="d-flex justify-content-between m-2 p-2 cartItem"
              key={Math.random()}
            >
              <div className="lead fw-bold">
                {i.name} <span className="p-1">{i.price}</span>
              </div>
              <div className="itemCounter d-flex justify-content-center align-items-center">
                <button
                  className="mx-2"
                  onClick={(e) => {
                    increaseCounter(e);
                  }}
                >
                  +
                </button>
                <p className="m-2" id={i.name}>
                  {window.localStorage.getItem(i.name) || "1"}
                </p>
                <button className="mx-2" onClick={(e) => dicreaseCounter(e)}>
                  -
                </button>
                <button
                  className="fw-bold removeBtn"
                  onClick={() => {
                    removeItem(i.id);
                    window.localStorage.removeItem(i.name);
                  }}
                >
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container cartBox">
        <div className="h3 cartTitle">BILL</div>
        <div className="d-flex justify-content-around">
          <div className="cost">
            Total cost :{" "}
            {
              (sum =
                [
                  ...new Set(choosenItems.map((ele) => parseInt(ele.price))),
                ].reduce((acc, curr) => acc + curr, 0) || 0)
            }            
            $
          </div>
          <div className="buyBtns">
            <button className="mx-1 px-2 fw-bold">Buy now</button>
            <button
              className="mx-1 px-2 fw-bold"
              onClick={() => setChoosenItems([])}
            >
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
