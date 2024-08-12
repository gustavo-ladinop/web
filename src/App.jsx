
import './App.css'
import Saludo from './components/Saludo'
import Card from './components/Card'
import {Productos} from './components/Productos'
import { Link } from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const articulos = [
     {
         nombre: "The A Team Bullet Rid",
         description: "Plumaje azul",
         price: 100000,
        disponible: true,
       },
       {
         nombre: "Chevrolet 1972 Blazer 2WD",
         description: "Plumaje de colores",
         price: 2000,
        //  img: canario,
         disponible: false,
       },
     ];
 
    return (
      <>
     
      <Router> 
        <div className="container">
          <div className='row'>
            <div className='col-4'><Link to={"/"}>Trucks</Link></div>
            <div className='col-4'><Link to={"/Saludo/"}>Trains</Link></div>
            <div className='col-4'>Contact</div>
          </div>

         <div className='container'>
          <Routes>
            <Route path="/" element={<Saludo></Saludo>}>   </Route>
            <Route path="/Saludo/" element={<Productos  articulos={ articulos}> </Productos>}></Route>

          </Routes>
          </div> 
        </div>
      </Router>      
      </>
  )
}

export default App
