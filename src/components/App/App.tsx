import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Form from '../Form/Form';
import Results from "../Results/Results";
import Saved from "../Saved/Saved"


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/results' element={<Results />}/>
        <Route path='/saved' element={<Saved />}/>
      </Routes>
    </>
  )
}

export default App;
