import { createGlobalStyle } from "styled-components";
import day from "./day2.jpg";
import night from "./night.png";

export const lightTheme = {
  text: "black",
  body: "silver",
  img : day
};

export const darkTheme = {
  text: "silver",
  body: "black",
  img : night
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-image: url(${(props) => props.theme.img});
    }
    .head{
        color : ${(props) => props.theme.text} !important;
    }
    .searchB:hover{
        color : ${(props) => props.theme.text} !important;
        background-color : ${(props) => props.theme.body} !important;
    }
    .navI {
      color : ${(props) => props.theme.text} !important;
    }
`;
