import React, { useState } from "react";
import { Box, Form, Small, Select } from "../styles/Styles.js";
import HashBrown from "../images/HashBrown.png";
import Egg from "../images/Egg.png";
import Cookies from "../images/Cookies.png";
import Orange from "../images/Orange.png";
import Toast from "../images/Toast.png";
import Fries from "../images/Fries.png";
import Crossaint from "../images/Crossaint.png";
import Donut from "../images/Donut.png";

const SideItem = () => {
  const sideOptions = [
    { value: "", text: "Choose Something" },
    { value: "Nothing", text: "Nothing", price: 0 },
    { value: "Eggs", text: "Eggs", image: Egg, price: 2.0 },
    { value: "Hashbrowns", text: "Hashbrowns", image: HashBrown, price: 1.25 },
    { value: "Cookies", text: "Cookies", image: Cookies, price: 1.5 },
    { value: "Orange", text: "Orange", image: Orange, price: 0.3 },
    { value: "Toast", text: "Toast", image: Toast, price: 0.5 },
    { value: "Fries", text: "Fries", image: Fries, price: 3.0 },
    { value: "Crossaint", text: "Crossaint", image: Crossaint, price: 4.0 },
    { value: "Donut", text: "Donut", image: Donut, price: 1.0 },
  ];

  const [sideSelected, setSideSelected] = useState(0);
  const sideHandleChange = (event) => {
    setSideSelected(event.target.value);
  };

  return (
    <div>
      <Form>
        <Box>
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
          <p style={{ width: 50 }}>{sideOptions[sideSelected].price}</p>
        </Box>
      </Form>
    </div>
  );
};

export default SideItem;
