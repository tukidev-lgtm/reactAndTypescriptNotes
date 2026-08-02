import { useState } from "react";

import styles from './ItemCounter.module.css'

interface itemCounterProps {
  itemName: string;
  quantity?: number;
}

export const ItemCounter = ({itemName, quantity = 1}: itemCounterProps) => {

  const [count, setCount] = useState(quantity)

  const handleAdd = () => {
    setCount(count +1)
  }
  const HandleSubstract = () =>{
    setCount(count - 1);
  }


  //const handleClick = () =>{
    //console.log(`click en ${itemName}`);
  //}

  return (
  <section className = {styles['item-Row']}>   
    <span className = {styles ['item-text']}
    style ={{
      color: count === 1 ? 'red' : 'black',
    }}>
      {itemName}
    </span>
        <button
        onClick={handleAdd}
        >+1</button>
        <span>{count}</span>
        <button
        onClick={HandleSubstract}
        >-1</button>
    </section>
  );
};

