import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/support")
  }

  return (
    <div>
        <div>
        This is Home page.
        </div>
        <button onClick={clickHandler}>Support</button>
    </div>
  )
}

export default Home
