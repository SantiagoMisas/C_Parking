import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Login} from './components/Login';
import { Navbar } from './components/Navbar';
import { TableClient } from './components/TableClient';
import { TableVehicle } from './components/TableVehicle';
import { TableProduct } from './components/TableProduct';
import { TableService } from './components/TableService';
import { TableBilling } from './components/TableBilling';
import { Footer } from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="body">
    <Navbar/>
   <TableVehicle/>
  <Footer/>
    </section>
  )
}

export default App
