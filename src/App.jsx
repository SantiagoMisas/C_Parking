import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Login} from './components/Login';
import { Navbar } from './components/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="body">
    <Navbar/>
    <Login/>

    </section>
  )
}

export default App
