import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ColorList from './Components/ColorLIst'
import { getRandomColor } from './helper'

function App() {
  
const colors= [getRandomColor(),getRandomColor(),getRandomColor()]
const randomIndex = Math.floor(Math.random() * colors.length);
const target = colors[randomIndex];

  return (
    <>
      <h1>Guess the color!!</h1>
      <p>הצבע שנבחר הוא: {target}</p>
      <ColorList colors={colors} target={target}></ColorList>  

    </>
  )
}

export default App
