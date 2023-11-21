import "../Home/Home.css";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {

  return (
    <main>
      <h1>MacroTracker</h1>
      <section className="about">
        <p className="home-about">Welcome to an easy way to track your macros!</p>
        <p className="home-about">Simply fill out the form, view the results, and save your macros in a list.</p>
      </section>
      <NavLink to={"/form"} className="home-link">Get Started Here</NavLink>
    </main>
  )

}

export default Home; 