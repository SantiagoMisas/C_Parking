import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Login} from './components/Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="body">
      <Login/>

    </section>
  )
}

export default App
