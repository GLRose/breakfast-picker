import React, { useState } from "react";
// import { Form, Select, Direction, Box } from "../styles/Styles";
import Pancakes from "../images/Pancakes.png";

const MainForm = () => {
  const options = [
    {value: '', text: 'Choose Something', image: Pancakes },
    {value: 'Pancakes', text: 'Pancakes'},
    {value: 'Waffles', text: 'Waffles'}
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.image);
  };

  return (
    <div>
      <select value={selected} onChange={handleChange}>
        {options.map(option =>(
          <option key={option.value} value={option.value}>
            {option.text}
          </option> 
        ))}
      </select>
      {selected} {options.image}
    </div>
  );
};

export default MainForm;
