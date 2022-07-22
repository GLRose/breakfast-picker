import React from 'react'
import { Course } from "../styles/Styles.js";

const Title = ({name}) => {
  console.log(name);
  return (
    <div>
        <Course>Breakfast Picker {name}</Course>
    </div>
  )
}

export default Title