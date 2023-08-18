import { useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  Chart as ChartJS,
  ArcElement,
  Tooltip, 
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement,
  Tooltip, 
  Legend);

const Results = () => {

  const location = useLocation(); 
  const [foodInfo, setFoodInfo] = useState(location.state.foodInfo[0]);
  
  const data = {
    labels: ['Fat', 'Protein', 'Carbs'],
    datasets: [
      {
        label: "Macros for food in GRAMS",
        data: [foodInfo.fat_total_g, foodInfo.protein_g, foodInfo.carbohydrates_total_g],
        backgroundColor: [
          'black',
          'red',
          'blue'
        ],
        borderWidth: 1,
      }
    ]
  }

  return (
    <>
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
    </>
  )
}

  export default Results; 