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
function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="body">
    <Navbar/>
   <TableClient/>

    </section>
  )
}

export default App
