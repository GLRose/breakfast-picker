import React, { useState } from "react";
import { Box, Form, Small, Button, Select, Course } from "../styles/Styles.js";
import Pancakes from "../images/Pancakes.svg";
import Waffles from "../images/Waffles.png";
import Egg from "../images/Egg.png";
import HashBrown from "../images/HashBrown.png";
import Tea from "../images/Tea.png";
import Milk from "../images/Milk.png";

const MainForm = (props) => {
  const options = [
    { value: "", text: "Choose Something" },
    { value: "Nothing", text: "Nothing" },
    { value: "Pancakes", text: "Pancakes" },
    { value: "Waffles", text: "Waffles" },
  ];

  const sideOptions = [
    { value: "", text: "Choose Something" },
    { value: "Nothing", text: "Nothing" },
    { value: "Eggs", text: "Eggs" },
    { value: "Hashbrowns", text: "Hashbrowns" },
  ];

  const drinkOptions = [
    { value: "", text: "Choose Something" },
    { value: "Nothing", text: "Nothing" },
    { value: "Tea", text: "Tea" },
    { value: "Milk", text: "Milk" },
  ];

  const [selected, setSelected] = useState(options[0].value);
  const [sideSelected, setSideSelected] = useState(options[0].value);
  const [drinkSelected, setDrinkSelected] = useState(options[0].value);
  const [pancakeTruth, setPancakeTruth] = useState(false);
  const [waffleTruth, setWaffleTruth] = useState(false);
  const [eggsTruth, setEggsTruth] = useState(false);
  const [hashBrownsTruth, setHashbrownTruth] = useState(false);
  const [teaTruth, setTeaTruth] = useState(false);
  const [milkTruth, setMilkTruth] = useState(false);

  const mainHandleChange = (event) => {
    setSelected(event.target.value);
  };

  const sideHandleChange = (event) => {
    setSideSelected(event.target.value);
  };

  const drinkHandleChange = (event) => {
    setDrinkSelected(event.target.value);
  };

  const mainShow = (event) => {
    if (selected === "Pancakes") {
      setWaffleTruth(false);
      setPancakeTruth(true);
    } else if (selected === "Waffles") {
      setPancakeTruth(false);
      setWaffleTruth(true);
    } else {
      setPancakeTruth(false);
      setWaffleTruth(false);
    }
  };

  const sideShow = (event) => {
    if (sideSelected === "Eggs") {
      setHashbrownTruth(false);
      setEggsTruth(true);
    } else if (sideSelected === "Hashbrowns") {
      setEggsTruth(false);
      setHashbrownTruth(true);
    } else {
      setEggsTruth(false);
      setHashbrownTruth(false);
    }
  };

  const drinkShow = (event) => {
    if (drinkSelected === "Tea") {
      setMilkTruth(false);
      setTeaTruth(true);
    } else if (drinkSelected === "Milk") {
      setTeaTruth(false);
      setMilkTruth(true);
    } else {
      setTeaTruth(false);
      setMilkTruth(false);
    }
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
          <Select value={selected} onChange={mainHandleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Select>
          <Button onClick={mainShow}>Select Item</Button>
          {pancakeTruth && (
            <Small>
              <img
                src={Pancakes}
                alt="myPancakes"
                style={{ width: 50, height: 50 }}
              />
            </Small>
          )}
          {waffleTruth && (
            <Small>
              <img
                src={Waffles}
                alt="myWaffles"
                style={{ width: 50, height: 50 }}
              />
            </Small>
          )}
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
          <Select value={sideSelected} onChange={sideHandleChange}>
            {sideOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Select>
          <Button onClick={sideShow}>Select Item</Button>
          {eggsTruth && (
            <Small>
              <img src={Egg} alt="Egg" style={{ width: 50, height: 50 }} />
            </Small>
          )}
          {hashBrownsTruth && (
            <Small>
              <img
                src={HashBrown}
                alt="Hashbrown"
                style={{ width: 50, height: 50 }}
              />
            </Small>
          )}
          {/* Drinks */}
          <h1
            style={{
              display: "flex",
              justifyContent: "left",
              fontFamily: "Edu TAS Beginner",
            }}
          >
            Drink Item
          </h1>
          <Select value={drinkSelected} onChange={drinkHandleChange}>
            {drinkOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </Select>
          <Button onClick={drinkShow}>Select Item</Button>
          {teaTruth && (
            <Small>
              <img 
                src={Tea} 
                alt="Tea" 
                style={{ width: 50, height: 50 }} 
              />
            </Small>
          )}
          {milkTruth && (
            <Small>
              <img 
                src={Milk} 
                alt="Milk" 
                style={{ width: 50, height: 50 }}
              />
            </Small>
          )}
        </Box>
      </Form>
    </div>
  );
};

export default MainForm;
