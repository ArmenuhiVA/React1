import { useState } from 'react'
import './App.css'
import HelloWorld from './HelloWorld'

function App() {

  return (
    <>
     <HelloWorld name = {prompt("Enter Your Name")}/>
    </>
  )
}

export default App
