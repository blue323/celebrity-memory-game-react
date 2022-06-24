import React from 'react'
import './ScoreBoard.css'

const ScoreBoard = ({score, highScore}) => {

    return(
        <div className="score">
            <h3>Score: {score} </h3>
            <h3>High Score: {highScore}/12</h3>
        </div>
    )
}

export default ScoreBoard