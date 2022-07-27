import React, { useState } from "react";
import { Box, Form, Small, Select } from "../styles/Styles.js";
import Pancakes from "../images/Pancakes.svg";
import Waffles from "../images/Waffles.png";
import Burger from "../images/Burger.png";
import Salad from "../images/Salad.png";

const MainItem = ({mainSelected, setMainSelected}) => {
  const mainOptions = [
    { value: "", text: "Choose Something" },
    { value: "Nothing", text: "Nothing", price: 0 },
    { value: "Pancakes", text: "Pancakes", image: Pancakes, price: 2.00 },
    { value: "Waffles", text: "Waffles", image: Waffles, price: 2.0 },
    { value: "Burger", text: "Burger", image: Burger, price: 3.5 },
    { value: "Salad", text: "Salad", image: Salad, price: 2.5 },
  ];

  // const [mainSelected, setMainSelected] = useState(0);
  const [price, setPrice] = useState(0);

const handleTotal = () =>{
  setPrice(mainOptions[mainSelected].price);
}
  const mainHandleChange = (event) => {
    setMainSelected(event.target.value);
    handleTotal();
    return price;
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
            <img
              alt=""
              style={{ width: 50 }}
              src={mainOptions[mainSelected].image}
            />
          </Small>
          <p style={{ width: 50 }}>{mainOptions[mainSelected].price}</p>
        </Box>
      </Form>
    </div>
  );
};

export default MainItem;
