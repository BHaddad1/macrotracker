import { useState, useEffect } from "react";
import { getFood } from "../../apiCalls";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";

const Form = () => {

  const params = useParams();
  const navigate = useNavigate();
  const[food, setFood] = useState("");
  const [error, setError] = useState("");
  const [foodReceived, setFoodReceived] = useState("");

  useEffect(() => {
    if (foodReceived) {
      navigate(`/results`, {
        state: {foodInfo: foodReceived}
    })
    }
  }, [foodReceived])

  return (
    <form>
      <div className="form-container">
        <p className="header">Enter Name of Food</p>
        <input className="food-input" type="text" name="food" onChange={e => setFood(e.target.value)} placeholder="Type food here"></input>
        <button className="form-button" onClick={(e)=>{
          e.preventDefault()
          getFood(food)
          .then(data => {
            setFoodReceived(data)
          })
          .catch(err => setError(err))
        }}>Check Macros</button>
      </div>
    </form>
  )
}

export default Form; 