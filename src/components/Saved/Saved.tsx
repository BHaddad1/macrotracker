import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Saved.css"

interface El {
  name: string,
  calories: number,
  fat_total_g: number,
  carbohydrates_total_g: number,
  protein_g: number
}

const Saved = () => {

  const location = useLocation();
  const [foodToSave, setFoodToSave] = useState(location.state.foodInfo);
  const [name, setName] = useState(() => {
    const saved: string | null= localStorage.getItem(`${foodToSave.name}`);
    const initialValue: string = JSON.parse(saved!);
    return initialValue || "";
  });
  
  let keys = Object.keys(localStorage)
  console.log(keys)
  const mappedKeys = keys.map((el: string, i: number) => {
    if (el !== "loglevel") {
      let item: El = JSON.parse(localStorage[el])
      return <li className="li-item" key={i}>{item.name.toUpperCase()}:<br></br>CALS: {item.calories}; <br></br>FAT: {item.fat_total_g}; <br></br>CARBS: {item.carbohydrates_total_g}; <br></br>PROTEIN: {item.protein_g}</li>
    }
  })

  console.log(localStorage)


  return (
    <>
    <h2 className="saved-title">Saved Foods</h2>
      <ul className="list">
        {mappedKeys}
      </ul>
    </>
  )
}

export default Saved; 