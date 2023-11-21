import { useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  Chart as ChartJS,
  ArcElement,
  Tooltip, 
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import "./Results.css";

ChartJS.register(ArcElement,
  Tooltip, 
  Legend);

const Results = () => {

  const location = useLocation(); 
  const [foodInfo, setFoodInfo] = useState(location.state.foodInfo[0]);
  const navigate = useNavigate(); 
  
  const data = {
    labels: ['Fat', 'Protein', 'Carbs'],
    datasets: [
      {
        label: "Macros for food in grams",
        data: [foodInfo.fat_total_g, foodInfo.protein_g, foodInfo.carbohydrates_total_g],
        backgroundColor: [
          '#89fc00',
          '#dc0073',
          '#00a1e4'
        ],
        borderWidth: 1,
      }
    ]
  }
  
  return (
    <>
    <h1 className="results-title">Macros for {foodInfo.name} per 100g</h1>
      <div style={{ textAlign: "center" }}>
        <Pie
          data={data}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020"
              }
            }
          }}
        />
      </div>
      <p>Calories: {foodInfo.calories}</p>
      <p>Fat: {foodInfo.fat_total_g}</p>
      <p>Protein: {foodInfo.protein_g}</p>
      <p>Carbs: {foodInfo.carbohydrates_total_g}</p>
      <p>Fiber: {foodInfo.fiber_g}</p>
      <p>Sodium: {foodInfo.sodium_mg}</p>
      <button onClick={() => {
        let food = JSON.stringify(foodInfo);
        localStorage.setItem(`${foodInfo.name}`, food);
        navigate('/saved', {
        state: {foodInfo: foodInfo}
    })}}>Save Food?</button>
    </>
  )
}

  export default Results; 