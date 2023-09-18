import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Saved.css";

interface El {
  name: string;
  calories: number;
  fat_total_g: number;
  carbohydrates_total_g: number;
  protein_g: number;
}

const Saved = () => {
  const location = useLocation();
  const [foodToSave, setFoodToSave] = useState(location.state.foodInfo);
  const [name, setName] = useState(() => {
    const saved: string | null = localStorage.getItem(`${foodToSave.name}`);
    const initialValue: string = JSON.parse(saved!);
    return initialValue || "";
  });

  let keys = Object.keys(localStorage);
  const mappedKeys = keys.map((el: string, i: number) => {
    if (el !== "loglevel") {
      let item: El = JSON.parse(localStorage[el]);
      return (
        <li className="li-item" key={i}>
          {item.name.toUpperCase()}:<br></br>CALS: {item.calories}; <br></br>
          FAT: {item.fat_total_g}; <br></br>CARBS: {item.carbohydrates_total_g};{" "}
          <br></br>PROTEIN: {item.protein_g}
        </li>
      );
    }
  });

  const getTotalMacros = () => {
    let keys2 = Object.keys(localStorage);
    let macroObj: {[index: string]: number} = {} = keys2.reduce(
      (acc: {[index: string]: number} = {}, cur: string) => {
        if (cur !== "loglevel") {
          let food = JSON.parse(localStorage[cur]);
          acc["calories"] += food.calories;
          acc["carbs"] += food.carbohydrates_total_g;
          acc["protein"] += food.protein_g;
          acc["fat"] += food.fat_total_g;
        }
        return acc;
      },
      { calories: 0, carbs: 0, protein: 0, fat: 0 }
    );
    return Object.keys(macroObj).map((el: string, i: number) => {
      return (
        <p key={i}>
          {el}: {macroObj[el].toFixed(2)}
        </p>
      );
    });
  };

  return (
    <>
      <h2 className="saved-title">Saved Foods</h2>
      <ul className="list">{mappedKeys}</ul>
      <h2>Total Macros</h2>
      <h3>{getTotalMacros()}</h3>
      <button onClick={() => {
        localStorage.clear();
        window.location.reload();
      }}>Clear</button>
    </>
  );
};

export default Saved;
