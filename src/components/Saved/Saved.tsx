import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Saved = () => {

  const location = useLocation();
  const [foodToSave, setFoodToSave] = useState(location.state.foodInfo);
  const [name, setName] = useState(() => {
    const saved = localStorage.getItem(`${foodToSave.name}`);
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    let foodArr = JSON.stringify(location.state.foodInfo);
    localStorage.setItem(`${foodToSave.name}`, foodArr)
  }, [foodToSave])
  console.log(localStorage)
  
  let keys = Object.keys(localStorage)
  console.log(keys)
  const mappedKeys = keys.map((el, i) => {
    if (el !== "loglevel") {
      el = JSON.parse(localStorage[el])
      console.log(el)
      return <li className="li-item" key={i}>{el.name}: CALS: {el.calories}; FAT: {el.fat_total_g}; CARBS: {el.carbohydrates_total_g}; PROTEIN: {el.protein_g}</li>
    }
  })

  return (
    <>
      <ul className="list">
        {mappedKeys}
      </ul>
    </>
  )
}

export default Saved; 