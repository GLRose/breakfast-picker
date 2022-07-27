import React, {useState} from 'react'
import { Box, Form, Small, Select } from "../styles/Styles.js";
import Tea from "../images/Tea.png";
import Milk from "../images/Milk.png";
import Coffee from "../images/Coffee.png";
import Coke from "../images/Coke.png";
import OrangeJuice from "../images/OrangeJuice.png";
import Milkshake from "../images/Milkshake.png";

const DrinkItem = () => {
const drinkOptions = [
  { value: "", text: "Choose Something" },
  { value: "Nothing", text: "Nothing", price: 0 },
  { value: "Tea", text: "Tea", image: Tea, price: 1.9 },
  { value: "Milk", text: "Milk", image: Milk, price: 1.0 },
  { value: "Coffee", text: "Coffee", image: Coffee, price: 1.25 },
  { value: "Coke", text: "Coke", image: Coke, price: 1.25 },
  { value: "OrangeJuice", text: "OrangeJuice", image: OrangeJuice, price: 1.5,},
  { value: "Milkshake", text: "Milkshake", image: Milkshake, price: 4.0 },
];

const [drinkSelected, setDrinkSelected] = useState(0);

const drinkHandleChange = (event) => {
    setDrinkSelected(event.target.value);
  };
  return (
    <div>
       <Form>
        <Box>
          {/* Drink Course */}
          <h1 style={{display: "flex",justifyContent: "left", fontFamily: "Edu TAS Beginner",}}>
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
            <img alt="" style={{ width: 50 }} src={drinkOptions[drinkSelected].image}/>
          </Small>
          <p style={{ width: 50 }}>{drinkOptions[drinkSelected].price}</p>
        </Box>
      </Form>
    </div>
  )
}

export default DrinkItem