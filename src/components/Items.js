import React, { useEffect, useState } from "react";
import { Box, Form, Small, Select } from "../styles/Styles.js";
import Pancakes from "../images/Pancakes.svg";
import Waffles from "../images/Waffles.png";
import Burger from "../images/Burger.png";
import Salad from "../images/Salad.png";
import HashBrown from "../images/HashBrown.png";
import Egg from "../images/Egg.png";
import Cookies from "../images/Cookies.png";
import Orange from "../images/Orange.png";
import Toast from "../images/Toast.png";
import Fries from "../images/Fries.png";
import Crossaint from "../images/Crossaint.png";
import Donut from "../images/Donut.png";
import Tea from "../images/Tea.png";
import Milk from "../images/Milk.png";
import Coffee from "../images/Coffee.png";
import Coke from "../images/Coke.png";
import OrangeJuice from "../images/OrangeJuice.png";
import Milkshake from "../images/Milkshake.png";

const MainItem = () => {
  const mainOptions = [
    { 
      value: "",
      text: "Choose Something"
    },
    { 
      value: "Nothing",
      text: "Nothing",
      price: 0.0 },
    {
      value: "Pancakes",
      text: "Pancakes",
      image: Pancakes,
      price: 2.0,
    },
    {
      value: "Waffles",
      text: "Waffles",
      image: Waffles,
      price: 2.0,
    },
    {
      value: "Burger",
      text: "Burger",
      image: Burger,
      price: 3.5,
    },
    {
      value: "Salad",
      text: "Salad",
      image: Salad,
      price: 2.5,
    },
  ];

  const sideOptions = [
    { 
      value: "",
      text: "Choose Something" 
    },
    { 
      value: "Nothing",
      text: "Nothing",
      price: 0.0 },
    { 
      value: "Eggs",
      text: "Eggs",
      image: Egg,
      price: 1.0 },
    {
      value: "Hashbrowns",
      text: "Hashbrowns",
      image: HashBrown,
      price: 1.25,
    },
    {
      value: "Cookies",
      text: "Cookies",
      image: Cookies,
      price: 1.5,
    },
    {
      value: "Orange",
      text: "Orange",
      image: Orange,
      price: 0.3,
    },
    {
      value: "Toast",
      text: "Toast",
      image: Toast,
      price: 0.5,
    },
    {
      value: "Fries",
      text: "Fries",
      image: Fries,
      price: 3.0,
    },
    {
      value: "Crossaint",
      text: "Crossaint",
      image: Crossaint,
      price: 4.0,
    },
    {
      value: "Donut",
      text: "Donut",
      image: Donut,
      price: 1.0,
    },
  ];

  const drinkOptions = [
    { 
      value: "",
      text: "Choose Something"
    },
    { 
      value: "Nothing",
      text: "Nothing",
      price: 0.0 },
    { 
      value: "Tea",
      text: "Tea",
      image: Tea,
      price: 1.9 ,
    },
    { 
      value: "Milk",
      text: "Milk",
      image: Milk,
      price: 1.0 },
    {
      value: "Coffee",
      text: "Coffee",
      image: Coffee,
      price: 1.25,
    },
    {
      value: "Coke",
      text: "Coke",
      image: Coke,
      price: 1.25,
    },
    {
      value: "OrangeJuice",
      text: "OrangeJuice",
      image: OrangeJuice,
      price: 0.3,
    },
    {
      value: "Milkshake",
      text: "Milkshake",
      image: Milkshake,
      price: 4.0,
    },
  ];


  const [mainSelected, setMainSelected] = useState(0);
  const [sideSelected, setSideSelected] = useState(0);
  const [drinkSelected, setDrinkSelected] = useState(0);
  let total = mainOptions[mainSelected].price + sideOptions[sideSelected].price + drinkOptions[drinkSelected].price;
  const [cart, setCart] = useState(0);

  const mainHandleChange = (event) => {
    setMainSelected(event.target.value);
  };
  const sideHandleChange = (event) => {
    setSideSelected(event.target.value);
  };
  const drinkHandleChange = (event) => {
    setDrinkSelected(event.target.value);
  };

  const sumCart = () => {  
      setCart(total.toFixed(2));
      console.log(total.toFixed(2))
  };

  // calls our function any time one of these variables is messed with
  useEffect(() => {
    if(mainSelected && sideSelected && drinkSelected){
      sumCart();
    }
  }, [mainSelected,sideSelected,drinkSelected])

  return (
    <div>
      <Form>
        <Box>
          {/* Main Course */}
          <h1
            style={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Edu TAS Beginner",
            }}
          >
            Main Item
          </h1>
          <Select onChange={mainHandleChange}>
            {mainOptions.map((option, index) => (
              // this takes the index  of the option and displays that option[index.text] so if that index is equal to 0 which is nothing then "nothing is selected"
              <option key={option.value} value={index}>
                {option.text}
              </option>
            ))}
          </Select>
          <Small>
            <img
              alt=""
              style={{ width: 50 }}
              src={mainOptions[mainSelected].image}
            />
          </Small>
          <p style={{ width: 50 }}>{`$`}{mainOptions[mainSelected].price}</p>

          {/* Side Course */}
          <h1
            style={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Edu TAS Beginner",
            }}
          >
            Side Item
          </h1>
          <Select onChange={sideHandleChange}>
            {sideOptions.map((option, index) => (
              <option key={option.value} value={index}>
                {option.text}
              </option>
            ))}
          </Select>
          <Small>
            <img
              alt=""
              style={{ width: 50 }}
              src={sideOptions[sideSelected].image}
            />
          </Small>
          <p style={{ width: 50 }}>{`$`}{sideOptions[sideSelected].price}</p>

          {/* Drink Course */}
          <h1
            style={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Edu TAS Beginner",
            }}
          >
            Drink Item
          </h1>
          <Select onChange={drinkHandleChange}>
            {drinkOptions.map((option, index) => (
              <option key={option.value} value={index}>
                {option.text}
              </option>
            ))}
          </Select>
          <Small>
            <img
              alt=""
              style={{ width: 50 }}
              src={drinkOptions[drinkSelected].image}
            />
          </Small>
          <p style={{ width: 50 }}>{`$`}{drinkOptions[drinkSelected].price}</p>
        </Box>
      </Form>
      {`Total: $${cart}`}
    </div>   
  );
};

export default MainItem;
