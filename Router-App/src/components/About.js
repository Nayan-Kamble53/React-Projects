import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/labs");
  }
  return (
    <div>
        <div>
        This is About page.
        </div>
        <button onClick={clickHandler}>Labs</button>
    </div>
  )
}

export default About
