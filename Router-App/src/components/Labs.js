import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/");
  }
  return (
    <div>
        <div>
        This is labs page
        </div>
        <button onClick={clickHandler}>Home</button>
    </div>
  )
}

export default Labs
