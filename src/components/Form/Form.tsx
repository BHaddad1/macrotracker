import {useState} from "react"
import { getFood } from "../../apiCalls"

const Form = () => {

  const[food, setFood] = useState("")


  return (
    <form>
      <div>FORMMMMM</div>
      <input className="food-input" type="text" name="food" onChange={e => setFood(e.target.value)} placeholder="Type food here"></input>
      <button onClick={(e)=>{
        e.preventDefault()
        getFood(food)
        .then(data=>console.log(data))
      }}></button>
    </form>
  )
}

export default Form; 