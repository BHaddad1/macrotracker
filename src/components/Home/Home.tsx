import "../Home/Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {

  return (
    <main>
      <h1 className="header">MacroTracker</h1>
      <NavLink to={"/form"} className="home-link">Get Started</NavLink>
      <section className="about">About: </section>
      <p className="home-about">Welcome to an easy way to track your macros!</p>
      <p className="home-about">Simply fill out the form, view the results, and save your macros in a list.</p>
    </main>
  )

}

export default Home; 