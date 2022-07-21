import React, { useState } from "react";
import { Box, Form, Small, Button, Select, Course } from "../styles/Styles.js";
import Pancakes from "../images/Pancakes.svg";
import Waffles from "../images/Waffles.svg";

const MainForm = (props) => {
  const options = [
    { value: "", text: "Choose Something" },
    { value: "Pancakes", text: "Pancakes" },
    { value: "Waffles", text: "Waffles" },
  ];

  const [selected, setSelected] = useState(options[0].value);
  const [pancakeTruth, setPancakeTruth] = useState(false);
  const [waffleTruth, setWaffleTruth] = useState(false);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const imageShow = (event) => {
    if (selected === "Pancakes") {
      setWaffleTruth(false);
      setPancakeTruth(true);
    } else if (selected === "Waffles") {
      setPancakeTruth(false);
      setWaffleTruth(true);
    }
  };

  return (
    <div>
      <Form>
        <Box>
       <h1 style={{display:'flex', justifyContent:'left'}}>Main Item</h1>
      <Select value={selected} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
      <Button onClick={imageShow}>Select Item</Button>
      {pancakeTruth && (
        <Small>
          <img
            src={Pancakes}
            alt="myPancakes"
            style={{ width: 100, height: 50 }}
          />
        </Small>
      )}
      {waffleTruth && (
        <Small>
          <img
            src={Waffles}
            alt="myWaffles"
            style={{ width: 100, height: 50 }}
          />
        </Small>
      )}
      </Box>
      </Form>
    </div>
  );
};

export default MainForm;
