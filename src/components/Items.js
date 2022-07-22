import React, { useState } from "react";
import { Box, Form, Small, Select } from "../styles/Styles.js";
import Pancakes from "../images/Pancakes.svg";
import Waffles from "../images/Waffles.png";
import Egg from "../images/Egg.png";
import HashBrown from "../images/HashBrown.png";
import Tea from "../images/Tea.png";
import Milk from "../images/Milk.png";
import Coffee from "../images/Coffee.png";
import Coke from "../images/Coke.png";
import OrangeJuice from "../images/OrangeJuice.png";
import Milkshake from "../images/Milkshake.png";
import Burger from "../images/Burger.png";
import Cookies from "../images/Cookies.png";
import Orange from "../images/Orange.png";
import Salad from "../images/Salad.png";
import Toast from "../images/Toast.png";
import Fries from "../images/Fries.png";
import Crossaint from "../images/Crossaint.png";
import Donut from "../images/Donut.png";

const MainForm = (props) => {
  const mainOptions = [
    { value: "", text: "Choose Something" },
    { value: "Nothing", text: "Nothing" },
    { value: "Pancakes", text: "Pancakes", image: Pancakes },
    { value: "Waffles", text: "Waffles", image: Waffles },
    { value: "Burger", text: "Burger", image: Burger },
    { value: "Salad", text: "Salad", image: Salad },
  ];

  const sideOptions = [
    { value: "", text: "Choose Something" },
    { value: "Nothing", text: "Nothing" },
    { value: "Eggs", text: "Eggs", image: Egg },
    { value: "Hashbrowns", text: "Hashbrowns", image: HashBrown },
    { value: "Cookies", text: "Cookies", image: Cookies },
    { value: "Orange", text: "Orange", image: Orange },
    { value: "Toast", text: "Toast", image: Toast },
    { value: "Fries", text: "Fries", image: Fries },
    { value: "Crossaint", text: "Crossaint", image: Crossaint },
    { value: "Donut", text: "Donut", image: Donut },
  ];

  const drinkOptions = [
    { value: "", text: "Choose Something" },
    { value: "Nothing", text: "Nothing" },
    { value: "Tea", text: "Tea", image: Tea },
    { value: "Milk", text: "Milk", image: Milk },
    { value: "Coffee", text: "Coffee", image: Coffee },
    { value: "Coke", text: "Coke", image: Coke },
    { value: "OrangeJuice", text: "OrangeJuice", image: OrangeJuice },
    { value: "Milkshake", text: "Milkshake", image: Milkshake },
  ];

  const [mainSelected, setMainSelected] = useState(0);
  const [sideSelected, setSideSelected] = useState(0);
  const [drinkSelected, setDrinkSelected] = useState(0);

  const mainHandleChange = (event) => {
    setMainSelected(event.target.value);
  };

  const sideHandleChange = (event) => {
    setSideSelected(event.target.value);
  };

  const drinkHandleChange = (event) => {
    setDrinkSelected(event.target.value);
  };

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
              <option key={option.value} value={index}>
                {option.text}
              </option>
            ))}
          </Select>
          <Small>
            <img style={{ width: 50 }} src={mainOptions[mainSelected].image} />
          </Small>
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
            <img style={{ width: 50 }} src={sideOptions[sideSelected].image} />
          </Small>
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
              style={{ width: 50 }}
              src={drinkOptions[drinkSelected].image}
            />
          </Small>
        </Box>
      </Form>
    </div>
  );
};

export default MainForm;