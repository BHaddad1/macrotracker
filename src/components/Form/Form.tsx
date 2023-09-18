import { useState, useEffect } from "react";
import { getFood } from "../../apiCalls";
import { useNavigate, useParams } from "react-router-dom";

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
      <div>Enter Name of Food</div>
      <input className="food-input" type="text" name="food" onChange={e => setFood(e.target.value)} placeholder="Type food here"></input>
      <button onClick={(e)=>{
        e.preventDefault()
        getFood(food)
        .then(data => {
          setFoodReceived(data)
        })
        .catch(err => setError(err))
      }}></button>
    </form>
  )
}

export default Form; 