import React, { useEffect, useState } from "react";
import Head from "./components/head/head";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/theme/themes";
import "./App.css";
import HeadNav from "./components/head/headNav";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";
import Sign from "./components/sign/sign";

const StyleApp = styled.div`
  color: ${(props) => props.theme.text};
`;

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  // cart items price
  const[priceSum,setPriceSum] = useState(Number(window.localStorage.getItem("priceSum")) || 0)
  useEffect(() => window.localStorage.setItem("priceSum" , priceSum),[priceSum])

  // add to cart button disable
  const[addCart,setAddCart] = useState(false)


  // choosen items
  const [choosenItems, setChoosenItems] = useState(
    JSON.parse(localStorage.getItem("choosenItems")) || []
  );

  useEffect(() => {
    window.localStorage.setItem(
      "choosenItems",
      JSON.stringify([...new Set(choosenItems)])
    );
  }, [choosenItems]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyleApp>
          <Head />
          <BrowserRouter>
            <HeadNav choosenItems={choosenItems} />
            <Routes>
              <Route
                path="/e-commerce"
                element={
                  <Home
                    choosenItems={choosenItems}
                    setChoosenItems={setChoosenItems}
                    addCart={addCart}
                    setAddCart={setAddCart}
                  />
                }
              />
              <Route path="/sign" element={<Sign />} />
              <Route
                path="/cart"
                element={
                  <Cart
                    choosenItems={choosenItems}
                    setChoosenItems={setChoosenItems}
                    priceSum={priceSum}
                    setPriceSum={setPriceSum}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
          <button onClick={() => themeToggler()} className="themeI"></button>
        </StyleApp>
      </ThemeProvider>
    </>
  );
}

export default App;
