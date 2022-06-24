import React, { useState } from "react";
import Cards from "./components/Cards";
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import celebsData from './data'
import './App.css'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedImages, setClickedImages] = useState([])

  const handleScore = () => {
    setScore(score + 1)
  }

  const handleClickedImages = (id) => {
    setClickedImages(clickedImages.concat(id))
  }

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  

  const handleClick = (id) => {
    handleScore()
    shuffleArray(celebsData)
    handleClickedImages(id)

    
    if(clickedImages.includes(id)) {
      if(score > highScore) {
        setHighScore(score)
      }
      setClickedImages([])
      setScore(0)
    }
  }

  let arr = celebsData.map(data => <Card key={data.id} data={data} handleClick={handleClick} />)

  return(
    <div className="app">
      <h1>Celebrity Memory Game</h1>
      <ScoreBoard score={score} highScore={highScore} />
      <Cards>
        {arr}
      </Cards>
    </div>
  )
}

export default App;