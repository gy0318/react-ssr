import React, { useState } from "react"
import { Link, useRoutes } from 'react-router-dom'
import routes from "./router"
const App = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>Hello React SSR</h2>
      <h3>{counter}</h3>
      <button onClick={increment}>+1</button>
      <hr />
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>about</button>
      </Link>
      {useRoutes(routes)}
    </div>
  )
}


export default App