import React, {useState} from 'react'
import MainItem from '../components/MainItem.js';
import SideItem from '../components/SideItem.js';
import DrinkItem from '../components/DrinkItem.js';
import { Button } from '../styles/Styles.js';

const SubTotal = () => {
  //Handle state in the highest order
  const [mainSelected, setMainSelected] = useState(0);

  return (
    <div>
      <MainItem mainSelected={mainSelected} setMainSelected={setMainSelected}/>
      <SideItem/>
      <DrinkItem/>
    </div>
  )
}

export default SubTotal